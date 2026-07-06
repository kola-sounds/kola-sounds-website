export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="text-center">

        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent"></div>

        <p className="mt-6 text-yellow-400 tracking-widest">
          LOADING...
        </p>

      </div>
    </div>
  );
}
