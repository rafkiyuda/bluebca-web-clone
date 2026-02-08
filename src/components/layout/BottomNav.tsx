import { ScanLine } from "lucide-react";

export function BottomNav() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button className="bg-blu-blue text-white rounded-full px-6 py-3 flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-all">
                <span className="font-semibold">Transaksi</span>
                <div className="bg-cyan-400 p-1 rounded-md">
                    <ScanLine size={20} className="text-white" />
                </div>
            </button>
        </div>
    );
}
