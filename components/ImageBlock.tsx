import Image from 'next/image';

type ImageBlockProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function ImageBlock({ src, alt, caption }: ImageBlockProps) {
  return (
    <figure className="overflow-hidden bg-brand-100">
      <Image src={src} alt={alt} width={1200} height={900} className="h-auto w-full object-cover" />
      {caption && (
        <figcaption className="px-4 py-2 text-[11px] tracking-[0.06em] text-brand-500 uppercase">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
