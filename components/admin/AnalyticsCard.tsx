interface AnalyticsCardProps {
  title: string;
  value: number | string;
  icon: string;
  color?: string;
}

export default function AnalyticsCard({
  title,
  value,
  icon,
  color = "text-yellow-400",
}: AnalyticsCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400">{title}</p>

          <h2 className={`mt-2 text-4xl font-bold ${color}`}>
            {value}
          </h2>
        </div>

        <div className="text-5xl">
          {icon}
        </div>
      </div>
    </div>
  );
}
