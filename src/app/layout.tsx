import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumos Website Redesign",
  description: "Designed by Esther Inontah and developed by Moses Enyinnaya"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
