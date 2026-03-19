import { describe, expect, it } from "vitest";

import {
  defaultLocale,
  getLocalizedPath,
  localeLabels,
  normalizeLocale,
  siteConfig
} from "@/lib/site";
import { getContent } from "@/content";

describe("site locale helpers", () => {
  it("normalizes unknown locales back to Chinese", () => {
    expect(normalizeLocale("zh")).toBe("zh");
    expect(normalizeLocale("en")).toBe("en");
    expect(normalizeLocale("fr")).toBe(defaultLocale);
  });

  it("builds localized routes with Chinese as the default root", () => {
    expect(getLocalizedPath("zh", "")).toBe("/zh");
    expect(getLocalizedPath("zh", "release")).toBe("/zh/release");
    expect(getLocalizedPath("zh", "refund")).toBe("/zh/refund");
    expect(getLocalizedPath("en", "")).toBe("/en");
    expect(getLocalizedPath("en", "terms")).toBe("/en/terms");
  });

  it("exposes the configured labels and public environment defaults", () => {
    expect(localeLabels.zh).toBeTruthy();
    expect(localeLabels.en).toBeTruthy();
    expect(siteConfig.currentVersion).toBeTruthy();
    expect(siteConfig.supportEmail).toBe("elisonyung@gmail.com");
  });

  it("exposes redesigned homepage content blocks in both locales", () => {
    const zh = getContent("zh");
    const en = getContent("en");

    expect(zh.hero.badges).toHaveLength(4);
    expect(en.hero.badges).toHaveLength(4);
    expect(zh.hero.visualTiles.length).toBeGreaterThanOrEqual(8);
    expect(en.hero.visualTiles.length).toBeGreaterThanOrEqual(8);
    expect(zh.proofItems).toHaveLength(4);
    expect(en.proofItems).toHaveLength(4);
    expect(zh.featureHighlights.length).toBeGreaterThanOrEqual(5);
    expect(en.featureHighlights.length).toBeGreaterThanOrEqual(5);
    expect(zh.experienceSteps).toHaveLength(3);
    expect(en.experienceSteps).toHaveLength(3);
    expect(zh.pricing.recommendedTier).toBeDefined();
    expect(en.pricing.recommendedTier).toBeDefined();
  });
});
