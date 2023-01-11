<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>types-eslintrc</h1>
  <a href="https://npmjs.com/package/types-eslintrc">
    <img alt="NPM" src="https://img.shields.io/npm/v/types-eslintrc.svg">
  </a>
  <a href="https://github.com/bconnorwhite/types-eslintrc">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/types-eslintrc.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/types-eslintrc?branch=master">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/types-eslintrc.svg?branch=master">
  </a>
</div>

<br />

<blockquote align="center">Type checking for ESLint configs.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/types-eslintrc">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/types-eslintrc?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

This package uses [zod](https://www.npmjs.com/package/zod) to type check ESLint configs.

## Installation

```sh
yarn add types-eslintrc
```

```sh
npm install types-eslintrc
```

```sh
pnpm add types-eslintrc
```

## Usage

### Types

```ts
import {
  ESLintConfig,
  isESLintConfig,
  parseESLintConfig
} from "types-eslintrc";

const myConfig = {
  // ...
};

if(isESLintConfig(myConfig)) {
  // myConfig is now typed as ESLintConfig
}

const myConfig = parseESLintConfig(myConfig);
// If myConfig is valid, it will return as ESLintConfig. Otherwise, it will return undefined.
```

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/types-eslintrc?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/types-eslintrc.svg"></a></h2>

- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON objects
- [zod](https://www.npmjs.com/package/zod): TypeScript-first schema declaration and validation library with static type inference

<br />

<h3>Dev Dependencies</h3>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/types-eslintrc.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _MIT License_
<!--END FOOTER-->

<br />

## Related Projects

- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON objects
- [types-tsconfig](https://www.npmjs.com/package/types-tsconfig): Type checking for tsconfig.json
- [types-pkg-json](https://www.npmjs.com/package/types-pkg-json): Type checking for package.json
