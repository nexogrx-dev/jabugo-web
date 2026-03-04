type SectionProps = {
  id?: string;
  title?: string;
  label?: string;
  children: React.ReactNode;
  dividerAfter?: boolean;
};

const Divider = () => (
  <div className="bodega-divider" aria-hidden="true">
    <span className="text-[10px] text-brand-500 leading-none select-none">◆</span>
  </div>
);

export function Section({ id, title, label, children, dividerAfter = true }: SectionProps) {
  return (
    <>
      <section id={id} className="mx-auto w-full max-w-prose px-4 py-20 sm:py-28">
        {label && <p className="stamp-label mb-2">{label}</p>}
        {title && (
          <h2 className="font-serif text-2xl font-black text-brand-900 mb-6">{title}</h2>
        )}
        <div className="text-sm leading-7 text-brand-700">{children}</div>
      </section>
      {dividerAfter && <Divider />}
    </>
  );
}
