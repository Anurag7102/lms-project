export default function ProgressBar({ value }) {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full">
      <div
        className="h-2 rounded-full bg-black"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
