'use client';
import { ReactNode } from 'react';
// import type { Metadata } from "next";
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import "./styles.css";
import Header from "@/components/header";
import ViewWithBorderRadius from "@/components//ViewWithBorderRadius/ViewWithBorderRadius";
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

// export const metadata: Metadata = {
//   title: "Study Fast",
//   description: "Study Fast",
//   // metadataBase: new URL('https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css'),
//   // alternates: {
//   //   canonical: '/',
//   // },
// };

interface LayoutProps {
  children: ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
  return (
    
      <html lang="fr">
      <body className={montserrat.className}>
        {/* <body className={inter.className}> */}
        {/* <Header /> */}
          <main><Provider store={store}>{children}</Provider></main>
        <BottomNavigation />
      </body>
    </html>
    
  );
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <Provider store={store}>
//     <html lang="fr">
//       <body className={montserrat.className}>
//         {/* <body className={inter.className}> */}
//         <Header />
//           <main>{children}</main>
//         <BottomNavigation />
//       </body>
//     </html>
//     </Provider>
//   );

// }
export default Layout;
