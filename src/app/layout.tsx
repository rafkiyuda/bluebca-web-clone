import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MobileLayout } from "@/components/layout/MobileLayout";
import { BottomNav } from "@/components/layout/BottomNav";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "blu BCA Clone",
  description: "Clone of BLU BCA mobile app",
};

import { BluWiseWidget } from "@/components/home/BluWiseWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileLayout>
          <Header />
          {children}
          <BottomNav />
          <BluWiseWidget />
        </MobileLayout>
      </body>
    </html>
  );
}

