export default function LoadingSpinner() {
  return (
    <div className="flex justify-center py-10">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent"></div>
    </div>
  );
}
