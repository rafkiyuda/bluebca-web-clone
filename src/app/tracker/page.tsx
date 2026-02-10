"use client";

import { Calendar, Search, Scroll, ArrowUpCircle, ArrowDownCircle } from "lucide-react"; // Using available icons
import { TrackerChart } from "@/components/tracker/TrackerChart";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function TrackerPage() {
    const [activeTab, setActiveTab] = useState<"cashflow" | "pengeluaran" | "pemasukan">("cashflow");

    return (
        <main className="flex min-h-screen flex-col p-6 pt-32 pb-32 relative bg-white">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Tracker</h1>

            {/* Top Tabs (Mutasi / Analisis) */}
            <div className="flex gap-6 mb-6 border-b border-gray-200">
                <button className="pb-2 border-b-2 border-blu-blue font-bold text-gray-800">Mutasi</button>
                <button className="pb-2 font-medium text-gray-400">Analisis</button>
            </div>

            {/* Date Picker */}
            <button className="flex items-center gap-2 border border-blue-900 rounded-full px-4 py-2 w-fit mb-6">
                <span className="font-bold text-gray-800">Feb 2026</span>
                <Calendar size={18} className="text-gray-800" />
            </button>

            {/* Chart Type Tabs */}
            <div className="bg-white p-1 rounded-2xl flex items-center justify-between mb-4 border border-gray-100 shadow-sm relative overflow-hidden">
                <button
                    onClick={() => setActiveTab("cashflow")}
                    className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all z-10",
                        activeTab === "cashflow" ? "text-blue-700 bg-blue-50" : "text-gray-400"
                    )}
                >
                    <div className={cn("p-1 rounded-full", activeTab === "cashflow" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-400")}>
                        <Scroll size={14} />
                    </div>
                    Cashflow
                </button>

                <button
                    onClick={() => setActiveTab("pengeluaran")}
                    className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all z-10",
                        activeTab === "pengeluaran" ? "text-blue-700 bg-blue-50" : "text-gray-400"
                    )}
                >
                    <div className={cn("rounded-full", activeTab === "pengeluaran" ? "text-blue-600" : "text-gray-300")}>
                        <ArrowUpCircle size={20} className="transform rotate-180" />
                        {/* Down arrow usually implies expense (out/down) but user image has Up arrow for Pemasukan and Down(ish) for Pengeluaran? 
                            Wait, user image:
                            Cashflow: Icon
                            Pengeluaran: Arrow UP (Icon with Up Arrow)
                            Pemasukan: Arrow DOWN (Icon with Down Arrow)
                            Actually standard logic: Expense = Money Out (Red/Orange), Income = Money In (Green).
                            Let's follow the user image strictly if possible. 
                            Image 1: Cashflow is active.
                            Image 2: Pengeluaran active. Icon is Up Arrow in circle. 
                            Image 3: Pemasukan active. Icon is Down Arrow in circle.
                         */}
                        <div className={cn("p-1 rounded-full", activeTab === "pengeluaran" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-400")}>
                            <ArrowUpCircle size={14} fill="white" className={activeTab === "pengeluaran" ? "text-white" : "text-gray-400"} />
                        </div>
                    </div>
                    Pengeluaran
                </button>

                <button
                    onClick={() => setActiveTab("pemasukan")}
                    className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all z-10",
                        activeTab === "pemasukan" ? "text-blue-700 bg-blue-50" : "text-gray-400"
                    )}
                >
                    <div className={cn("p-1 rounded-full", activeTab === "pemasukan" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-400")}>
                        <ArrowDownCircle size={14} fill="white" className={activeTab === "pemasukan" ? "text-white" : "text-gray-400"} />
                    </div>
                    Pemasukan
                </button>
            </div>

            {/* Chart */}
            <TrackerChart view={activeTab} />

            <div className="bg-blu-gray/50 h-2 w-screen -mx-6 my-8"></div>

            {/* Transaction List */}
            <div className="mb-4">
                <h2 className="font-bold text-gray-800">Februari 2026</h2>
            </div>

            <div className="flex flex-col items-center justify-center mt-8 gap-4">
                <div className="relative">
                    <div className="w-16 h-16 bg-cyan-400 rounded-full opacity-20"></div>
                    <Search size={32} className="text-blu-blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <p className="text-center text-gray-400 text-sm max-w-[200px]">
                    {activeTab === "pemasukan"
                        ? "Tidak ada pemasukan di bulan Februari 2026"
                        : activeTab === "pengeluaran"
                            ? "Tidak ada pengeluaran di bulan Februari 2026"
                            : "Kamu belum pernah bertransaksi di bulan Februari ini"
                    }
                </p>
            </div>
        </main>
    );
}
