import { Metadata } from "next";
import Providers from "../components/theme/Providers";
import ThemeChanger from "../components/theme/ThemeChanger";
import "../globals.css";
import { Inter } from "next/font/google";
import Header from "../components/layout/header/header";
import Sidebar from "../components/layout/sidebar/Sidebar";

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
          <div className="flex min-h-screen flex-col dark:bg-black">
            <ThemeChanger />
            <Header />
            <div className="flex flex-row">
              <Sidebar />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
