import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: {
    default: "ABDELRAHMAN BOGHDADY | Graphic Designer",
    template: "%s | ABDELRAHMAN BOGHDADY",
  },

  description:
    "Professional Graphic Designer specializing in Branding, Visual Identity, Social Media Design, and Creative Marketing. Explore my portfolio and latest projects.",

  keywords: [
    "Graphic Designer",
    "Brand Identity",
    "Visual Identity",
    "Social Media Design",
    "Logo Design",
    "Portfolio",
    "Creative Designer",
    "Photoshop",
    "Illustrator",
    "Figma",
    "Egypt",
    "Saudi Arabia",
  ],

  authors: [
    {
      name: "Abdelrahman Boghdady",
    },
  ],

  creator: "Abdelrahman Boghdady",

  category: "Portfolio",

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL(
    "https://abdelrahman-boghdady-portfolio.vercel.app"
  ),

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "ABDELRAHMAN BOGHDADY | Graphic Designer",
    description:
      "Professional Graphic Designer specializing in Branding, Visual Identity, and Social Media Design.",

    url: "https://abdelrahman-boghdady-portfolio.vercel.app",

    siteName: "ABDELRAHMAN BOGHDADY",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdelrahman Boghdady Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "ABDELRAHMAN BOGHDADY | Graphic Designer",

    description:
      "Professional Graphic Designer specializing in Branding and Social Media Design.",

    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}