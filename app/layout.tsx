import Providers from "./components/Providers";
import ThemeChanger from "./components/ThemeChanger";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
      <Providers>
        <body className={inter.className}>{children}</body>
        <ThemeChanger />
      </Providers>
    </html>
  );
}
