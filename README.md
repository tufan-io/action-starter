# @tufan/action-starter

<!--

[![Build status](https://tufan-io.github.io/action-starter/ci/badge/build.svg)](https://github.com/tufan-io/action-starter/actions)
![Coverage](https://tufan-io.github.io/action-starter/ci/badge/coverage.svg)
-->

A simple, full-functionality starter package for building github-actions,
built in TypeScript.

The goal is to be simple, lean and automated.

- minimize dependencies.
- use simpler-to-understand dependencies when necessary.
- enable a move-fast mindset.

Support for the following is baked in:

- [x] [tslint](https://github.com/palantir/tslint)
- [x] build automation
- [x] [ava](https://github.com/avajs/ava) test-automation
- [x] test coverage (remapped to TypeScript)
- [x] checks dependencies for known vulnerabilities before commit.
- [x] CI integration - using github actions
- [x] [Code of Conduct](./CODE_OF_CONDUCT.md)
- [x] [commitizen](https://www.npmjs.com/package/commitizen) integration

## Usage

```bash
npx degit https://github.com/tufan-io/action-starter my-github-action
cd my-github-action
npm install
```
or

```bash
npm install degit -g
degit https://github.com/tufan-io/action-starter my-github-action
cd my-github-action
npm install
```

Answer a few questions to customize the repo, and you're off to the races.

At this point, explore `./src` for the bare bones example.
Typically, you'd want to modify `./src/index.ts` to get started.

## Development Tooling

- [Development tooling](./docs/DevTools.md)
- [Changelog](./CHANGELOG.md)

## License

[Apache-2.0](./LICENSE.md)

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## Support

Bugs, PRs, comments, suggestions welcomed!
