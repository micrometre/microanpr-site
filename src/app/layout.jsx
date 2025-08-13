import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "MicroANPR - Automatic Number Plate Recognition (ANPR) as a service.",
  description: "Leading provider of cutting-edge ANPR technology for traffic management, and smart city solutions.",
  keywords: "ANPR, automatic number plate recognition, enterprise security, traffic management, smart cities",
  authors: [{ name: "MicroANPR" }],
  openGraph: {
    title: "MicroANPR - Enterprise ANPR Solutions",
    description: "Leading provider of cutting-edge ANPR technology as a service for  security, traffic management, and smart city solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
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
