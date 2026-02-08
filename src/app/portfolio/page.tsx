"use client";

import { useState } from "react";
import { Eye, EyeOff, Wallet, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PortfolioPage() {
    const [showBalance, setShowBalance] = useState(false);
    const [activeTab, setActiveTab] = useState("Simpanan");

    const tabs = ["Simpanan", "Investasi", "Asuransi", "Pinjaman"];

    return (
        <main className="flex min-h-screen flex-col p-6 pt-32 pb-28 relative bg-white">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Portfolio</h1>

            {/* Tabs */}
            <div className="flex overflow-x-auto gap-8 mb-6 border-b border-gray-100 pb-1 scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "pb-2 font-semibold text-sm whitespace-nowrap transition-colors relative",
                            activeTab === tab
                                ? "text-gray-800"
                                : "text-gray-400"
                        )}
                    >
                        {tab}
                        {activeTab === tab && (
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blu-blue rounded-full"></div>
                        )}
                    </button>
                ))}
            </div>

            {/* Total Balance */}
            <div className="bg-gray-50 rounded-xl p-4 mb-8">
                <p className="text-gray-400 text-sm mb-1">Total Simpanan</p>
                <div className="flex items-center gap-3">
                    <span className="text-xl font-extrabold text-gray-800 tracking-wider">
                        {showBalance ? "Rp 12.500.000" : "Rp ●●●●●●●●"}
                    </span>
                    <button onClick={() => setShowBalance(!showBalance)}>
                        {showBalance ? (
                            <EyeOff size={18} className="text-gray-400" />
                        ) : (
                            <Eye size={18} className="text-gray-400" />
                        )}
                    </button>
                </div>
            </div>

            <h2 className="font-bold text-gray-700 mb-4">Accounts</h2>

            {/* bluAccount Card */}
            <div className="w-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-5 mb-8 text-white shadow-lg relative overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                    <Wallet size={20} className="text-white/80" />
                    <span className="font-medium text-white/90">bluAccount</span>
                </div>

                <div className="mb-6">
                    <p className="text-2xl font-bold tracking-wider">
                        {showBalance ? "Rp 10.000.000" : "Rp ●●●●●●●●"}
                    </p>
                    <p className="text-xs text-white/60">(Total Dana)</p>
                </div>

                <div className="flex justify-between items-end border-t border-white/20 pt-4">
                    <span className="text-sm">1 Akun</span>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                            <img src="https://placehold.co/40x40/0052CC/white?text=DT" alt="User" className="w-full h-full rounded-full object-cover opacity-80" />
                        </div>
                        <ChevronDown size={20} className="text-white" />
                    </div>
                </div>
            </div>

            <h2 className="font-bold text-gray-700 mb-4">Pockets</h2>

            {/* bluSaving Card */}
            <div className="w-full bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden h-48 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        {/* Placeholder icon for pocket/bag */}
                        <div className="w-5 h-5 border-2 border-white/80 rounded-b-lg rounded-t-sm"></div>
                        <span className="font-bold">bluSaving</span>
                    </div>
                    <p className="text-xs text-white/90 max-w-[60%] leading-relaxed">
                        Produk tabungan untuk semua tujuan, suku bunga tabungan 3% p.a.
                    </p>
                </div>

                <div className="flex justify-between items-end">
                    <button className="bg-white text-purple-600 text-xs font-bold py-2 px-4 rounded-full shadow-sm">
                        Buka bluSaving
                    </button>
                </div>

                {/* Decorative Illustration (Jar with coins) */}
                <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
                    {/* This would ideally be an image, using CSS shapes for now */}
                    <div className="absolute bottom-4 right-4 w-16 h-20 bg-yellow-400/20 rounded-xl backdrop-blur-sm border border-white/30 flex items-end justify-center pb-2">
                        <div className="w-12 h-14 bg-white/10 rounded-lg"></div>
                    </div>
                    <div className="absolute bottom-16 right-8 w-8 h-8 bg-pink-300 rounded-sm rotate-12 shadow-lg"></div>
                    <div className="absolute bottom-8 right-20 w-4 h-4 bg-yellow-300 rounded-full shadow-md"></div>
                </div>
            </div>

        </main>
    );
}
