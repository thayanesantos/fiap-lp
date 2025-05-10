import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import ScrollProgressBar from "./components/scrollProgressBar";

export const metadata: Metadata = {
  title: "FIAP School",
  description: "Faça cursos de curta duração na melhor faculdade de tecnologia de São Paulo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
