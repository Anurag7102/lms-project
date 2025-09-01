import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Build. Learn. Earn. Govern.
          </h1>
          <p className="mt-4 text-gray-600">
            A modern LMS with automation, Web3 certificates, and AI feedback —
            this is the frontend-only Phase 1 with mocked data.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              to="/courses"
              className="px-4 py-2 rounded-xl bg-black text-white"
            >
              Browse Courses
            </Link>
            <Link to="/register" className="px-4 py-2 rounded-xl border">
              Get Started
            </Link>
          </div>
        </div>
        <img
          className="rounded-2xl border shadow-sm"
          alt="hero"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        />
      </div>
    </div>
  );
}
