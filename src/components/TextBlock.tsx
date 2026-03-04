type Quote = {
  text: string;
  author: string;
};

type TextBlockProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  paragraphs?: readonly string[];
  quote?: Quote;
};

export function TextBlock({ eyebrow, title, body, paragraphs, quote }: TextBlockProps) {
  return (
    <article className="rounded-2xl border border-brand-100 bg-white p-5 shadow-card sm:p-8">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">{eyebrow}</p> : null}
      <h3 className="mt-2 text-xl font-bold text-brand-900">{title}</h3>
      {paragraphs
        ? paragraphs.map((p, i) => (
            <p key={i} className="mt-3 text-sm leading-7 text-brand-700">{p}</p>
          ))
        : body
        ? <p className="mt-3 text-sm leading-7 text-brand-700">{body}</p>
        : null}
      {quote && (
        <blockquote className="mt-4 border-l-2 border-brand-500 pl-4">
          <p className="text-sm italic text-brand-700">&ldquo;{quote.text}&rdquo;</p>
          <cite className="mt-1 block text-xs text-brand-500">— {quote.author}</cite>
        </blockquote>
      )}
    </article>
  );
}
