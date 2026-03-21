import { describe, expect, it } from "vitest";

import { getContent } from "@/content";

describe("legal copy", () => {
  it("mentions Liqunch clearly in both locale terms", () => {
    expect(getContent("zh").legal.termsBody).toContain("Liqunch");
    expect(getContent("en").legal.termsBody).toContain("Liqunch");
  });

  it("provides Paddle-aligned refund policy windows in both locales", () => {
    expect(getContent("zh").legal.refundTitle).toBeTruthy();
    expect(getContent("zh").legal.refundBody).toContain("Paddle");
    expect(getContent("zh").legal.refundBody).toMatch(/14/);
    expect(getContent("zh").legal.refundBody).toMatch(/7/);
    expect(getContent("zh").legal.refundBody).toMatch(/5/);
    expect(getContent("zh").legal.refundBody).not.toMatch(/按实际情况|审核与处理|酌情|case[- ]by[- ]case/i);
    expect(getContent("en").legal.refundTitle).toBeTruthy();
    expect(getContent("en").legal.refundBody).toContain("Paddle");
    expect(getContent("en").legal.refundBody).toMatch(/14/);
    expect(getContent("en").legal.refundBody).toMatch(/7/);
    expect(getContent("en").legal.refundBody).toMatch(/5/);
    expect(getContent("en").legal.refundBody).not.toMatch(
      /case[- ]by[- ]case|discretionary|we can review|we will review/i
    );
  });

  it("keeps refund FAQ answers aligned with the legal policy", () => {
    const zhRefundFaq = getContent("zh").faqs.find((faq) => faq.question.includes("退款"));
    const enRefundFaq = getContent("en").faqs.find((faq) => faq.question.includes("refund"));

    expect(zhRefundFaq?.answer).toContain("Paddle");
    expect(zhRefundFaq?.answer).toMatch(/7/);
    expect(enRefundFaq?.answer).toContain("Paddle");
    expect(enRefundFaq?.answer).toMatch(/7/);
  });

  it("expands privacy and terms into standard structured sections", () => {
    const zh = getContent("zh").legal;
    const en = getContent("en").legal;

    expect(zh.privacySections.length).toBeGreaterThanOrEqual(5);
    expect(en.privacySections.length).toBeGreaterThanOrEqual(5);
    expect(zh.termsSections.length).toBeGreaterThanOrEqual(5);
    expect(en.termsSections.length).toBeGreaterThanOrEqual(5);

    expect(en.privacySections.map((section) => section.heading)).toEqual(
      expect.arrayContaining([
        "What Information We Collect",
        "How We Use Information",
        "Payments Through Paddle"
      ])
    );
    expect(zh.privacySections.map((section) => section.heading)).toEqual(
      expect.arrayContaining(["我们收集的信息", "信息的使用方式", "通过 Paddle 处理付款"])
    );

    expect(en.termsSections.map((section) => section.heading)).toEqual(
      expect.arrayContaining(["Who These Terms Apply To", "License and Permitted Use", "Payments and Refunds"])
    );
    expect(zh.termsSections.map((section) => section.heading)).toEqual(
      expect.arrayContaining(["条款适用范围", "许可与允许的使用方式", "付款与退款"])
    );
  });

  it("uses the unified public contact email in both locales", () => {
    const zh = getContent("zh");
    const en = getContent("en");

    expect(zh.faqs.find((faq) => faq.question.includes("联系"))?.answer).toContain("elisonyung@gmail.com");
    expect(en.faqs.find((faq) => faq.question.includes("contact"))?.answer).toContain("elisonyung@gmail.com");
    expect(zh.legal.privacySections.at(-1)?.paragraphs.join(" ")).toContain("elisonyung@gmail.com");
    expect(en.legal.privacySections.at(-1)?.paragraphs.join(" ")).toContain("elisonyung@gmail.com");
    expect(zh.legal.termsSections.at(-1)?.paragraphs.join(" ")).toContain("elisonyung@gmail.com");
    expect(en.legal.termsSections.at(-1)?.paragraphs.join(" ")).toContain("elisonyung@gmail.com");
  });
});
