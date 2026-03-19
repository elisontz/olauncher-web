import { BuyButton } from "@/components/buy-button";
import { siteConfig } from "@/lib/site";

type Tier = {
  name: string;
  price: string;
  originalPrice: string;
  description: string;
  priceId: "single" | "double";
  features: readonly string[];
};

type PricingSectionProps = {
  heading: string;
  subtitle: string;
  tiers: ReadonlyArray<Tier>;
  ctaLabel: string;
  recommendedTier: "single" | "double";
};

const priceIdMap = {
  single: siteConfig.singlePriceId,
  double: siteConfig.doublePriceId
} as const;

export function PricingSection({ heading, subtitle, tiers, ctaLabel, recommendedTier }: PricingSectionProps) {
  return (
    <section className="section-shell" id="pricing">
      <div className="section-heading">
        <p className="section-kicker">Lifetime Plans</p>
        <h2>{heading}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="pricing-grid">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={tier.priceId === recommendedTier ? "pricing-card pricing-card-recommended" : "pricing-card"}
          >
            <div className="pricing-card-top">
              {tier.priceId === recommendedTier ? <span className="pricing-badge">Best Value</span> : null}
              <h3>{tier.name}</h3>
              <p className="pricing-description">{tier.description}</p>
            </div>
            <div className="price-row">
              <span className="price">{tier.price}</span>
              <span className="original-price">{tier.originalPrice}</span>
            </div>
            <ul>
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <BuyButton
              label={ctaLabel}
              priceId={priceIdMap[tier.priceId]}
              className="primary-button full-width"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
