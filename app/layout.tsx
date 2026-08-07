import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display face: geometric + technical, used for headings only
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Body face: neutral, highly legible
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Utility/mono face: for eyebrows, labels, code-flavored copy
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://abdulrosheedabdulmalik.dev";
const SITE_NAME = "Abdulrosheed Abdulmalik | CodeWithFaith";
const SITE_DESCRIPTION =
  "Portfolio of Abdulrosheed Abdulmalik (CodeWithFaith) — Fullstack Developer, AI Engineer and Mobile App Developer. Founder of AmTechy and Syntra AI, building AI-powered products that solve real-world problems.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | CodeWithFaith",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Abdulrosheed Abdulmalik",
    "CodeWithFaith",
    "Fullstack Developer",
    "AI Engineer",
    "Mobile App Developer",
    "AmTechy",
    "Syntra AI",
    "Next.js Developer",
    "React Developer",
    "AI Product Builder",
  ],
  authors: [{ name: "Abdulrosheed Abdulmalik", url: SITE_URL }],
  creator: "Abdulrosheed Abdulmalik",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdulrosheed Abdulmalik — CodeWithFaith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@codewithfaith",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased bg-bg text-text">
        {children}
      </body>
    </html>
  );
}