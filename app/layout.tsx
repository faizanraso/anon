import { Metadata } from "next";
import Providers from "./components/Providers";
import ThemeChanger from "./components/ThemeChanger";
import "./globals.css";
import { Inter } from "next/font/google";

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
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
