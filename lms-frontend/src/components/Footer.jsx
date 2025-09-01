export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} LMS Project. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
