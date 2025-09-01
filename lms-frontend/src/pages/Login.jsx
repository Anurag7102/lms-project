import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    onLogin(email);
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold">Welcome back</h2>
      <p className="text-gray-500 mb-6">Login to continue learning.</p>
      <form onSubmit={submit} className="space-y-4">
        <input
          className="w-full border rounded-xl px-3 py-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full border rounded-xl px-3 py-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full rounded-xl bg-black text-white py-2">
          Login
        </button>
      </form>
      <p className="text-sm mt-4">
        No account?{" "}
        <Link className="underline" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
}
