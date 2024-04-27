import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Script from "next/script";
import { AntdRegistry } from '@ant-design/nextjs-registry';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Himachallad",
  description: "Himachallad's Portfolio",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </head>

      <Script src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js" />
      <body className={`${inter.className} bg-green-50`}>

        <Header />
        {/* {children} */}
        <AntdRegistry>{children}</AntdRegistry>
        <Footer />
      </body>
    </html>
  );
}
