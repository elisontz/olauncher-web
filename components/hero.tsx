import Link from "next/link";

import { BuyButton } from "@/components/buy-button";

type HeroProps = {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  primaryHref: string;
  secondaryPriceId: string;
  meta: string;
};

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  primaryHref,
  secondaryPriceId,
  meta
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>
          <span>{title}</span>
          <span className="hero-subtitle-line">{subtitle}</span>
        </h1>
        <p className="lead">{description}</p>
        <div className="hero-actions">
          <Link href={primaryHref} className="primary-button">
            {primaryCta}
          </Link>
          <BuyButton label={secondaryCta} priceId={secondaryPriceId} className="secondary-button" />
        </div>
        <p className="meta">{meta}</p>
      </div>
    </section>
  );
}
