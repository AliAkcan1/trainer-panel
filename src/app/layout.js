import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Osmangazi Gelişim Gücü",
  description: "Osmangazi Gelişim Gücü",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/5148327c3d.js" crossorigin="anonymous"></Script>
      <body className={inter.className + ' bg-tertiary'}>{children}</body>
    </html>
  );
}
