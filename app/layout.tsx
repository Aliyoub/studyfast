import type { Metadata } from "next";
import { Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import "./styles.css";
import Header from "@/components/header";
import BottomNavigation from "@/components/bottom-navigation/bottom-navigation";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const montserrat_bold = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Study Fast",
  description: "Study Fast",
  // metadataBase: new URL('https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css'),
  // alternates: {
  //   canonical: '/',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>
        {/* <body className={inter.className}> */}
        <Header />
          <main>{children}</main>
        <BottomNavigation />
      </body>
    </html>
  );
}
