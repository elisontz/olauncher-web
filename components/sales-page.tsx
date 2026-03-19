import React from "react";
import Script from "next/script";

import { ExperienceSection } from "@/components/experience-section";
import { FaqSection } from "@/components/faq-section";
import { FeatureBento } from "@/components/feature-bento";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LanguageSwitcher } from "@/components/language-switcher";
import { PricingSection } from "@/components/pricing-section";
import { ProofStrip } from "@/components/proof-strip";
import { getContent } from "@/content";
import { siteConfig, type Locale } from "@/lib/site";

type SalesPageProps = {
  locale: Locale;
};

export function SalesPage({ locale }: SalesPageProps) {
  const content = getContent(locale);

  return (
    <>
      <Script src="https://cdn.paddle.com/paddle/v2/paddle.js" strategy="afterInteractive" />
      <div className="page-shell">
        <header className="site-header">
          <div className="site-header-copy">
            <p className="eyebrow">oLauncher</p>
            <p className="header-copy">macOS launcher for people who still think in grids</p>
          </div>
          <LanguageSwitcher locale={locale} />
        </header>
        <main className="content-stack">
          <Hero
            title={content.hero.title}
            subtitle={content.hero.subtitle}
            description={content.hero.description}
            primaryCta={content.hero.primaryCta}
            secondaryCta={content.hero.secondaryCta}
            primaryHref={siteConfig.downloadUrl}
            secondaryPriceId={siteConfig.singlePriceId}
            meta={content.hero.meta}
            badges={content.hero.badges}
            visualTiles={content.hero.visualTiles}
          />
          <ProofStrip items={content.proofItems} />
          <FeatureBento
            heading={content.featureHeading}
            intro={content.featureIntro}
            features={content.featureHighlights}
          />
          <ExperienceSection
            heading={content.experienceHeading}
            intro={content.experienceIntro}
            steps={content.experienceSteps}
          />
          <PricingSection
            heading={content.pricing.heading}
            subtitle={content.pricing.subtitle}
            tiers={content.pricing.tiers}
            ctaLabel={content.hero.secondaryCta}
            recommendedTier={content.pricing.recommendedTier}
          />
          <FaqSection heading={content.faqHeading} faqs={content.faqs} />
        </main>
        <Footer
          locale={locale}
          releaseLabel={content.footer.releaseLabel}
          releaseHref={content.footer.releaseHref}
          releaseText={content.footer.releaseText}
          privacyText={content.footer.privacyText}
          termsText={content.footer.termsText}
          refundText={content.footer.refundText}
          supportEmail={siteConfig.supportEmail}
          currentVersion={siteConfig.currentVersion}
          releaseDate={siteConfig.releaseDate}
        />
      </div>
    </>
  );
}
