type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  label,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-14 text-center">
      <p className="uppercase tracking-[0.4em] text-yellow-400">
        {label}
      </p>

      <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}
