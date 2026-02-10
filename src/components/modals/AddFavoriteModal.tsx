"use client";

import { X, ArrowRightLeft, Receipt, Wallet } from "lucide-react";

interface AddFavoriteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AddFavoriteModal({ isOpen, onClose }: AddFavoriteModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm transition-opacity">
            <div className="bg-white w-full max-w-md rounded-t-3xl p-6 pb-10 animate-slide-up relative">
                {/* Handle bar acting as a visual cue for draggability */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-300 rounded-full"></div>

                <div className="flex justify-between items-center mb-6 mt-2">
                    <h2 className="text-lg font-bold text-gray-800">Tambah Transaksi Favorit</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                        <X size={24} className="text-gray-500" />
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Option 1: Transfer */}
                    <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors">
                            <ArrowRightLeft size={24} />
                        </div>
                        <span className="text-base font-semibold text-gray-700">Transfer</span>
                    </button>

                    <div className="h-px bg-gray-100 w-full ml-16"></div>

                    {/* Option 2: Bayar/Beli */}
                    <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                            <Receipt size={24} />
                        </div>
                        <span className="text-base font-semibold text-gray-700">Bayar/Beli</span>
                    </button>

                    <div className="h-px bg-gray-100 w-full ml-16"></div>

                    {/* Option 3: Top Up E-Wallet */}
                    <button className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                            <Wallet size={24} />
                        </div>
                        <span className="text-base font-semibold text-gray-700">Top Up E-Wallet</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
