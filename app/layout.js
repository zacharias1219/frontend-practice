import { Inter, Fugaz_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Moodle",
  description: "Track your daily mood",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={" " + fugazOne.className}>Moodle</h1>
    </header>
  )

  const footer = (
    <footer className="p-4 text-center">

    </footer>
  )


  return (
    <html lang="en">
      <body
        className={"w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col " + inter.className}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
