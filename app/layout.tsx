import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#1E3A5F",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://academigo.xyz"),
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Academigo",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${inter.variable} ${manrope.variable} h-full scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans antialiased text-academy-navy bg-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
