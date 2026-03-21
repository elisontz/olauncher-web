# Standard Legal Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the current single-paragraph Privacy Policy and Terms of Service with structured standard commercial legal pages for both locales.

**Architecture:** The existing legal routes already read from localized content. The simplest implementation is to preserve the existing short summary fields and add section arrays for privacy and terms, then update the legal page routes to render those sections.

**Tech Stack:** Next.js, TypeScript, Vitest

---

### Task 1: Add failing legal structure tests

**Files:**
- Modify: `liqunch-web/tests/legal-copy.test.ts`
- Test: `liqunch-web/tests/legal-copy.test.ts`

**Step 1: Write the failing test**

Add assertions that:
- both locales expose `privacySections` and `termsSections`
- each page has at least five sections
- the English and Chinese heading sets include core standard-policy topics

**Step 2: Run test to verify it fails**

Run: `npm test -- tests/legal-copy.test.ts`
Expected: FAIL because the current content only exposes single-paragraph bodies.

### Task 2: Add standard legal sections to localized content

**Files:**
- Modify: `liqunch-web/content/en.ts`
- Modify: `liqunch-web/content/zh.ts`
- Test: `liqunch-web/tests/legal-copy.test.ts`

**Step 1: Write minimal implementation**

Add:
- `privacySections`
- `termsSections`

Keep:
- `privacyBody`
- `termsBody`

**Step 2: Run targeted tests**

Run: `npm test -- tests/legal-copy.test.ts`
Expected: PASS

### Task 3: Render structured legal sections

**Files:**
- Modify: `liqunch-web/app/[locale]/privacy/page.tsx`
- Modify: `liqunch-web/app/[locale]/terms/page.tsx`
- Modify: `liqunch-web/app/globals.css`

**Step 1: Render titled legal sections**

Map over the localized section arrays and render each section with a heading and paragraphs.

**Step 2: Run full verification**

Run: `npm test`
Expected: PASS

Run: `npm run build`
Expected: PASS
