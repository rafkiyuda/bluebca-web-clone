"use client";

import { useState } from "react";
import { Copy, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export function AccountCard() {
    const [showBalance, setShowBalance] = useState(false);

    return (
        <div className="w-full">
            {/* Tabs */}
            <div className="flex gap-6 mb-4 border-b border-gray-200">
                <button className="pb-2 border-b-2 border-blu-blue font-bold text-gray-800">Akun</button>
                <button className="pb-2 font-medium text-gray-400">Kartu</button>
            </div>

            <p className="text-gray-400 mb-4">Daniella Tjung</p>

            <div className="bg-blu-secondary rounded-2xl p-6 shadow-sm relative overflow-hidden">

                {/* Account Info */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-700">bluAccount</span>
                        <span className="text-gray-500">- 0072 5827 9112</span>
                    </div>
                    <Copy size={18} className="text-gray-400 cursor-pointer" />
                </div>

                {/* Balance */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-700">Rp</span>
                        <span className="text-2xl font-extrabold text-gray-800 tracking-wider">
                            {showBalance ? "12.500.000" : "••••••••"}
                        </span>
                    </div>
                    <button onClick={() => setShowBalance(!showBalance)}>
                        {showBalance ? (
                            <EyeOff size={20} className="text-gray-400" />
                        ) : (
                            <Eye size={20} className="text-gray-400" />
                        )}
                    </button>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                    <button
                        onClick={() => alert("Fitur Pindah Dana belum tersedia")}
                        className="bg-gray-200/80 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-2xl flex-1 text-sm transition-colors active:scale-95"
                    >
                        Pindah Dana
                    </button>
                    <button
                        onClick={() => alert("Fitur QRIS belum tersedia")}
                        className="bg-gray-200/80 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-2xl flex-1 text-sm transition-colors active:scale-95"
                    >
                        QRIS
                    </button>
                    <div className="w-12 flex items-center justify-center">
                        {/* This would be the shortcuts icon/button */}
                        <div className="relative">
                            <img src="https://placehold.co/40x40/00C0D4/white?text=+" alt="More" className="rounded-full w-10 h-10 object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-4 ml-2">
                <div className="w-6 h-1.5 bg-blu-blue rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            </div>
        </div>
    );
}
