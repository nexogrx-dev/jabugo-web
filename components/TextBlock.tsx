type Quote = {
  text: string;
  author: string;
};

type TextBlockProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  paragraphs?: readonly string[];
  quote?: Quote;
};

export function TextBlock({ eyebrow, title, body, paragraphs, quote }: TextBlockProps) {
  return (
    <div>
      {eyebrow && (
        <p className="stamp-label mb-3">{eyebrow}</p>
      )}
      {title && (
        <h3 className="font-serif text-xl font-black text-brand-900 mb-4">{title}</h3>
      )}
      {paragraphs
        ? paragraphs.map((p, i) => (
            <p key={i} className="text-sm leading-7 text-brand-700 mb-3 last:mb-0">{p}</p>
          ))
        : body
        ? <p className="text-sm leading-7 text-brand-700">{body}</p>
        : null}
      {quote && (
        <blockquote className="pull-quote mt-5">
          <p>&ldquo;{quote.text}&rdquo;</p>
          <cite>— {quote.author}</cite>
        </blockquote>
      )}
    </div>
  );
}
