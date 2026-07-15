import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emotion Scooter & Bike Rental | Mallorca",
  description:
    "Rent a scooter in Mallorca with Emotion Scooter & Bike Rental. Request availability directly through WhatsApp.",
  keywords: [
    "scooter rental Mallorca",
    "rent scooter Mallorca",
    "125cc scooter Mallorca",
    "Emotion scooter rental",
    "bike rental Mallorca",
  ],
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}