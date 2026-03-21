# Standard Legal Pages Design

**Goal:** Expand the Privacy Policy and Terms of Service into standard commercial website legal pages without over-claiming features or commitments that `Liqunch` does not currently have.

**Scope:** Keep the existing routes and overall page shell. Replace single-paragraph legal copy with structured sections and short paragraphs for the English and Chinese locales.

**Design:**
- Keep a short lead paragraph for each page so the top of the page remains scannable.
- Add structured sections for privacy and terms so the pages read like formal website policies instead of one-line notices.
- Limit content to current product reality: website operation, Paddle payments, support email, direct download, license activation, and ordinary product updates.
- Avoid heavy legal boilerplate that implies broader obligations, enterprise commitments, or unsupported data practices.

**Privacy sections:**
- What information we collect
- How we use information
- Payments through Paddle
- Data retention and security
- Third-party services and links
- Contact

**Terms sections:**
- Who the terms apply to
- License and permitted use
- Payments and refunds
- Restrictions
- Support and updates
- Liability and contact

**Rendering:**
- Add section arrays to localized content.
- Render each section as a titled legal block with one or more paragraphs.

**Testing:**
- Add content-level tests that both locales expose multiple sections for privacy and terms.
- Assert the presence of key section headings so the pages do not regress back to single-paragraph notices.
