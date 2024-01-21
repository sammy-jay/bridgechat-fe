import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Bridgechat.ai || Transforming Customer Support - with Seamless AI Integration",
  description:
    "Revolutionize your Customer Service by harnessing the power of AI assistance in your chosen local language to streamline complaint handling and supercharge efficiency, reducing costs effectively",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
