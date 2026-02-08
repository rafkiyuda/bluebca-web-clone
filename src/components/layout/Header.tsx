"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { PieChart, Home, Wallet } from "lucide-react";

export function Header() {
    const pathname = usePathname();

    const navItems = [
        { name: "Tracker", icon: PieChart, path: "/tracker" },
        { name: "Home", icon: Home, path: "/" },
        { name: "Portfolio", icon: Wallet, path: "/portfolio" },
    ];

    return (
        <header className="fixed top-0 w-full max-w-[480px] z-[60] bg-blu-primary px-4 pt-12 pb-8 rounded-b-[2.5rem] shadow-sm">
            <div className="flex justify-between items-center px-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-semibold",
                                isActive
                                    ? "bg-white text-blu-primary shadow-md"
                                    : "text-white/80 hover:bg-white/10"
                            )}
                        >
                            <item.icon size={18} fill={isActive ? "currentColor" : "none"} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </div>
        </header>
    );
}
