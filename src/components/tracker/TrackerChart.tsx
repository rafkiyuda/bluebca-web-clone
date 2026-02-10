"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface TrackerChartProps {
    view: "cashflow" | "pengeluaran" | "pemasukan";
}

const data = [
    { name: "1-7", income: 0, expense: 0 },
    { name: "8-14", income: 0, expense: 0 },
    { name: "15-21", income: 0, expense: 0 },
    { name: "22-28", income: 0, expense: 0 },
];

export function TrackerChart({ view }: TrackerChartProps) {
    if (view === "cashflow") {
        return (
            <div className="w-full bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280', fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#6B7280', fontSize: 10 }}
                                tickCount={6}
                            />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="expense"
                                stroke="#F59E0B"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorExpense)"
                            />
                            <Area
                                type="monotone"
                                dataKey="income"
                                stroke="#10B981"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorIncome)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="flex justify-between mt-6">
                    <div>
                        <p className="text-lg font-bold text-orange-400">Rp 0,00</p>
                        <p className="text-gray-400 text-xs font-medium">Pengeluaran</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold text-emerald-500">Rp 0,00</p>
                        <p className="text-gray-400 text-xs font-medium">Pemasukan</p>
                    </div>
                </div>
            </div>
        );
    }

    // Donut Chart View (Pengeluaran / Pemasukan)
    const isExpense = view === "pengeluaran";
    const label = isExpense ? "pengeluaran" : "pemasukan";

    return (
        <div className="w-full bg-white rounded-3xl border border-gray-100 p-8 shadow-sm flex flex-col items-center">

            <p className="text-center text-gray-500 text-sm mb-8">
                Tidak ada {label} di bulan Februari 2026
            </p>

            <div className="relative w-48 h-48 mb-6">
                {/* Simple CSS Donut Chart */}
                <div className="w-full h-full rounded-full border-[1.5rem] border-gray-200"></div>
                {/* Or we could use Recharts PieChart if we wanted real data, but empty state is requested */}
            </div>

            <button className="text-blu-blue font-bold text-sm hover:underline">
                Lihat detail
            </button>
        </div>
    );
}
