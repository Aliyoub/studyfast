import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import LayoutClientComponent from "./layoutClientComponent";

export const metadata: Metadata = {
  title: "Study Fast",
  description: "Study Fast",
  manifest: "/manifest.json",
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <LayoutClientComponent>
      {children}
    </LayoutClientComponent>
  );
}

export default Layout;
