import { test, expect } from "@jest/globals";
import { fileName } from "../source";

test("import sanity check", () => {
  expect(fileName).toBe(".eslintrc.json");
});
