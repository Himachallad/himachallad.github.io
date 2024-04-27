import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Himachallad",
  description: "Himachallad's Portfolio",
  openGraph: {
    images: 'https://avatars1.githubusercontent.com/u/20709166?s=460&u=52079cb1b5b5f98a5f8ea1aa1524e231f1323ed1&v=4', // Must be an absolute URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js" />
      <body className={`${inter.className} bg-green-50`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
