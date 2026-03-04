import Image from 'next/image';

type ImageBlockProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function ImageBlock({ src, alt, caption }: ImageBlockProps) {
  return (
    <figure className="overflow-hidden rounded-2xl bg-white shadow-card">
      <Image src={src} alt={alt} width={1200} height={900} className="h-auto w-full object-cover" />
      {caption ? <figcaption className="px-4 py-3 text-xs text-brand-700">{caption}</figcaption> : null}
    </figure>
  );
}
