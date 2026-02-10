"use client";

import { ArrowLeft, Share2, Info, Flag, Utensils, Bus, ShoppingBag, Gift, Award, ChefHat } from "lucide-react";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const expenseData = [
    { name: "Sewa Apt", amount: 3000, limit: 3000 },
    { name: "Listrik", amount: 500, limit: 600 },
    { name: "Makanan", amount: 1200, limit: 1000, alert: true }, // Alert triggered
    { name: "Transport", amount: 400, limit: 500 },
    { name: "Pulsa", amount: 200, limit: 200 },
];

export default function GoalPage() {
    return (
        <main className="min-h-screen bg-white pb-32">
            {/* Header */}
            <div className="bg-blu-blue text-white p-6 pt-12 rounded-b-[2.5rem] shadow-lg relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <Link href="/tracker">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex gap-4">
                        <Share2 className="w-6 h-6" />
                    </div>
                </div>

                <h1 className="text-xl font-bold mb-1">GOAL : LIBURAN KE JEPANG!</h1>
                <p className="text-blue-100 text-sm font-semibold">Desember 2024</p>
            </div>

            <div className="p-6 -mt-8 relative z-20 space-y-6">

                {/* Spending Alert Chart */}
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="font-bold text-gray-800">Financial Goal</h2>
                            <p className="text-xs text-gray-400">Target keuangan yang ingin dicapai</p>
                        </div>
                        <div className="bg-orange-100 text-orange-600 px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1">
                            <Info size={12} />
                            Spending Alert
                        </div>
                    </div>

                    <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={expenseData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} interval={0} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="amount" radius={[4, 4, 0, 0]} barSize={30}>
                                    {expenseData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.alert ? '#F97316' : '#60A5FA'} // Orange if alert, else Blue
                                        />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Saving Milestone (Jar Visual) */}
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-6 text-white relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                    <h2 className="font-bold mb-1">Saving Progress</h2>
                    <p className="text-xs text-blue-100 mb-6">Indikator progres dalam mencapai target tabungan</p>

                    <div className="flex items-center gap-6">
                        {/* Visual Jar */}
                        <div className="w-24 h-32 border-4 border-white/30 rounded-2xl relative bg-white/10 flex items-end justify-center overflow-hidden backdrop-blur-sm">
                            <div className="w-full h-[90%] bg-white/90 absolute bottom-0 transition-all duration-1000"></div>
                            <span className="relative z-10 text-blue-600 font-bold text-xl mb-2">90%</span>
                        </div>

                        <div className="flex-1 space-y-4">
                            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm border border-white/30">
                                <div className="flex items-center gap-2 mb-1">
                                    <Flag size={16} />
                                    <span className="text-xs font-bold">Milestone 1</span>
                                </div>
                                <p className="text-lg font-bold">10 Hari lagi</p>
                            </div>
                            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm border border-white/30">
                                <div className="flex items-center gap-2 mb-1">
                                    <Award size={16} />
                                    <span className="text-xs font-bold">Tabungan</span>
                                </div>
                                <p className="text-lg font-bold">Rp 18.000.000</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive Challenges */}
                <div>
                    <h2 className="font-bold text-gray-800 text-lg mb-4">Interactive Challenge</h2>
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        <div className="min-w-[240px] bg-emerald-50 rounded-2xl p-4 border border-emerald-100">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                                    <ChefHat size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-sm">Cook at Home</h3>
                                    <p className="text-xs text-emerald-600 font-semibold">Challenge</p>
                                </div>
                            </div>
                            <div className="w-full bg-emerald-200 h-2 rounded-full mb-2">
                                <div className="bg-emerald-500 h-2 rounded-full w-3/5"></div>
                            </div>
                            <p className="text-xs text-gray-500 text-right">3/5 days</p>
                        </div>

                        <div className="min-w-[240px] bg-blue-50 rounded-2xl p-4 border border-blue-100">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <Bus size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-sm">Public Transport</h3>
                                    <p className="text-xs text-blue-600 font-semibold">Quest</p>
                                </div>
                            </div>
                            <div className="w-full bg-blue-200 h-2 rounded-full mb-2">
                                <div className="bg-blue-500 h-2 rounded-full w-2/5"></div>
                            </div>
                            <p className="text-xs text-gray-500 text-right">3/7 days</p>
                        </div>
                    </div>
                </div>

                {/* Recommendation / Before After */}
                <div className="space-y-4">
                    <h2 className="font-bold text-gray-800 text-lg">Misi Interaktif</h2>

                    {/* Mission 1 */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                                <Utensils size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-semibold">Makanan</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-400 text-xs line-through">Rp 1.2jt</span>
                                    <span className="text-gray-800 font-bold text-sm">Rp 1.0jt</span>
                                </div>
                                <span className="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full font-bold">HEMAT Rp 200rb!</span>
                            </div>
                        </div>
                        <button className="bg-emerald-500 text-white p-2 rounded-full shadow-lg shadow-emerald-200">
                            <Award size={16} />
                        </button>
                    </div>

                    {/* Mission 2 */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                                <Bus size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-semibold">Transportasi</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-400 text-xs line-through">Rp 400rb</span>
                                    <span className="text-gray-800 font-bold text-sm">Rp 217rb</span>
                                </div>
                                <span className="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full font-bold">HEMAT Rp 183rb!</span>
                            </div>
                        </div>
                        <button className="bg-emerald-500 text-white p-2 rounded-full shadow-lg shadow-emerald-200">
                            <Award size={16} />
                        </button>
                    </div>
                </div>

                {/* Rewards */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-6 text-white text-center relative overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
                    <Gift className="w-12 h-12 mx-auto mb-4 animate-bounce" />
                    <h2 className="text-xl font-bold mb-2">Selamat Anda berhasil HEMAT!</h2>
                    <p className="text-3xl font-extrabold mb-4 text-emerald-300">Rp 383.000</p>
                    <p className="text-xs text-indigo-100 mb-6 px-4">
                        Anda mendapatkan reward berupa produk official merchandise & voucher makanan / fashion / dll
                    </p>
                    <button className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl hover:bg-indigo-50 transition-colors">
                        Klaim Reward
                    </button>
                </div>

            </div>
        </main>
    );
}
