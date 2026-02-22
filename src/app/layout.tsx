import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artur Tabor | Portfolio",
  description: "Web developer portfolio — projects, blog, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <main className="mx-auto max-w-4xl px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
