import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center", fontFamily: "Segoe UI" }}>
      <h1>Welcome, {session.user.name} </h1>
      <p>You are successfully logged in.</p>
    </div>
  );
}