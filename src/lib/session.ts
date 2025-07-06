// lib/session.ts
import axios from "axios";
import { cookies } from "next/headers";
import { Session } from "@/lib/better-auth/auth-types";

export async function getSession() {
  const cookieHeader = cookies().toString();
  const baseURL =
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"; // fallback

  try {
    const { data } = await axios.get<Session>(`${baseURL}/api/auth/get-session`, {
      headers: {
        cookie: cookieHeader,
      },
    });

    return data;
  } catch (err) {
    return err;
  }
}
