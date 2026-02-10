"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";

interface TrackerChartProps {
    view: "cashflow" | "pengeluaran" | "pemasukan";
}

// Dummy data for Cashflow
const cashflowData = [
    { name: "1-7", income: 2500000, expense: 1200000 },
    { name: "8-14", income: 500000, expense: 800000 },
    { name: "15-21", income: 1500000, expense: 600000 },
    { name: "22-28", income: 1000000, expense: 2000000 },
];

// Dummy data for Expense
const expenseData = [
    { name: "Makanan & Minuman", value: 1500000, color: "#F59E0B" }, // Orange
    { name: "Transportasi", value: 800000, color: "#EF4444" }, // Red
    { name: "Top Up E-Wallet", value: 500000, color: "#3B82F6" }, // Blue
    { name: "Lainnya", value: 1800000, color: "#A855F7" }, // Purple
];

// Dummy data for Income
const incomeData = [
    { name: "Gaji", value: 5000000, color: "#10B981" }, // Green
    { name: "Transfer Masuk", value: 500000, color: "#34D399" }, // Light Green
];

export function TrackerChart({ view }: TrackerChartProps) {
    if (view === "cashflow") {
        return (
            <div className="w-full bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={cashflowData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
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
                                tickFormatter={(value) => {
                                    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}jt`;
                                    if (value >= 1000) return `${(value / 1000).toFixed(0)}rb`;
                                    return value;
                                }}
                            />
                            <Tooltip
                                formatter={(value: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value)}
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="expense"
                                stroke="#F59E0B"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorExpense)"
                                name="Pengeluaran"
                            />
                            <Area
                                type="monotone"
                                dataKey="income"
                                stroke="#10B981"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorIncome)"
                                name="Pemasukan"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="flex justify-between mt-6">
                    <div>
                        <p className="text-lg font-bold text-orange-400">Rp 4.600.000</p>
                        <p className="text-gray-400 text-xs font-medium">Pengeluaran</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold text-emerald-500">Rp 5.500.000</p>
                        <p className="text-gray-400 text-xs font-medium">Pemasukan</p>
                    </div>
                </div>
            </div>
        );
    }

    // Pie Chart View (Pengeluaran / Pemasukan)
    const isExpense = view === "pengeluaran";
    const chartData = isExpense ? expenseData : incomeData;
    const total = chartData.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <div className="w-full bg-white rounded-3xl border border-gray-100 p-8 shadow-sm flex flex-col items-center">
            <h3 className="font-bold text-gray-700 mb-6 self-start">
                Total {isExpense ? "Pengeluaran" : "Pemasukan"}
            </h3>

            <div className="relative w-64 h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value)}
                        />
                        <Legend verticalAlign="bottom" height={36} iconType="circle" />
                    </PieChart>
                </ResponsiveContainer>

                {/* Center Text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-xs text-gray-400">Total</p>
                    <p className={`font-bold text-sm ${isExpense ? 'text-orange-400' : 'text-emerald-500'}`}>
                        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(total)}
                    </p>
                </div>
            </div>

            <button className="text-blu-blue font-bold text-sm hover:underline mt-4">
                Lihat detail transaksi
            </button>
        </div>
    );
}
