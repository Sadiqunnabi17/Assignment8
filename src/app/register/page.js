"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Capitalize the name properly
    // e.g. "john doe" → "John Doe"
    const formattedName = name
      .trim()
      .replace(/\b\w/g, (c) => c.toUpperCase());

    login({ name: formattedName, email });
    router.push("/");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* Header */}
        <div style={styles.header}>
          <div style={styles.logo}>🎓</div>
          <h2 style={styles.title}>Create Account</h2>
          <p style={styles.subtitle}>Join thousands of learners today</p>
        </div>

        {/* Error message */}
        {error && <p style={styles.error}>⚠️ {error}</p>}

        {/* Form */}
        <form onSubmit={handleRegister} style={styles.form}>

          <div style={styles.field}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              style={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="At least 6 characters"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" style={styles.button}>
            Create Account
          </button>

        </form>

        {/* Footer */}
        <p style={styles.footerText}>
          Already have an account?{" "}
          <Link href="/login" style={styles.link}>Log in here</Link>
        </p>

      </div>
    </div>
  );
}

// ---- Styles ----
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #ede9fe, #e0e7ff)",
    padding: "1rem",
    fontFamily: "'Segoe UI', sans-serif",
  },
  card: {
    background: "white",
    borderRadius: "16px",
    padding: "2.5rem 2rem",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 8px 30px rgba(99,102,241,0.12)",
  },
  header: {
    textAlign: "center",
    marginBottom: "1.75rem",
  },
  logo: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#1f2937",
    margin: "0 0 0.25rem",
  },
  subtitle: {
    fontSize: "0.875rem",
    color: "#9ca3af",
    margin: 0,
  },
  error: {
    background: "#fef2f2",
    color: "#ef4444",
    borderRadius: "8px",
    padding: "0.6rem 0.85rem",
    fontSize: "0.875rem",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#374151",
  },
  input: {
    padding: "0.65rem 0.9rem",
    borderRadius: "8px",
    border: "1.5px solid #e5e7eb",
    fontSize: "0.95rem",
    outline: "none",
    color: "#1f2937",
  },
  button: {
    marginTop: "0.5rem",
    padding: "0.75rem",
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    color: "white",
    fontWeight: "700",
    fontSize: "1rem",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(99,102,241,0.3)",
  },
  footerText: {
    textAlign: "center",
    fontSize: "0.875rem",
    color: "#6b7280",
    marginTop: "1.25rem",
  },
  link: {
    color: "#6366f1",
    fontWeight: "600",
    textDecoration: "none",
  },
};