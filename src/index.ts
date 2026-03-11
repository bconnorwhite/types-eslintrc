import { type JSONValue, jsonValueSchema } from "types-json";
import { z } from "zod";
import { type ESLintEnvironment, esLintEnvironmentSchema } from "./environment.js";

export const fileName = ".eslintrc.json";

export type { ESLintEnvironment };

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
  ecmaVersion?: ESLintECMAVersion;
  sourceType?: "script" | "module";
  ecmaFeatures?: {
    globalReturn?: boolean;
    impliedStrict?: boolean;
    jsx?: boolean;
    experimentalObjectRestSpread?: boolean;
  };
};

export type ESLintConfig = {
  $schema?: string;
  env?: ESLintEnvironment;
  extends?: string | string[];
  globals?: {
    [name: string]: ESLintGlobalPermission;
  };
  noInlineConfig?: boolean;
  ignorePatterns?: string[];
  overrides?: ESLintOverride[];
  parser?: "esprima" | "@babel/eslint-parser" | "@typescript-eslint/parser" | string;
  parserOptions?: ESLintParserOptions;
  plugins?: string[];
  processor?: string;
  reportUnusedDisableDirectives?: boolean;
  rules?: ESLintRules;
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
      files: z.union([z.string(), z.array(z.string())])
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
      experimentalObjectRestSpread: z.boolean().optional()
    }).optional()
  }).optional(),
  plugins: z.array(z.string()).optional(),
  processor: z.string().optional(),
  reportUnusedDisableDirectives: z.boolean().optional(),
  rules: z.record(esLintRuleSchema).optional(),
  settings: z.record(z.any()).optional()
}).strict();

export function isESLintConfig(value?: unknown): value is ESLintConfig {
  return schema.safeParse(value).success;
}

export function parseESLintConfig(value?: unknown): ESLintConfig | undefined {
  return isESLintConfig(value) ? value : undefined;
}
