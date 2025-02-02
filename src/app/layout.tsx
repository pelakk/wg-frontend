import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "./_components/Footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Warsaw Goats",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-[#0A0A0A] antialiased text-white`}
      >
        <main className="space-y-32 max-w-[1280px] mx-auto pb-20 px-6 md:px-0">
          {children}
          <Footer />
        </main>
      </body>
      <GoogleAnalytics gaId="G-4W9V5FBXBK" />
    </html>
  );
}
