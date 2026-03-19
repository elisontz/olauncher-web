type ExperienceStep = {
  title: string;
  description: string;
};

type ExperienceSectionProps = {
  heading: string;
  intro: string;
  steps: ReadonlyArray<ExperienceStep>;
};

export function ExperienceSection({ heading, intro, steps }: ExperienceSectionProps) {
  return (
    <section className="section-shell experience-shell">
      <div className="section-heading">
        <p className="section-kicker">How It Feels</p>
        <h2>{heading}</h2>
        <p>{intro}</p>
      </div>
      <ol className="experience-rail">
        {steps.map((step, index) => (
          <li key={step.title} className="experience-step">
            <div className="experience-step-number">{index + 1}</div>
            <div className="experience-step-copy">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
