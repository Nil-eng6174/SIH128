import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PashuShield - AI Livestock Disease Early Warning",
  description: "AI-Powered Livestock Disease Early Warning & Response Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <header className="bg-brand-primary border-b border-brand-secondary p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            {/* Simple logo placeholder */}
            <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-white font-bold">
              PS
            </div>
            <h1 className="text-xl font-heading font-bold text-brand-accent tracking-tight">PashuShield</h1>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6 container mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
