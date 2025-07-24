import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./componentes/tempHeader/Header";
import Footer from "./componentes/Footer/FooterA";
import ScrollToTop from "./componentes/ScrollToTop";
import WhatsAppButton from "./componentes/BotaoWhats";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fire Baterias",
  description: "Venda e serviços de baterias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
      
      >
        <Header />
        <ScrollToTop />
        <main className=" flex-grow">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
