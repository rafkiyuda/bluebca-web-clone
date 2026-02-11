import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MobileLayout } from "@/components/layout/MobileLayout";
import { BottomNav } from "@/components/layout/BottomNav";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BluBCA",
  description: "Clone of BLU BCA mobile app",
  icons: {
    icon: "/blubca.jpg", // Next.js will resolve this from public if starts with /, but since file is in app, we might need to move it or just let Next.js auto-discover if named icon.jpg. 
    // Actually, for app directory, best practice is placing `icon.jpg` in `app/`.
    // Since user asked for blubca.jpg, let's explicitly ref it, BUT typically we need to move it to public to ref by string path OR use import.
    // Wait, if it is in `src/app/blubca.jpg`, Next.js doesn't auto-serve it as /blubca.jpg unless it's in public.
    // However, the special file convention is `icon.jpg`.
    // Let's rename it to public/blubca.jpg OR rename to src/app/icon.jpg.
    // User said "blubca.jpg in src/app/".
    // I will try to use it as is if Next.js allows, but likely need to move to public or rename.
    // Let's move it to public/blubca.jpg for safety and easier referencing.
  },
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

