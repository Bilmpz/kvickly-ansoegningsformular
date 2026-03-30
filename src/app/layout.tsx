import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kvickly - Ungarbejder ansøgning",
  description: "Ansøgningsformular til ungarbejdere i Kvickly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}