import { JSONValue, jsonValueSchema } from "types-json";
import { z } from "zod";
import { ESLintEnvironment, esLintEnvironmentSchema } from "./environment.js";

export const fileName = ".eslintrc.json";

export type {
  ESLintEnvironment
};

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
   * Set to 3, 5 (default), 6, 7, 8, 9, 10, 11, or 12 to specify the version of ECMAScript syntax you want to use.
   * You can also set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), 2019 (same as 10),
   * 2020 (same as 11), or 2021 (same as 12) to use the year-based naming.
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
   * Processors can extract JavaScript code from another kind of files, then lets ESLint lint the JavaScript code.
   * Or processors can convert JavaScript code in preprocessing for some purpose.
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
   * You can add settings object to ESLint configuration file and it will be supplied to every rule that will be executed.
   * This may be useful if you are adding custom rules and want them to have access to the same information and be easily configurable.
   */
  settings?: {
    [setting: string]: JSONValue;
  };
};

const esLintECMAVersionSchema = z.union([
  z.literal(3),
  z.literal(5),
  z.literal(6),
  z.literal(7),
  z.literal(8),
  z.literal(9),
  z.literal(10),
  z.literal(11),
  z.literal(12),
  z.literal(2015),
  z.literal(2016),
  z.literal(2017),
  z.literal(2018),
  z.literal(2019),
  z.literal(2020),
  z.literal(2021)
]);

const esLintSeveritySchema = z.union([
  z.literal("off"),
  z.literal("warn"),
  z.literal("error"),
  z.literal(0),
  z.literal(1),
  z.literal(2)
]);

const esLintGlobalPermissionSchema = z.union([
  z.literal("readonly"),
  z.literal("writable"),
  z.literal("off"),
  z.literal("readable"),
  z.boolean()
]);

const esLintRuleSchema = z.union([
  esLintSeveritySchema,
  z.tuple([esLintSeveritySchema]).rest(jsonValueSchema)
]);

export const schema: z.ZodType<ESLintConfig> = z.object({
  $schema: z.string().optional(),
  env: esLintEnvironmentSchema.optional(),
  extends: z.union([z.string(), z.array(z.string())]).optional(),
  globals: z.record(esLintGlobalPermissionSchema).optional(),
  noInlineConfig: z.boolean().optional(),
  ignorePatterns: z.array(z.string()).optional(),
  overrides: z.array(
    z.object({
      excludedFiles: z.union([z.string(), z.array(z.string())]).optional(),
      files: z.union([z.string(), z.array(z.string())]),
    }).and(z.lazy(() => schema))
  ).optional(),
  parser: z.union([z.literal("esprima"), z.literal("@babel/eslint-parser"), z.literal("@typescript-eslint/parser"), z.string()]).optional(),
  parserOptions: z.object({
    ecmaVersion: esLintECMAVersionSchema.optional(),
    sourceType: z.union([z.literal("script"), z.literal("module")]).optional(),
    ecmaFeatures: z.object({
      globalReturn: z.boolean().optional(),
      impliedStrict: z.boolean().optional(),
      jsx: z.boolean().optional(),
      experimentalObjectRestSpread: z.boolean().optional(),
    }).optional(),
  }).optional(),
  plugins: z.array(z.string()).optional(),
  processor: z.string().optional(),
  reportUnusedDisableDirectives: z.boolean().optional(),
  rules: z.record(esLintRuleSchema).optional(),
  settings: z.record(z.any()).optional(),
}).strict();

export function isESLintConfig(value?: unknown): value is ESLintConfig {
  return schema.safeParse(value).success;
}

export function parseESLintConfig(value?: unknown): ESLintConfig | undefined {
  return isESLintConfig(value) ? value : undefined;
}

