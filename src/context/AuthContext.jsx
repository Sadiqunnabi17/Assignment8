"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);

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
  };

  const updateUser = ({ name, email, photo }) =>
    setUser((prev) => ({
      ...prev,
      name: name ?? prev.name,
      email: email ?? prev.email,
      photo: photo ?? prev.photo,
    }));

  const loginWithGoogle = async () => {
    setAuthLoading(true);
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
      params: {
        prompt: "select_account", // ← forces account picker every time
      },

    });
    setAuthLoading(false);
  };

  const logout = async () => {
    setAuthLoading(true);
    await authClient.signOut();
    setUser(null);
    setAuthLoading(false);
  };

  // Don't render children until session is checked
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 to-indigo-100">
        <div className="w-14 h-14 rounded-full border-4 border-indigo-100 border-t-indigo-500 animate-spin" />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, login, updateUser, loginWithGoogle, logout, loading, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}