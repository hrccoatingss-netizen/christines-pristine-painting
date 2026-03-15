import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Christine's Pristine Painting - Professional Painting in Hamilton, AL",
    template: "%s | Christine's Pristine Painting",
  },
  description:
    "Professional interior and exterior painting, cabinet refinishing, countertop painting, and furniture restoration in Hamilton, AL and surrounding areas. 5-star rated. Free estimates.",
  openGraph: {
    title: "Christine's Pristine Painting - Hamilton AL's Trusted Painter",
    description:
      "Professional painting, cabinet refinishing, and furniture restoration. 5-star rated in Hamilton, AL.",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Christine's Pristine Painting",
              description:
                "Professional painting, cabinet refinishing, countertop painting, and furniture restoration.",
              telephone: "+12055705579",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hamilton",
                addressRegion: "AL",
                postalCode: "35570",
                addressCountry: "US",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "28",
              },
              areaServed: [
                "Hamilton",
                "Sulligent",
                "Winfield",
                "Vernon",
                "Hackleburg",
                "Bear Creek",
                "Artesia",
                "Fort Walton Beach",
              ],
              founder: {
                "@type": "Person",
                name: "Christine Duke Miller",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
