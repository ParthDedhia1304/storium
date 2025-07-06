// app/dashboard/layout.tsx
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in");
  }
  return <>{children}</>;
}
