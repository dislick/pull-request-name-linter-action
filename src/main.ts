import * as core from '@actions/core';
import { context } from '@actions/github';
import lint from '@commitlint/lint';
import load from '@commitlint/load';

async function run(): Promise<void> {
  try {
    const configPath = core.getInput('configuration-path', { required: true });
    const prTitle = context.payload.pull_request?.title;

    core.info(`Linting title "${prTitle}"`);
    await lintPullRequest(prTitle, configPath);
  } catch (error) {
    core.setFailed(error.message);
  }
}

export async function lintPullRequest(title: string, configPath: string) {
  const opts = await load({}, { file: configPath, cwd: process.cwd() });

  const result = await lint(
    title,
    opts.rules,
    opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}
  );

  if (result.valid) {
    return;
  }

  const errorMessage = result.errors
    .map(({ message, name }: any) => `${name}:${message}`)
    .join('\n');

  throw new Error(errorMessage);
}

run();
