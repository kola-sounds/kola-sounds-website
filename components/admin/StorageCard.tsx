export default function StorageCard() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-5 text-2xl font-bold text-yellow-400">
        Storage
      </h2>

      <div className="mb-3 h-3 overflow-hidden rounded-full bg-neutral-800">
        <div
          className="h-full bg-yellow-400"
          style={{ width: "38%" }}
        />
      </div>

      <p className="text-gray-400">
        380 MB of 1 GB used
      </p>
    </div>
  );
}
