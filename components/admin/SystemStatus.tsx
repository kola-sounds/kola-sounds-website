export default function SystemStatus() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-5 text-2xl font-bold text-yellow-400">
        System Status
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Supabase</span>
          <span className="text-green-400">
            Online
          </span>
        </div>

        <div className="flex justify-between">
          <span>Authentication</span>
          <span className="text-green-400">
            Active
          </span>
        </div>

        <div className="flex justify-between">
          <span>Storage</span>
          <span className="text-green-400">
            Connected
          </span>
        </div>

        <div className="flex justify-between">
          <span>Website</span>
          <span className="text-green-400">
            Running
          </span>
        </div>

      </div>
    </div>
  );
}
