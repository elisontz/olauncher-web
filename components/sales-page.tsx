import React from "react";
import Script from "next/script";
import Image from "next/image";

import { FeatureRail } from "@/components/feature-rail";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LanguageSwitcher } from "@/components/language-switcher";
import { PricingSection } from "@/components/pricing-section";
// import { VideoSection } from "@/components/video-section";
// import { StorySection } from "@/components/story-section";
import { getContent } from "@/content";
import { siteConfig, type Locale, type ReleaseInfo } from "@/lib/site";

type SalesPageProps = {
  locale: Locale;
  releaseInfo?: ReleaseInfo;
};

export function SalesPage({ locale, releaseInfo }: SalesPageProps) {
  const content = getContent(locale);
  const finalDownloadUrl = releaseInfo?.downloadUrl || siteConfig.downloadUrl;
  const finalVersion = releaseInfo?.version || siteConfig.currentVersion;
  const finalDate = releaseInfo?.date || siteConfig.releaseDate;

  return (
    <>
      <Script src="https://cdn.paddle.com/paddle/v2/paddle.js" strategy="afterInteractive" />
      <div className="page-shell">
        <header className="site-header">
          <div className="site-header-copy">
            <Image src="/images/logo.png" alt="Liqunch Logo" width={40} height={40} className="site-logo" />
            <p className="site-title">Liqunch</p>
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
            primaryHref={finalDownloadUrl}
            secondaryHref="#pricing"
            meta={content.hero.meta}
            releaseLabel={content.footer.releaseLabel}
            releaseDate={finalDate}
            currentVersion={finalVersion}
            versionLabel={content.footer.releaseVersion}
            releaseHref={content.footer.releaseHref}
            alternativeDownloadHref={siteConfig.alternativeDownloadUrl}
            alternativeDownloadLabel={content.footer.alternativeDownloadLabel}
          />
{/* <VideoSection locale={locale} /> */}
          <section className="story-image-section">
            <div className="story-image-container">
              <Image 
                src="https://raw.githubusercontent.com/elisontz/Liqunch-web/refs/heads/main/public/images/Full-screen%20mode%20main%20image.jpg" 
                alt="Liqunch Interface" 
                width={1200} 
                height={800} 
                className="story-image"
                priority
              />
            </div>
          </section>
          <FeatureRail heading={content.featureRail.heading} items={content.featureRail.items} />
          <PricingSection
            heading={content.pricing.heading}
            subtitle={content.pricing.subtitle}
            tiers={content.pricing.tiers}
            ctaLabel={content.pricing.ctaLabel}
            recommendedTier={content.pricing.recommendedTier}
          />
        </main>
        <Footer
          locale={locale}
          privacyText={content.footer.privacyText}
          termsText={content.footer.termsText}
          refundText={content.footer.refundText}
          contactText={content.footer.contactText}
          supportEmail={siteConfig.supportEmail}
          copyright={siteConfig.copyright}
        />
      </div>
    </>
  );
}
