import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0b1f3a",
};

export const metadata: Metadata = {
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Academigo",
    statusBarStyle: "default",
  },
};

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${plusJakarta.variable} h-full scroll-smooth`}
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
