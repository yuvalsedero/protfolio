import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Yuval Sedero's Profolio",
  description: "Protfolio of Yuval Sedero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={`${poppins.className}  text-slate-700`}>
        <div className="flex flex-col min-h-screen bg-secondary">
          {/* <NavBar /> */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
