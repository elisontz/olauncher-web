type FeatureHighlight = {
  eyebrow: string;
  title: string;
  description: string;
  size: "large" | "small";
};

type FeatureBentoProps = {
  heading: string;
  intro: string;
  features: ReadonlyArray<FeatureHighlight>;
};

export function FeatureBento({ heading, intro, features }: FeatureBentoProps) {
  return (
    <section className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">Spatial Recall</p>
        <h2>{heading}</h2>
        <p>{intro}</p>
      </div>
      <div className="feature-bento">
        {features.map((feature) => (
          <article
            key={feature.title}
            className={feature.size === "large" ? "feature-card feature-card-large" : "feature-card"}
          >
            <p className="feature-card-kicker">{feature.eyebrow}</p>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
