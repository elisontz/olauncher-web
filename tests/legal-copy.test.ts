import { describe, expect, it } from "vitest";

import { getContent } from "@/content";

describe("legal copy", () => {
  it("mentions oLauncher in both locale terms", () => {
    expect(getContent("zh").legal.termsBody).toContain("oLauncher");
    expect(getContent("en").legal.termsBody).toContain("oLauncher");
  });

  it("provides refund policy copy in both locales", () => {
    expect(getContent("zh").legal.refundTitle).toBeTruthy();
    expect(getContent("zh").legal.refundBody).toContain("oLauncher");
    expect(getContent("en").legal.refundTitle).toBeTruthy();
    expect(getContent("en").legal.refundBody).toContain("oLauncher");
  });
});
