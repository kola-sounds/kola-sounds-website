import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-yellow-400">
          Contact Information
        </h1>

        <p className="mt-2 text-gray-400">
          Update the ministry contact details shown on the website.
        </p>
      </div>

      <form className="space-y-6 rounded-2xl border border-neutral-800 bg-neutral-900 p-8">

        <div>
          <label className="mb-2 block font-medium">
            Phone Number
          </label>

          <input
            type="text"
            defaultValue="0700207801"
            className="w-full rounded-lg border border-neutral-700 bg-black p-4 text-white outline-none focus:border-yellow-400"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            WhatsApp
          </label>

          <input
            type="text"
            defaultValue="254700207801"
            className="w-full rounded-lg border border-neutral-700 bg-black p-4 text-white outline-none focus:border-yellow-400"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Email
          </label>

          <input
            type="email"
            defaultValue="kolasoundsofgrace@gmail.com"
            className="w-full rounded-lg border border-neutral-700 bg-black p-4 text-white outline-none focus:border-yellow-400"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Location
          </label>

          <input
            type="text"
            defaultValue="Tegat, Bomet County, Kenya"
            className="w-full rounded-lg border border-neutral-700 bg-black p-4 text-white outline-none focus:border-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-yellow-400 px-8 py-3 font-bold text-black transition hover:bg-yellow-300"
        >
          Save Changes
        </button>
      </form>

      <div className="mt-8">
        <Link
          href="/admin/dashboard"
          className="text-yellow-400 hover:underline"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
