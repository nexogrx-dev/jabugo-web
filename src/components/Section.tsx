type SectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-brand-700 sm:text-base">{children}</div>
    </section>
  );
}
