import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kvickly-ansoegningsformular.vercel.app"),
  title: "Kvickly – Medarbejder ansøgning",
  description:
    "Ansøg om job som medarbejder i Kvickly. Udfyld formularen trin for trin og fortæl os lidt om dig selv, din hverdag og hvornår du kan arbejde.",
  openGraph: {
    title: "Kvickly – Medarbejder ansøgning",
    description:
      "Ansøg om job som medarbejder i Kvickly. Udfyld formularen trin for trin og fortæl os lidt om dig selv, din hverdag og hvornår du kan arbejde.",
    url: "https://kvickly-ansoegningsformular.vercel.app",
    siteName: "Kvickly",
    locale: "da_DK",
    type: "website",
    images: [
      {
        url: "/kvickly-preview.png",
        width: 1200,
        height: 630,
        alt: "Kvickly medarbejder ansøgning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kvickly – Medarbejder ansøgning",
    description:
      "Ansøg om job som medarbejder i Kvickly. Udfyld formularen trin for trin og fortæl os lidt om dig selv, din hverdag og hvornår du kan arbejde.",
    images: ["/kvickly-preview.png"],
  },
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