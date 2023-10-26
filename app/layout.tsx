import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SITCON 2024 CFP",
  description: "SITCON 2024 CFP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}
