import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
        <Header />
        <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
