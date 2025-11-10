import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/NavBar/Navbar";
import Footer from "@/Components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ip Finder",
  description: "Ip Finder Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=BBH+Sans+Bogle&family=Bebas+Neue&family=Fjalla+One&family=Kaushan+Script&family=Momo+Trust+Display&family=Righteous&family=Ubuntu+Condensed&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
