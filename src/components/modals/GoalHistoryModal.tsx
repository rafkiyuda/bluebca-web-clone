"use client";

import { useEffect, useState } from "react";
import { X, Clock, Trash2, ChevronRight, Search } from "lucide-react";
import { TargetModal } from "./TargetModal";

interface GoalHistoryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface SavedGoal {
    id: string;
    targetName: string;
    amount: number;
    advice: string;
    createdAt: number;
}

export function GoalHistoryModal({ isOpen, onClose }: GoalHistoryModalProps) {
    const [history, setHistory] = useState<SavedGoal[]>([]);
    const [selectedGoal, setSelectedGoal] = useState<SavedGoal | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (isOpen) {
            const saved = localStorage.getItem("blu-goals");
            if (saved) {
                try {
                    setHistory(JSON.parse(saved).sort((a: SavedGoal, b: SavedGoal) => b.createdAt - a.createdAt));
                } catch (e) {
                    console.error("Failed to parse history", e);
                }
            }
        }
    }, [isOpen]);

    const handleDelete = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        const newHistory = history.filter(item => item.id !== id);
        setHistory(newHistory);
        localStorage.setItem("blu-goals", JSON.stringify(newHistory));
    };

    const filteredHistory = history.filter(item =>
        item.targetName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
                <div className="bg-white rounded-[2.5rem] w-full max-w-[360px] min-h-[500px] max-h-[85vh] overflow-y-auto p-6 relative z-10 shadow-3xl flex flex-col no-scrollbar animate-scale-up">

                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blu-blue">
                                <Clock size={20} />
                            </div>
                            <div>
                                <h2 className="font-bold text-lg text-gray-800">Riwayat</h2>
                                <p className="text-xs text-gray-400">Analisis Target Impian</p>
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <X size={24} className="text-gray-400" />
                        </button>
                    </div>

                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Cari target..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-10 pr-4 py-3 text-sm font-semibold focus:outline-none focus:border-blu-blue focus:ring-1 focus:ring-blu-blue"
                        />
                    </div>

                    {filteredHistory.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center opacity-50">
                            <Clock size={48} className="text-gray-300 mb-2" />
                            <p className="text-sm font-bold text-gray-400">Belum ada riwayat</p>
                            <p className="text-xs text-gray-400">Analisis goal kamu sekarang!</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {filteredHistory.map((goal) => (
                                <div
                                    key={goal.id}
                                    onClick={() => setSelectedGoal(goal)}
                                    className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 hover:bg-blue-50/50 transition-colors cursor-pointer group relative overflow-hidden"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-gray-800 line-clamp-1">{goal.targetName}</h3>
                                        <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
                                            {new Date(goal.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <p className="text-xs text-blu-blue font-bold">
                                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(goal.amount)}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={(e) => handleDelete(goal.id, e)}
                                                className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors z-10"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                            <ChevronRight size={18} className="text-gray-300 group-hover:text-blu-blue transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Reusing TargetModal in read-only mode for details */}
            {selectedGoal && (
                <TargetModal
                    isOpen={!!selectedGoal}
                    onClose={() => setSelectedGoal(null)}
                    initialData={selectedGoal} // We need to add this prop to TargetModal
                />
            )}
        </>
    );
}
