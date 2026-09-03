import type { Metadata } from "next";
import { Geist_Mono, Poppins, Manrope } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hiba Clinic",
  description: "Multidisciplinary child and adolescent clinic",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${poppins.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center">
        {children}
      </body>
    </html>
  );
}