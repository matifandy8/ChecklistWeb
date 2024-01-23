import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import "neobrutalismcss/dist/index.min.css";
import Footer from "@/components/Footer/Footer";
import {Providers} from './Providers'


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: "700",
  style: "normal",
  display: "swap",
});

export const metadata = {
  title: "ChecklistWeb - Home",
  description:
    "platform for developers and teams, offering a seamless checklist management experience.",
  openGraph: {
    type: "website",
    url: "https://localhost:3000",
    title: "ChecklistWeb - Home",
    description:
      "platform for developers and teams, offering a seamless checklist management experience.",
    images: [
      {
        url: "https://localhost:3000/logo.png",
        width: 800,
        height: 600,
        alt: "ChecklistWeb - Home",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>
        <Providers>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
