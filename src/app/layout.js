import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Script from "next/script";
import { AntdRegistry } from '@ant-design/nextjs-registry';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Himachallad",
  defaultTitle: "Himachallad",
  generator: "Himachallad",
  applicationName: "Himachallad",
  referrer: "origin-when-cross-origin",
  keywords: ["Himachallad", "Nikhil Pathania Upwork", "Hire data scraper", "AI expert online"],
  authors: [{ name: 'Nikhil Pathania' }, { name: 'Himachallad', url: "https://medium.com/@nikhilpathania_57075" }],
  creator: 'Nikhil Pathania',
  publisher: 'Nikhil Pathania',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  description: "Himachallad's Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://himachallad.github.io",
    images: [
      {
        url: "https://github.com/Himachallad/himachallad.github.io/assets/20709166/fb5c022b-f0f0-41c3-af1e-743cc49f0422",
        width: 128,
        height: 128,
      }
    ],
    description: "Exploring new changes in Tech, and helping the community",
    siteName: "Himachallad",
    title: "Himachallad"
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    creator: "@nikhil_nits",
    title: "Himachallad",
    cardType: "summary_large_image"
  }
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
