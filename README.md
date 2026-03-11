<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>types-eslintrc</h1>
  <a href="https://npmjs.com/package/types-eslintrc">
    <img alt="NPM" src="https://img.shields.io/npm/v/types-eslintrc.svg">
  </a>
  <a href="https://github.com/bconnorwhite/types-eslintrc">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/types-eslintrc.svg">
  </a>
</div>

<br />

<blockquote align="center">Type checking for .eslintrc.json.</blockquote>

---
<!--END HEADER-->

<!-- BEGIN INSTALLATION -->
## Installation

<details open>
  <summary>
    <a href="https://www.npmjs.com/package/types-eslintrc">
      <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="NPM" />
    </a>
  </summary>

```sh
npm install types-eslintrc
```

</details>

<details>
  <summary>
    <a href="https://yarnpkg.com/package/types-eslintrc">
      <img src="https://img.shields.io/badge/yarn-2C8EBB?logo=yarn&logoColor=white" alt="Yarn" />
    </a>
  </summary>

```sh
yarn add types-eslintrc
```

</details>

<details>
  <summary>
    <img src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white" alt="PNPM" />
  </summary>

```sh
pnpm add types-eslintrc
```

</details>

<details>
  <summary>
    <img src="https://img.shields.io/badge/bun-EE81C3?logo=bun&logoColor=white" alt="Bun" />
  </summary>

```sh
bun add types-eslintrc
```

</details>
<!-- END INSTALLATION -->

This package uses [zod](https://www.npmjs.com/package/zod) to type check ESLint configs.

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

<br />

<!--BEGIN FOOTER-->
<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/types-eslintrc?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/types-eslintrc.svg"></a></h2>

- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON values
- [zod](https://www.npmjs.com/package/zod): TypeScript-first schema declaration and validation library with static type inference

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/types-eslintrc.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _MIT License_
<!--END FOOTER-->

## Related Projects

- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON objects
- [types-tsconfig](https://www.npmjs.com/package/types-tsconfig): Type checking for tsconfig.json
- [types-pkg-json](https://www.npmjs.com/package/types-pkg-json): Type checking for package.json
