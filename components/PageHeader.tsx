import { BodegaDivider } from './BodegaDivider';

type PageHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <header className="mx-auto w-full max-w-[375px] px-4 pt-12 pb-2">
      <p className="stamp-label">{label}</p>
      <h1 className="mt-2 text-[2.25rem] font-black leading-[1.1] text-brand-900 font-serif">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-sm leading-6 text-brand-700">{description}</p>
      )}
      <BodegaDivider />
    </header>
  );
}
