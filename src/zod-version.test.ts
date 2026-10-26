import { describe, expect, test } from "vitest";
import { createRequire } from "node:module";
import { z } from "zod";

const require = createRequire(import.meta.url);

describe("zod dependency pin (GHSA-mrhx-c7xc-m3w5)", () => {
  test("zod is at the fixed version 4.6.6 and core API still works", () => {
    const pkg = require("zod/package.json") as { version: string };
    expect(pkg.version).toBe("4.6.6");
    expect(z.string().parse("hello")).toBe("hello");
  });
});
