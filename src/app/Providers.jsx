"use client";

import { AuthProvider, useAuth } from "@/context/AuthContext";
import Spinner from "@/components/Spinner";

function GlobalSpinner() {
  const { authLoading } = useAuth();
  return authLoading ? <Spinner /> : null;
}

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <GlobalSpinner />
      {children}
    </AuthProvider>
  );
}