interface Props {
  title: string;
  description?: string;
}

export default function PageHeader({
  title,
  description,
}: Props) {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-yellow-400">
        {title}
      </h1>

      {description && (
        <p className="mt-2 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}
