import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MicroANPR - Enterprise Automatic Number Plate Recognition Solutions",
  description: "Leading provider of cutting-edge ANPR technology for enterprise security, traffic management, and smart city solutions.",
  keywords: "ANPR, automatic number plate recognition, enterprise security, traffic management, smart cities",
  authors: [{ name: "MicroANPR" }],
  openGraph: {
    title: "MicroANPR - Enterprise ANPR Solutions",
    description: "Leading provider of cutting-edge ANPR technology for enterprise security, traffic management, and smart city solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
