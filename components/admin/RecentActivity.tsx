export default function RecentActivity() {
  const activities = [
    {
      title: "Gallery image uploaded",
      time: "2 minutes ago",
    },
    {
      title: "New event published",
      time: "18 minutes ago",
    },
    {
      title: "Music updated",
      time: "1 hour ago",
    },
    {
      title: "Website settings changed",
      time: "Yesterday",
    },
  ];

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-5 text-2xl font-bold text-yellow-400">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-neutral-800 pb-3"
          >
            <p>{item.title}</p>

            <span className="text-sm text-gray-400">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
