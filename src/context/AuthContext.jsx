"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSession = async () => {
    try {
      const session = await authClient.getSession();
      if (session?.data?.user) {
        setUser({
          name: session.data.user.name,
          email: session.data.user.email,
          photo: session.data.user.image,
        });
      } else {
        setUser(null);
      }
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSession();
  }, []);

  const login = ({ name, email, photo = null }) => {
    setUser({ name, email, photo });
    fetchSession(); // ← re-fetch real session after login
  };

  const updateUser = ({ name, email, photo }) =>
    setUser((prev) => ({
      ...prev,
      name: name ?? prev.name,
      email: email ?? prev.email,
      photo: photo ?? prev.photo,
    }));

  const loginWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const logout = async () => {
    await authClient.signOut();
    setUser(null);
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, login, updateUser, loginWithGoogle, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}