import { test, expect } from "@jest/globals";
import { fileName, parseESLintConfig, isESLintConfig } from "../source/index.js";

test("import sanity check", () => {
  expect(fileName).toBe(".eslintrc.json");
});

test("isESLintConfig", () => {
  expect(isESLintConfig()).toBe(false);
  expect(isESLintConfig({})).toBe(true);
  expect(isESLintConfig({ foo: "bar" })).toBe(false);
  expect(isESLintConfig({ env: { node: true } })).toBe(true);
});

test("parseESLintConfig", () => {
  expect(parseESLintConfig()).toBe(undefined);
  expect(parseESLintConfig({})).toStrictEqual({});
  expect(parseESLintConfig({ foo: "bar" })).toBeUndefined();
  expect(parseESLintConfig({ env: { node: true } })).toStrictEqual({ env: { node: true } });
});
