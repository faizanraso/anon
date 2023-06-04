import { Metadata } from "next";
import Providers from "./components/theme/Providers";
import ThemeChanger from "./components/theme/ThemeChanger";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "anon",
  description: "An anoymous community for students and alumni",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="overflow-x-hidden dark:bg-black">
            <ThemeChanger />
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
