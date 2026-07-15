interface Props {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-2xl border border-dashed border-neutral-700 py-16 text-center">
      <h2 className="text-2xl font-semibold text-yellow-400">
        {title}
      </h2>

      <p className="mt-3 text-gray-400">
        {description}
      </p>
    </div>
  );
}
