<div align="center">
  <h1>types-eslintrc</h1>
  <a href="https://npmjs.com/package/types-eslintrc">
    <img alt="npm" src="https://img.shields.io/npm/v/types-eslintrc.svg">
  </a>
  <a href="https://github.com/bconnorwhite/types-eslintrc">
    <img alt="typescript" src="https://img.shields.io/badge/TypeScript-%F0%9F%91%8D-blue.svg">
  </a>
  <a href="https://github.com/bconnorwhite/types-eslintrc">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/types-eslintrc?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Type checking for .eslintrc.json.

## Installation

```bash
yarn add types-eslintrc
```

```bash
npm install types-eslintrc
```

## API

### Types

```ts
import {
  ESLintConfig,
  ESLintParserOptions,
  ESLintGlobalPermission,
  ESLintOverride,
  ESLintRules,
  ESLintRule,
  ESLintSeverity,
  ESLintECMAVersion,
  ESLintEnvironment,
  fileName
} from "types-eslintrc";

console.log(fileName); // ".eslintrc.json"
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/types-eslintrc.svg"></h2>

- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON objects

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/types-eslintrc.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/types-eslintrc.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)

<br />

## Related Projects

- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON objects
- [types-tsconfig](https://www.npmjs.com/package/types-tsconfig): Type checking for tsconfig.json
- [types-pkg-json](https://www.npmjs.com/package/types-pkg-json): Type checking for package.json
