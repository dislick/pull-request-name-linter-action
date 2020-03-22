# pull-request-name-linter-action

[![Actions Status](https://github.com/dislick/pull-request-name-linter-action/workflows/ci/badge.svg)](https://github.com/JulienKode/pull-request-name-linter-action/actions)

Lints pull request names with [commitlint](https://commitlint.js.org).

## Usage

```yaml
name: lint-pr-names
on:
  pull_request:
    types: ['opened', 'edited', 'reopened', 'synchronize']

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: dislick/pull-request-name-linter-action
```

## Limitations

- Only works when storing commitlint config in `commitlint.config.js`
- You cannot use `extend` in commitlint config
