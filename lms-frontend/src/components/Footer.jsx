export default function Footer() {
  return (
    <div className="border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} AutoLMS — Frontend Phase 1
      </div>
    </div>
  );
}
