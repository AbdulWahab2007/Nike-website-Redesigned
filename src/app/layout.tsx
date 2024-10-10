import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nike",
  description:
    "Nike delivers innovative products, experiences and services to inspire athletes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
