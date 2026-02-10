"use client";

import { Calendar, Search, Scroll, ArrowUpCircle, ArrowDownCircle, Coffee, ShoppingBag, Car, Zap, ArrowDownLeft, ArrowUpRight, Target } from "lucide-react";
import { TrackerChart } from "@/components/tracker/TrackerChart";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { TargetModal } from "@/components/modals/TargetModal";

const dummyTransactions = [
    { id: 1, title: "Kopi Kenangan", category: "Makanan & Minuman", date: "27 Feb", amount: -25000, icon: Coffee, color: "bg-orange-100 text-orange-500" },
    { id: 2, title: "Gojek Indonesia", category: "Transportasi", date: "26 Feb", amount: -45000, icon: Car, color: "bg-blue-100 text-blue-500" },
    { id: 3, title: "Transfer dari Budi", category: "Transfer Masuk", date: "25 Feb", amount: 500000, icon: ArrowDownLeft, color: "bg-green-100 text-green-500" },
    { id: 4, title: "Indomaret", category: "Belanja", date: "24 Feb", amount: -150000, icon: ShoppingBag, color: "bg-yellow-100 text-yellow-500" },
    { id: 5, title: "Token Listrik", category: "Tagihan", date: "22 Feb", amount: -100000, icon: Zap, color: "bg-purple-100 text-purple-500" },
];

export default function TrackerPage() {
    const [activeTab, setActiveTab] = useState<"cashflow" | "pengeluaran" | "pemasukan">("cashflow");
    const [isTargetModalOpen, setIsTargetModalOpen] = useState(false);

    return (
        <main className="flex min-h-screen flex-col p-6 pt-32 pb-32 relative bg-white">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Tracker</h1>
                <button
                    onClick={() => setIsTargetModalOpen(true)}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-gray-600"
                >
                    <Target size={20} />
                </button>
            </div>

            <TargetModal isOpen={isTargetModalOpen} onClose={() => setIsTargetModalOpen(false)} />

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
                    <div className={cn("p-1 rounded-full", activeTab === "pengeluaran" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-400")}>
                        <ArrowUpCircle size={14} fill="white" className={activeTab === "pengeluaran" ? "text-white" : "text-gray-400"} />
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
            <div className="mb-4 flex items-center justify-between">
                <h2 className="font-bold text-gray-800">Riwayat Transaksi</h2>
                <button className="text-blu-blue text-sm font-semibold">Lihat Semua</button>
            </div>

            <div className="flex flex-col gap-4">
                {dummyTransactions.map((trx) => (
                    <div key={trx.id} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 hover:bg-gray-50 transition-colors rounded-xl p-2 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", trx.color)}>
                                <trx.icon size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 text-sm">{trx.title}</p>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <span>{trx.category}</span>
                                    <span>•</span>
                                    <span>{trx.date}</span>
                                </div>
                            </div>
                        </div>
                        <p className={cn(
                            "font-bold text-sm",
                            trx.amount > 0 ? "text-emerald-500" : "text-gray-800"
                        )}>
                            {trx.amount > 0 ? "+" : ""}
                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(trx.amount)}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}
