[![Actions Status](https://github.com/dislick/pull-request-name-linter-action/workflows/ci/badge.svg)](https://github.com/JulienKode/pull-request-name-linter-action/actions)

**GitHub action** to automatically **lint pull request name** with [**commitlint**](https://commitlint.js.org).
This is useful if squash merge your pull request for example.

**Note**: If you are looking to lint the commits of your pull request with commitlint you can use [commitlint-github-action](https://github.com/wagoid/commitlint-github-action)

# Pull request name linter with commitlint

## Configuration

## Usage

```yaml
name: pr-name-linter
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
