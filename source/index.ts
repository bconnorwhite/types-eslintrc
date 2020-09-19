import { JSONValue } from "types-json";

export const fileName = ".eslintrc.json";

export type ESLintEnvironment = {
  /**
   * Browser global variables.
   */
  browser?: boolean;
  /**
   * Node.js global variables and Node.js scoping.
   */
  node?: boolean;
  /**
   * CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
   */
  commonjs?: boolean;
  /**
   * Globals common to both Node.js and Browser.
   */
  ["shared-node-browser"]?: boolean;
  /**
   * Enable all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6).
   */
  es6?: boolean;
  /**
   * Adds all ECMAScript 2017 globals and automatically sets the ecmaVersion parser option to 8.
   */
  es2017?: boolean;
  /**
   * Adds all ECMAScript 2020 globals and automatically sets the ecmaVersion parser option to 11.
   */
  es2020?: boolean;
  /**
   * Adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
   */
  es2021?: boolean;
  /**
   * Web workers global variables.
   */
  worker?: boolean;
  /**
   * Defines require() and define() as global variables as per the amd spec.
   */
  amd?: boolean;
  /**
   * Adds all of the Mocha testing global variables.
   */
  mocha?: boolean;
  /**
   * Adds all of the Jasmine testing global variables for version 1.3 and 2.0.
   */
  jasmine?: boolean;
  /**
   * Jest global variables.
   */
  jest?: boolean;
  /**
   * PhantomJS global variables.
   */
  phantomjs?: boolean;
  /**
   * Protractor global variables.
   */
  protractor?: boolean;
  /**
   * QUnit global variables.
   */
  qunit?: boolean;
  /**
   * jQuery global variables.
   */
  jquery?: boolean;
  /**
   * Prototype.js global variables.
   */
  prototypejs?: boolean;
  /**
   * ShellJS global variables.
   */
  shelljs?: boolean;
  /**
   * Meteor global variables.
   */
  meteor?: boolean;
  /**
   * Meteor global variables.
   */
  mongo?: boolean;
  /**
   * AppleScript global variables.
   */
  applescript?: boolean;
  /**
   * Java 8 Nashorn global variables.
   */
  nashorn?: boolean;
  /**
   * Service Worker global variables.
   */
  serviceworker?: boolean;
  /**
   * Atom test helper globals.
   */
  atomtest?: boolean;
  /**
   * Ember test helper globals.
   */
  embertest?: boolean;
  /**
   * WebExtensions globals.
   */
  webextensions?: boolean;
  /**
   * GreaseMonkey globals.
   */
  greasemonkey?: boolean;
  [custom: string]: boolean | undefined;
}

export type ESLintECMAVersion = 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021;

export type ESLintSeverity = "off" | "warn" | "error" | 0 | 1 | 2;

export type ESLintRule = ESLintSeverity | [value: ESLintSeverity, ...options: JSONValue[]];

export type ESLintRules = {
  [name: string]: ESLintRule;
};

export type ESLintOverride = {
  excludedFiles?: string | string[];
  files: string | string[];
} & ESLintConfig;

export type ESLintGlobalPermission = "readonly" | "writable" | "off" | "readable" | boolean;

export type ESLintParserOptions = {
  /**
   * Set to 3, 5 (default), 6, 7, 8, 9, 10, 11, or 12 to specify the version of ECMAScript syntax you want to use. You can also set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), 2019 (same as 10), 2020 (same as 11), or 2021 (same as 12) to use the year-based naming.
   */
  ecmaVersion?: ESLintECMAVersion;
  /**
   * Set to "script" (default) or "module" if your code is in ECMAScript modules.
   */
  sourceType?: "script" | "module";
  /**
   * An object indicating which additional language features you'd like to use.
   */
  ecmaFeatures?: {
    /**
     * Allow return statements in the global scope
     */
    globalReturn?: boolean;
    /**
     * Enable global strict mode (if ecmaVersion is 5 or greater)
     */
    impliedStrict?: boolean;
    /**
     * Enable JSX
     */
    jsx?: boolean;
    /**
     * @deprecated Previously, when using the default parser it was possible to use the experimentalObjectRestSpread option to enable support for rest/spread properties.
     */
    experimentalObjectRestSpread?: boolean;
  };
};

export type ESLintConfig = {
  $schema?: string;
  /**
   * An environment defines global variables that are predefined.
   */
  env?: ESLintEnvironment;
  /**
   * A configuration file can extend the set of enabled rules from base configurations.
   */
  extends?: string | string[];
  /**
   * The additional global variables your script accesses during execution.
   */
  globals?: {
    [name: string]: ESLintGlobalPermission;
  };
  /**
   * To disable all inline config comments
   */
  noInlineConfig?: boolean;
  /**
   * You can tell ESLint to ignore specific files and directories by using ignorePatterns.
   */
  ignorePatterns?: string[];
  /**
   * To disable rules inside of a configuration file for a group of files, use the overrides key along with a files key.
   */
  overrides?: ESLintOverride[];
  /**
   * @default "esprisma"
   */
  parser?: "esprima" | "@babel/eslint-parser" | "@typescript-eslint/parser" | string;
  /**
   * The JavaScript language options you want to support.
   */
  parserOptions?: ESLintParserOptions;
  /**
   * To configure plugins inside of a configuration file, use the plugins key, which contains a list of plugin names.
   */
  plugins?: string[];
  /**
   * Processors can extract JavaScript code from another kind of files, then lets ESLint lint the JavaScript code. Or processors can convert JavaScript code in preprocessing for some purpose.
   */
  processor?: string;
  /**
   * To report unused eslint-disable comments
   */
  reportUnusedDisableDirectives?: boolean;
  /**
   * Which rules are enabled and at what error level.
   */
  rules?: ESLintRules;
  /**
   * You can add settings object to ESLint configuration file and it will be supplied to every rule that will be executed. This may be useful if you are adding custom rules and want them to have access to the same information and be easily configurable.
   */
  settings?: {
    [setting: string]: JSONValue;
  };
}
