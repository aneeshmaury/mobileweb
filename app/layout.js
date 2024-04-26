import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "./component/HeaderTop";
import HeadMain from "./component/HeadMain";
import HeroSection from "./component/HeroSection";
import Product from "./component/Product";
import Footer from "./component/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <HeaderTop/>
      <HeadMain/>
      <HeroSection/>
      <Product/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
