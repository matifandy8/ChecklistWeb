import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import "neobrutalismcss/dist/index.min.css";
import Footer from "@/components/Footer/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: "700",
  style: "normal",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
