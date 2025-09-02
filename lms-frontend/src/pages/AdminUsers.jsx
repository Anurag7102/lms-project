// src/pages/AdminUsers.jsx
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem("token"); // JWT set at login
        const url = `${API_URL}/api/admin/users`; // ✅ FIXED

        const res = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });

        const contentType = res.headers.get("content-type") || "";
        const text = await res.text();

        if (!res.ok) {
          let message = text;
          try {
            const json = JSON.parse(text);
            message = json.message || JSON.stringify(json);
          } catch (e) {}
          throw new Error(`Server ${res.status}: ${message}`);
        }

        if (!contentType.includes("application/json")) {
          const snippet = text.slice(0, 300).replace(/\s+/g, " ");
          throw new Error(
            `Expected JSON but got content-type="${contentType}". Response starts with: ${snippet}`
          );
        }

        const data = JSON.parse(text);
        const userList = data.users ?? data ?? [];
        if (!cancelled) setUsers(userList);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <div className="p-6">Loading users...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;
  if (!users.length) return <div className="p-6">No users found.</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">All Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id ?? u._id} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border text-sm">{u.id ?? u._id}</td>
                <td className="p-3 border text-sm">{u.name ?? "-"}</td>
                <td className="p-3 border text-sm">{u.email ?? "-"}</td>
                <td className="p-3 border text-sm">{u.role ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
