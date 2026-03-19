type ProofItem = {
  label: string;
  detail: string;
};

type ProofStripProps = {
  items: ReadonlyArray<ProofItem>;
};

export function ProofStrip({ items }: ProofStripProps) {
  return (
    <section className="proof-strip" aria-label="Product proof points">
      {items.map((item) => (
        <article key={item.label} className="proof-chip">
          <p className="proof-chip-label">{item.label}</p>
          <p className="proof-chip-detail">{item.detail}</p>
        </article>
      ))}
    </section>
  );
}
