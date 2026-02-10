"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { AddFavoriteModal } from "../modals/AddFavoriteModal";

export function FavoriteTransactions() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="w-full mt-8 mb-24">
            <h2 className="font-bold text-gray-500 mb-4 text-sm tracking-wide">TRANSAKSI FAVORIT</h2>

            <div className="flex gap-4 items-center">
                {/* Add New Button */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex flex-col items-center gap-2 group"
                >
                    <div className="w-14 h-14 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-300 group-hover:border-blu-primary group-hover:text-blu-primary transition-colors">
                        <Plus size={24} />
                    </div>
                    <span className="text-xs text-center text-gray-400">Tambah</span>
                </button>

                {/* Empty State Text */}
                <div className="flex-1 flex flex-col justify-center h-14 text-center">
                    <p className="text-gray-300 text-sm">Kamu belum punya</p>
                    <p className="text-gray-300 text-sm">Transaksi Favorit</p>
                </div>
            </div>

            <AddFavoriteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
