"use client";

import { useEffect, useState } from "react";
import { X, Target, Sparkles, User } from "lucide-react";
import { generateFinancialAdvice } from "@/app/actions/gemini";
import Link from "next/link";
import Image from "next/image";

interface TargetModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function TargetModal({ isOpen, onClose }: TargetModalProps) {
    const [isClosing, setIsClosing] = useState(false);
    const [targetName, setTargetName] = useState("");
    const [amount, setAmount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [advice, setAdvice] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            setIsClosing(false);
            setTargetName("");
            setAmount("");
            setAdvice(null);
            setIsLoading(false);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    const handleAnalyze = async () => {
        if (!targetName || !amount) {
            alert("Mohon isi Target Impian dan Amount.");
            return;
        }

        setIsLoading(true);
        try {
            const result = await generateFinancialAdvice(targetName, Number(amount));
            setAdvice(result);
        } catch (error) {
            alert("Gagal mendapatkan saran. Coba lagi.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen && !isClosing) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isClosing ? "opacity-0" : "opacity-100"
                    }`}
                onClick={handleClose}
            />

            <div
                className={`bg-white rounded-3xl w-full max-w-[340px] p-6 relative z-10 shadow-2xl transition-all duration-300 transform ${isClosing ? "opacity-0 scale-95" : "opacity-100 scale-up"
                    }`}
            >
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blu-blue">
                            <Target size={18} />
                        </div>
                        <h2 className="font-bold text-lg text-gray-800">Target Impian</h2>
                    </div>
                    <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>

                {!advice ? (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-400 mb-1 ml-1">Target Impian</label>
                            <input
                                type="text"
                                placeholder="Liburan ke Jepang"
                                value={targetName}
                                onChange={(e) => setTargetName(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blu-blue focus:ring-1 focus:ring-blu-blue transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-400 mb-1 ml-1">Amount</label>
                            <input
                                type="number"
                                placeholder="20.000.000"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blu-blue focus:ring-1 focus:ring-blu-blue transition-colors"
                            />
                        </div>

                        <button
                            onClick={handleAnalyze}
                            disabled={isLoading}
                            className="w-full bg-blu-blue text-white font-bold py-3 rounded-full mt-4 hover:bg-blue-600 transition-colors active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Sparkles className="animate-spin" size={18} />
                                    Menganalisis...
                                </>
                            ) : (
                                "Analisis dengan AI"
                            )}
                        </button>
                    </div>
                ) : (
                    <div className="animate-fade-in space-y-4">
                        <div className="flex gap-3">
                            {/* Avatar Placeholder */}
                            <div className="w-10 h-10 rounded-full bg-pink-100 border-2 border-white shadow-sm flex-shrink-0 overflow-hidden flex items-center justify-center">
                                <span className="text-xl">👩🏻‍💼</span>
                            </div>

                            <div className="bg-blue-50 rounded-2xl p-4 rounded-tl-none text-sm text-gray-700 leading-relaxed max-h-[300px] overflow-y-auto">
                                <p className="whitespace-pre-line">{advice}</p>
                            </div>
                        </div>

                        <Link
                            href="/tracker/goal"
                            className="block w-full"
                        >
                            <button className="w-full bg-blu-blue text-white font-bold py-3 rounded-full hover:bg-blue-600 transition-colors">
                                Lihat Detail Goal
                            </button>
                        </Link>

                        <button
                            onClick={handleClose}
                            className="w-full bg-gray-100 text-gray-700 font-bold py-3 rounded-full mt-2 hover:bg-gray-200 transition-colors"
                        >
                            Tutup
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
