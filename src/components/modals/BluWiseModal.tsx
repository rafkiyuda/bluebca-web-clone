"use client";

import { useState, useEffect } from "react";
import { X, Trophy, TrendingUp, AlertTriangle, Coins, ArrowRight, RefreshCcw, Banknote, Shield, Zap } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface BluWiseModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type Step = "WELCOME" | "CHOICE" | "GAMBLING" | "GAMBLING_RESULT" | "INVESTMENT_INPUT" | "INVESTMENT_RESULT";

export function BluWiseModal({ isOpen, onClose }: BluWiseModalProps) {
    const [step, setStep] = useState<Step>("WELCOME");
    const [balance, setBalance] = useState(20000);
    const [slotResult, setSlotResult] = useState<string[]>(["?", "?", "?"]);
    const [isSpinning, setIsSpinning] = useState(false);
    const [riskProfile, setRiskProfile] = useState<"Conservative" | "Moderate" | "Aggressive">("Moderate");
    const [spinCount, setSpinCount] = useState(0);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setStep("WELCOME");
            setBalance(20000);
            setSlotResult(["?", "?", "?"]);
            setSpinCount(0);
        }
    }, [isOpen]);

    const handleSpin = () => {
        if (balance < 10000) return;
        setBalance(prev => prev - 10000);
        setIsSpinning(true);

        // Simulate spinning
        let interval = setInterval(() => {
            setSlotResult([
                Math.floor(Math.random() * 9).toString(),
                Math.floor(Math.random() * 9).toString(),
                Math.floor(Math.random() * 9).toString()
            ]);
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            setIsSpinning(false);

            if (spinCount === 0) {
                // FIRST SPIN: WIN (Jackpot)
                setSlotResult(["7", "7", "7"]);
                setBalance(prev => prev + 20000); // Win 20k, total 30k (10k cost + 20k prize + 10k initial remaining) -> wait, logic: start 20, pay 10 (rem 10), win 20 -> 30?
                // Visual logic: Start 20k. Cost 10k. Balance 10k. Win 20k? -> Balance 30k.
                // Text says "Selamat kamu dapat Jackpot Rp 20.000!"
                // Let's set it to exactly match the flow.
                // "Saldo: Rp 20.000" (Start) -> "Pakai 10k" -> "Saldo: Rp 10.000" -> Win 20k -> "Saldo: Rp 30.000"? Or simple win.
                // Let's just add 20000 to balance.
                setSpinCount(1);
            } else {
                // SECOND SPIN: LOSE ALL
                setSlotResult(["6", "7", "7"]);
                setBalance(1000); // Leave a tiny amount to show "broke" but not 0
                setStep("GAMBLING_RESULT");
            }
        }, 2000);
    };

    if (!isOpen) return null;

    const renderContent = () => {
        switch (step) {
            case "WELCOME":
                return (
                    <div className="text-center space-y-6 animate-fade-in">
                        <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-4xl">🤖</span>
                        </div>
                        <h2 className="text-2xl font-bold text-blu-blue">Halo Morgan,</h2>
                        <p className="text-gray-600">
                            Selamat! Kamu bisa mendapatkan<br />
                            <span className="text-2xl font-bold text-emerald-500">Rp 1.000.000,00</span>
                        </p>
                        <div className="relative h-44 w-full bg-blue-100 rounded-2xl overflow-hidden flex items-center justify-center">
                            <Coins className="w-24 h-24 text-blue-300 animate-bounce" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-200/50 to-transparent"></div>
                            {/* Decorative coins falling */}
                            <div className="absolute top-0 left-1/4 animate-bounce delay-75 text-yellow-500">💰</div>
                            <div className="absolute top-4 right-1/4 animate-bounce delay-150 text-yellow-500">💰</div>
                        </div>
                        <button
                            onClick={() => setStep("CHOICE")}
                            className="w-full bg-white text-blu-blue font-bold py-4 rounded-full shadow-lg border-2 border-blu-blue hover:bg-blue-50 transition-all active:scale-95"
                        >
                            Dapatkan Dana
                        </button>
                    </div>
                );

            case "CHOICE":
                return (
                    <div className="text-center space-y-6 animate-fade-in">
                        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-3xl">🤔</span>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">#bluWISE</h2>
                            <p className="text-sm text-gray-500">Halo Morgan, Silakan pilih cara untuk mendapatkan dana itu!</p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 mt-4">
                            <button
                                onClick={() => setStep("GAMBLING")}
                                className="bg-white border-2 border-red-100 p-4 rounded-2xl hover:bg-red-50 transition-all group text-left relative overflow-hidden flex items-center gap-4 shadow-sm"
                            >
                                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">🎰</div>
                                <div>
                                    <h3 className="font-bold text-red-600 text-lg">Gambling</h3>
                                    <p className="text-xs text-gray-500">Silakan coba peruntunganmu!</p>
                                </div>
                            </button>

                            <button
                                onClick={() => setStep("INVESTMENT_INPUT")}
                                className="bg-white border-2 border-emerald-100 p-4 rounded-2xl hover:bg-emerald-50 transition-all group text-left relative overflow-hidden flex items-center gap-4 shadow-sm"
                            >
                                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">🌱</div>
                                <div>
                                    <h3 className="font-bold text-emerald-600 text-lg">Investasikan</h3>
                                    <p className="text-xs text-gray-500">Simulasi dan perencanaan investasi</p>
                                </div>
                            </button>
                        </div>

                        <div className="bg-blue-50 p-3 rounded-xl mt-4">
                            <p className="text-[10px] text-blu-blue">
                                "Pilih dengan bijaksana ya Morgan! Jangan sampai kuncinya untung malah buntung."
                            </p>
                        </div>
                    </div>
                );

            case "GAMBLING":
                const isJackpot = slotResult.every(val => val === "7");
                return (
                    <div className="text-center space-y-6 animate-fade-in">
                        <div className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded-full mb-4">
                            <span className="text-xs font-bold text-blu-blue">#bluWISE</span>
                            <button onClick={() => setStep("WELCOME")} className="text-xs text-gray-400">keluar</button>
                        </div>

                        {spinCount === 0 || isSpinning ? (
                            <>
                                <h2 className="text-xl font-bold text-gray-800">Wah, ternyata kamu memilih <span className="text-red-500">gambling</span> ya...</h2>
                                <p className="text-xs text-gray-500">Bukan keputusan yang bijaksana, tapi coba kita lihat hasilnya</p>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl font-bold text-gray-800">Selamat kamu dapat Jackpot <span className="text-emerald-500">Rp 20.000!</span></h2>
                                <p className="text-xs text-gray-500">Coba lagi, siapa tau kamu bisa dapat lebih banyak...</p>
                            </>
                        )}


                        <div className={`bg-gray-800 p-8 rounded-3xl border-4 ${isJackpot ? 'border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.5)]' : 'border-gray-600'} shadow-2xl relative overflow-hidden transition-all duration-500`}>
                            <div className="flex justify-center gap-4 text-6xl font-mono bg-white p-4 rounded-xl text-gray-800 shadow-inner">
                                {slotResult.map((num, i) => (
                                    <span key={i} className={`w-16 text-center transition-all ${isSpinning ? 'blur-sm' : ''} ${isJackpot ? 'text-yellow-600 font-black' : ''}`}>{num}</span>
                                ))}
                            </div>

                            {isJackpot && !isSpinning && (
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-0 left-0 w-full h-full animate-pulse bg-yellow-400/20"></div>
                                    <Sparkles className="absolute top-4 left-4 text-yellow-300 w-8 h-8 animate-ping" />
                                    <Sparkles className="absolute bottom-4 right-4 text-yellow-300 w-8 h-8 animate-ping delay-100" />
                                </div>
                            )}
                        </div>

                        <div className="bg-gray-100 rounded-xl p-3 flex justify-between items-center">
                            <span className="text-sm font-bold text-gray-500">Saldo Token:</span>
                            <span className="font-bold text-gray-800">Rp {balance.toLocaleString()}</span>
                        </div>

                        {spinCount === 1 && !isSpinning && (
                            <div className="space-y-2">
                                <button
                                    onClick={handleSpin}
                                    className="w-full bg-red-500 text-white font-bold py-4 rounded-full shadow-lg hover:bg-red-600 transition-all animate-pulse"
                                >
                                    Pakai 10k untuk main lagi
                                </button>
                                <button disabled className="w-full bg-gray-200 text-gray-400 font-bold py-4 rounded-full cursor-not-allowed">
                                    Tarik dana
                                </button>
                            </div>
                        )}

                        {spinCount === 0 && (
                            <button
                                onClick={handleSpin}
                                disabled={isSpinning || balance < 10000}
                                className="w-full bg-white border-2 border-red-500 text-red-500 font-bold py-4 rounded-full shadow-lg hover:bg-red-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSpinning ? "Memutar..." : "Mainkan"}
                            </button>
                        )}
                    </div>
                );

            case "GAMBLING_RESULT":
                return (
                    <div className="text-center space-y-6 animate-fade-in">
                        <div className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded-full mb-4">
                            <span className="text-xs font-bold text-blu-blue">#bluWISE</span>
                            <button onClick={() => setStep("WELCOME")} className="text-xs text-gray-400">keluar</button>
                        </div>

                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-4xl animate-bounce">😢</div>
                        <h2 className="text-xl font-bold text-gray-800">Maaf Anda belum beruntung...</h2>
                        <p className="text-xs text-gray-600">
                            Yah, saldomu sudah tidak cukup untuk main lagi.
                        </p>

                        <div className="bg-gray-800 p-6 rounded-3xl border-4 border-gray-600 opacity-75 grayscale relative">
                            <div className="flex justify-center gap-4 text-4xl font-mono bg-white p-2 rounded-xl text-gray-800">
                                <span>6</span><span>7</span><span>7</span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-red-600 text-white font-black text-xl px-4 py-1 rotate-12 rounded shadow-lg border-2 border-white">RUGI!</span>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-xl p-3 flex justify-between items-center">
                            <span className="text-sm font-bold text-gray-500">Saldo:</span>
                            <span className="font-bold text-gray-800">Rp {balance.toLocaleString()}</span>
                        </div>

                        <button
                            onClick={() => setStep("INVESTMENT_INPUT")}
                            className="w-full bg-emerald-50 text-emerald-600 font-bold py-4 rounded-full shadow-lg border-2 border-emerald-500 hover:bg-emerald-100 transition-all flex items-center justify-center gap-2"
                        >
                            Cara Lain (Investasi) <ArrowRight size={18} />
                        </button>
                    </div>
                );

            case "INVESTMENT_INPUT":
                return (
                    <div className="space-y-6 animate-fade-in">
                        <div className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded-full">
                            <span className="text-xs font-bold text-blu-blue">#bluWISE</span>
                            <button onClick={() => setStep("WELCOME")} className="text-xs text-gray-400">keluar</button>
                        </div>

                        <div className="text-center">
                            <h2 className="text-xl font-bold text-gray-800">Rekomendasi Rencana</h2>
                            <p className="text-xs text-gray-500">Investasi khusus untukmu!</p>
                        </div>

                        <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                            <p className="text-[10px] text-yellow-700 leading-tight">
                                <strong>Disclaimer:</strong> bersifat saran & tidak harus diikuti. Segala hasil keuntungan / kerugian merupakan tanggung jawab pengguna.
                            </p>
                        </div>

                        <div className="space-y-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-sm font-bold text-blu-blue text-center mb-4">Untuk dapatkan dana<br /><span className="text-lg">Rp 1.000.000,00</span> kamu bisa</h3>

                            <div>
                                <label className="text-xs text-gray-400 block mb-1">Masukan target return investasi kamu</label>
                                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm font-bold text-gray-800 flex justify-between">
                                    <span>Rp 1.000.000,00</span>
                                </div>
                            </div>
                            <div>
                                <label className="text-xs text-gray-400 block mb-1">Masukan jumlah uang yang ingin kamu sisihkan untuk investasi</label>
                                <div className="bg-white border-2 border-blue-100 rounded-xl p-3 text-sm font-bold text-gray-800">Rp 100.000</div>
                            </div>
                            <div>
                                <label className="text-xs text-gray-400 block mb-1">Masukan jangka waktu investasi</label>
                                <div className="bg-white border-2 border-blue-100 rounded-xl p-3 text-sm font-bold text-gray-800 flex justify-between items-center">
                                    <span>&lt; 1 tahun (angka pendek)</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setStep("INVESTMENT_RESULT")}
                            className="w-full bg-blu-blue text-white font-bold py-4 rounded-full shadow-lg hover:bg-blue-600 transition-all mt-2"
                        >
                            Generate
                        </button>

                        <div className="bg-blue-50 p-2 rounded-xl text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <span className="text-lg">💡</span>
                                <span className="text-[10px] font-bold text-blue-800">Jangan investasi dalam 1 instrumen yang sama!</span>
                            </div>
                        </div>
                    </div>
                );

            case "INVESTMENT_RESULT":
                // Pie chart data for "Diversifikasi" visual
                const pieData = [
                    { name: 'Reksadana', value: 400, color: '#3B82F6' },
                    { name: 'Obligasi', value: 300, color: '#10B981' },
                    { name: 'Saham', value: 300, color: '#F59E0B' },
                ];

                return (
                    <div className="space-y-6 animate-fade-in">
                        <div className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded-full">
                            <span className="text-xs font-bold text-blu-blue">#bluWISE</span>
                            <button onClick={() => setStep("WELCOME")} className="text-xs text-gray-400">keluar</button>
                        </div>

                        <div className="text-center">
                            <h2 className="text-xl font-bold text-gray-800">Rekomendasi Rencana</h2>
                            <p className="text-xs text-gray-500">Investasi khusus untukmu!</p>
                        </div>

                        <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                            <p className="text-[10px] text-yellow-700 leading-tight">
                                <strong>Disclaimer:</strong> bersifat saran & tidak harus diikuti. Segala hasil keuntungan / kerugian merupakan tanggung jawab pengguna.
                            </p>
                        </div>

                        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
                            <h3 className="text-sm font-bold text-gray-600">Untuk dapatkan dana <br /><span className="text-emerald-500 text-lg">Rp 1.000.000,00</span> kamu bisa</h3>
                            <div className="py-2 border-t border-b border-gray-100">
                                <p className="text-xs text-gray-500 mb-2">Investasikan pada instrumen berikut</p>

                                <div className="h-40 w-full flex items-center justify-center relative">
                                    {/* Simple Pie Chart Representation */}
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={pieData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={40}
                                                outerRadius={60}
                                                paddingAngle={5}
                                                dataKey="value"
                                            >
                                                {pieData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="text-[10px] font-bold text-gray-400">Portofolio</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-3 rounded-xl">
                                <p className="text-xs text-gray-700">Kamu bisa mendapatkan return <span className="font-bold">Rp 1.090.000,00</span> dalam waktu <span className="font-bold">10 bulan</span></p>
                            </div>

                            <div className="flex gap-2">
                                <button className="flex-1 bg-gray-100 text-gray-600 text-xs font-bold py-2 rounded-lg">Custom Instrumen</button>
                                <button className="flex-1 bg-blue-100 text-blu-blue text-xs font-bold py-2 rounded-lg">Pelajari Instrumen</button>
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="w-full bg-blu-blue text-white font-bold py-4 rounded-full shadow-lg hover:bg-blue-600 transition-all"
                        >
                            Mulai investasi dengan blu
                        </button>

                        <div className="bg-emerald-50 p-2 rounded-xl text-center">
                            <p className="text-[10px] font-bold text-emerald-700">Investasi fokus pada pertumbuhan jangka panjang, bukan keuntungan instan.</p>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
            <div className="bg-white rounded-[2.5rem] w-full max-w-[360px] min-h-[600px] max-h-[90vh] overflow-y-auto p-6 relative z-10 shadow-3xl flex flex-col no-scrollbar">
                {renderContent()}
            </div>
        </div>
    );
}

// Add these missing imports to the top of the file if they are not present
import { PieChart, Pie, Cell } from "recharts";
import { Sparkles } from "lucide-react";
