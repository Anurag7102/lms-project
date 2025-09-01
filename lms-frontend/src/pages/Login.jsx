export default function Login() {
  return (
    <div className="max-w-md mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600">
          Login
        </button>
      </form>
    </div>
  );
}
