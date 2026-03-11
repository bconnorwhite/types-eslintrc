import { z } from "zod";

export type ESLintEnvironment = {
  browser?: boolean;
  node?: boolean;
  commonjs?: boolean;
  ["shared-node-browser"]?: boolean;
  es6?: boolean;
  es2017?: boolean;
  es2020?: boolean;
  es2021?: boolean;
  worker?: boolean;
  amd?: boolean;
  mocha?: boolean;
  jasmine?: boolean;
  jest?: boolean;
  phantomjs?: boolean;
  protractor?: boolean;
  qunit?: boolean;
  jquery?: boolean;
  prototypejs?: boolean;
  shelljs?: boolean;
  meteor?: boolean;
  mongo?: boolean;
  applescript?: boolean;
  nashorn?: boolean;
  serviceworker?: boolean;
  atomtest?: boolean;
  embertest?: boolean;
  webextensions?: boolean;
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
  greasemonkey: z.boolean().optional()
}).and(z.record(z.union([z.boolean(), z.undefined()])));
