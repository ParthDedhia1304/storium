// src/app/layout.tsx
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster as Sonner } from "@/components/ui/sonner";
import QueryProvider from "@/context/query-provider";
import { ThemeProvider } from "@/components/theme-provider"; // 👈 Import theme provider

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Storium",
  description: "The only solution for secure files storage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", outfit.variable)}>
        <ThemeProvider> {/* ✅ Wrap entire app with dark mode context */}
          <QueryProvider> {/* ⚙️ Query client for React Query */}
            {children}
            <Sonner /> {/* 🔔 Toast notifications */}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
