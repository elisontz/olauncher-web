type FaqSectionProps = {
  heading: string;
  faqs: ReadonlyArray<{ question: string; answer: string }>;
};

export function FaqSection({ heading, faqs }: FaqSectionProps) {
  return (
    <section className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">FAQ</p>
        <h2>{heading}</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question} className="faq-item">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
