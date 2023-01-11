import { z } from "zod";

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
};

export const esLintEnvironmentSchema = z.object({
    browser: z.boolean().optional(),
    node: z.boolean().optional(),
    commonjs: z.boolean().optional(),
    es6: z.boolean().optional(),
    es2017: z.boolean().optional(),
    es2020: z.boolean().optional(),
    es2021: z.boolean().optional(),
    worker: z.boolean().optional(),
    amd: z.boolean().optional(),
    mocha: z.boolean().optional(),
    jasmine: z.boolean().optional(),
    jest: z.boolean().optional(),
    phantomjs: z.boolean().optional(),
    protractor: z.boolean().optional(),
    qunit: z.boolean().optional(),
    jquery: z.boolean().optional(),
    prototypejs: z.boolean().optional(),
    shelljs: z.boolean().optional(),
    meteor: z.boolean().optional(),
    mongo: z.boolean().optional(),
    applescript: z.boolean().optional(),
    nashorn: z.boolean().optional(),
    serviceworker: z.boolean().optional(),
    atomtest: z.boolean().optional(),
    embertest: z.boolean().optional(),
    webextensions: z.boolean().optional(),
    greasemonkey: z.boolean().optional(),
  }).and(z.record(z.union([z.boolean(), z.undefined()])))
