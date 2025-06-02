import type { Metadata } from "next";
import { Raleway, Nunito } from "next/font/google";
import "./globals.css";

/* Components */
import Header from "@/components/general/header";
import Footer from "@/components/general/footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Site",
  description: "By Nartey Aaron",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
