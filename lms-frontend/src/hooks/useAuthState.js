import { useState } from "react";
import storage from "../utils/storage";

export default function useAuthState() {
  const [isAuthed, setIsAuthed] = useState(() => storage.get("authed", false));
  const [user, setUser] = useState(() => storage.get("user", null));

  const login = (email) => {
    setIsAuthed(true);
    const u = { email, name: email.split("@")[0] };
    setUser(u);
    storage.set("authed", true);
    storage.set("user", u);
  };

  const logout = () => {
    setIsAuthed(false);
    setUser(null);
    storage.set("authed", false);
    storage.set("user", null);
  };

  return { isAuthed, user, login, logout };
}
