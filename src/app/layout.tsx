import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kvickly - Medarbejder ansøgning",
  description: "Ansøgningsformular til  Kvickly",
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