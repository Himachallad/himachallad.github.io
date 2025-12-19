import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
// import Header from "@/components/organisms/Header"; // Moving to MainLayout
// import Footer from "@/components/organisms/Footer"; // Moving to MainLayout
import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'katex/dist/katex.min.css';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: '--font-roboto-mono' });

export const metadata = {
  title: "Himachallad | Portfolio",
  description: "Senior Backend Engineer & Tech Enthusiast",
  icons: {
    icon: '/favicon/favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="font-sans bg-dark-900 text-light-text selection:bg-primary selection:text-dark-900">
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
