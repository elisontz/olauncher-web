import Link from "next/link";

import { BuyButton } from "@/components/buy-button";

type HeroTile = {
  label: string;
  tone: "blue" | "silver" | "amber";
  size: "wide" | "square";
};

type HeroProps = {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  primaryHref: string;
  secondaryPriceId: string;
  meta: string;
  badges: readonly string[];
  visualTiles: ReadonlyArray<HeroTile>;
};

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  primaryHref,
  secondaryPriceId,
  meta,
  badges,
  visualTiles
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">oLauncher for Mac</p>
        <h1>
          <span>{title}</span>
          <span className="hero-subtitle-line">{subtitle}</span>
        </h1>
        <p className="lead">{description}</p>
        <div className="hero-badge-row" aria-label="Hero highlights">
          {badges.map((badge) => (
            <span key={badge} className="hero-badge">
              {badge}
            </span>
          ))}
        </div>
        <div className="hero-actions">
          <Link href={primaryHref} className="primary-button">
            {primaryCta}
          </Link>
          <BuyButton label={secondaryCta} priceId={secondaryPriceId} className="secondary-button" />
        </div>
        <p className="meta">{meta}</p>
      </div>
      <div className="hero-visual-shell" data-testid="hero-visual">
        <div className="hero-orbit hero-orbit-left" />
        <div className="hero-orbit hero-orbit-right" />
        <div className="launcher-panel">
          <div className="launcher-panel-top">
            <div>
              <p className="launcher-caption">Visual app browsing</p>
              <p className="launcher-title">Launchpad, back in rhythm</p>
            </div>
            <span className="launcher-status">Live</span>
          </div>
          <div className="launcher-grid">
            {visualTiles.map((tile) => (
              <div
                key={tile.label}
                className="launcher-tile"
                data-tone={tile.tone}
                data-size={tile.size}
              >
                <span className="launcher-tile-dot" />
                <span className="launcher-tile-label">{tile.label}</span>
              </div>
            ))}
          </div>
          <div className="launcher-focus-card">
            <p className="launcher-caption">Spatial memory intact</p>
            <p className="launcher-focus-text">Gesture in. Scan once. Launch fast.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
