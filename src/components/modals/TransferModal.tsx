"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface TransferModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function TransferModal({ isOpen, onClose }: TransferModalProps) {
    const [amount, setAmount] = useState("");
    const [destination, setDestination] = useState("");
    const [note, setNote] = useState("");

    if (!isOpen) return null;

    const navHeight = 64; // Approximate height of the bottom nav if it exists, or just padding

    return (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
            {/* Header */}
            <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100 shadow-sm">
                <h2 className="text-lg font-bold text-gray-800">Pindah Dana</h2>
                <button onClick={onClose} className="p-2 -mr-2 text-gray-500 hover:text-gray-800">
                    <X size={24} />
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto">
                {/* Destination Input */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-600">Nomor Rekening Tujuan</label>
                    <input
                        type="tel"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="Contoh: 1234567890"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blu-blue focus:ring-2 focus:ring-blu-blue/20 outline-none transition-all placeholder:text-gray-400 font-medium"
                    />
                </div>

                {/* Amount Input */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-600">Nominal Transfer</label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">Rp</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blu-blue focus:ring-2 focus:ring-blu-blue/20 outline-none transition-all placeholder:text-gray-400 font-bold text-lg"
                        />
                    </div>
                    {amount && (
                        <p className="text-xs text-gray-500 text-right">
                            Saldo aktif: Rp 12.500.000
                        </p>
                    )}
                </div>

                {/* Note Input */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-600">Catatan (Opsional)</label>
                    <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Tulis catatan..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blu-blue focus:ring-2 focus:ring-blu-blue/20 outline-none transition-all placeholder:text-gray-400 resize-none h-24"
                    />
                </div>
            </div>

            {/* Footer Action */}
            <div className="p-6 border-t border-gray-100 bg-white safe-area-bottom">
                <button
                    onClick={() => {
                        alert(`Transfer Rp ${amount} ke ${destination} berhasil!`);
                        onClose();
                    }}
                    disabled={!amount || !destination}
                    className="w-full bg-blu-primary hover:bg-blu-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-blu-primary/30 disabled:opacity-50 disabled:shadow-none transition-all active:scale-[0.98]"
                >
                    Lanjut
                </button>
            </div>
        </div>
    );
}
