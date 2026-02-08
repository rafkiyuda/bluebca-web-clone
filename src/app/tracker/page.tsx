import { Calendar, Search } from "lucide-react";
import { TrackerChart } from "@/components/tracker/TrackerChart";

export default function TrackerPage() {
    return (
        <main className="flex min-h-screen flex-col p-6 pt-32 pb-24 relative bg-white">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Tracker</h1>

            {/* Date Picker */}
            <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 w-fit mb-8">
                <span className="font-semibold text-gray-700">Feb 2026</span>
                <Calendar size={18} className="text-gray-500" />
            </button>

            {/* Tabs */}
            <div className="flex gap-6 mb-6 border-b border-gray-200">
                <button className="pb-2 border-b-2 border-blu-blue font-bold text-gray-800">Mutasi</button>
                <button className="pb-2 font-medium text-gray-400">Analisis</button>
            </div>

            {/* Chart */}
            <TrackerChart />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
                <div>
                    <p className="text-lg font-bold text-orange-400">Rp 0,00</p>
                    <p className="text-gray-400 text-sm">Pengeluaran</p>
                </div>
                <div>
                    <p className="text-lg font-bold text-emerald-500">Rp 0,00</p>
                    <p className="text-gray-400 text-sm">Pemasukan</p>
                </div>
            </div>

            <div className="bg-blu-gray/50 h-2 w-full -mx-6 mb-6"></div>

            {/* Transaction List */}
            <div className="mb-4">
                <h2 className="font-bold text-gray-800">Februari 2026</h2>
            </div>

            <div className="flex flex-col items-center justify-center mt-12 gap-4">
                <div className="relative">
                    <div className="w-16 h-16 bg-cyan-400 rounded-full opacity-20"></div>
                    <Search size={32} className="text-blu-blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    {/* Using a simple search icon to mimic the looking glass illustration */}
                </div>
                <p className="text-center text-gray-400 text-sm max-w-[200px]">
                    Kamu belum pernah bertransaksi di bulan Februari ini
                </p>
            </div>
        </main>
    );
}
