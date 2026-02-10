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

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setStep("WELCOME");
            setBalance(20000);
            setSlotResult(["?", "?", "?"]);
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
            // RIGGED: Always lose (e.g., 6-7-7 or similar non-winning combo)
            setSlotResult(["6", "7", "7"]);
            setStep("GAMBLING_RESULT");
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
                        <h2 className="text-2xl font-bold text-blu-blue">Halo Morgan!</h2>
                        <p className="text-gray-600">
                            Selamat! Kamu bisa mendapatkan<br />
                            <span className="text-2xl font-bold text-emerald-500">Rp 1.000.000,00</span>
                        </p>
                        <div className="relative h-48 w-full bg-blue-100 rounded-2xl overflow-hidden flex items-center justify-center">
                            <Coins className="w-24 h-24 text-blue-300 animate-bounce" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-200/50 to-transparent"></div>
                        </div>
                        <button
                            onClick={() => setStep("CHOICE")}
                            className="w-full bg-blu-blue text-white font-bold py-4 rounded-full shadow-lg hover:bg-blue-600 transition-all active:scale-95"
                        >
                            Dapatkan Dana
                        </button>
                    </div>
                );

            case "CHOICE":
                return (
                    <div className="text-center space-y-6 animate-fade-in">
                        <h2 className="text-xl font-bold text-gray-800">Pilih Cara Mendapatkan Dana</h2>
                        <p className="text-sm text-gray-500">Silakan pilih cara untuk mendapatkan dana itu!</p>

                        <div className="grid grid-cols-1 gap-4 mt-8">
                            <button
                                onClick={() => setStep("GAMBLING")}
                                className="bg-red-50 border-2 border-red-100 p-6 rounded-2xl hover:bg-red-100 transition-all group text-left relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Zap size={64} className="text-red-500" />
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center text-2xl">🎰</div>
                                    <div>
                                        <h3 className="font-bold text-red-700">Gambling</h3>
                                        <p className="text-xs text-red-500">Silakan coba peruntunganmu!</p>
                                    </div>
                                </div>
                            </button>

                            <button
                                onClick={() => setStep("INVESTMENT_INPUT")}
                                className="bg-emerald-50 border-2 border-emerald-100 p-6 rounded-2xl hover:bg-emerald-100 transition-all group text-left relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <TrendingUp size={64} className="text-emerald-500" />
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-2xl">🌱</div>
                                    <div>
                                        <h3 className="font-bold text-emerald-700">Investasikan</h3>
                                        <p className="text-xs text-emerald-500">Simulasi dan perencanaan investasi</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                );

            case "GAMBLING":
                return (
                    <div className="text-center space-y-6 animate-fade-in">
                        <h2 className="text-xl font-bold text-gray-800">#bluWISE</h2>
                        <p className="text-sm text-gray-500">Wah, ternyata kamu memilih <span className="font-bold text-red-500">gambling</span> ya...</p>

                        <div className="bg-gray-800 p-8 rounded-3xl border-4 border-yellow-400 shadow-2xl relative overflow-hidden">
                            <div className="flex justify-center gap-4 text-6xl font-mono bg-white p-4 rounded-xl text-gray-800 shadow-inner">
                                {slotResult.map((num, i) => (
                                    <span key={i} className="w-16 text-center">{num}</span>
                                ))}
                            </div>
                            {/* Decorative lights */}
                            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-yellow-200 animate-ping"></div>
                            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-yellow-200 animate-ping delay-75"></div>
                        </div>

                        <div className="bg-gray-100 rounded-xl p-3 flex justify-between items-center">
                            <span className="text-sm font-bold text-gray-500">Saldo Token:</span>
                            <span className="font-bold text-gray-800">Rp {balance.toLocaleString()}</span>
                        </div>

                        <button
                            onClick={handleSpin}
                            disabled={isSpinning || balance < 10000}
                            className="w-full bg-red-500 text-white font-bold py-4 rounded-full shadow-lg hover:bg-red-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSpinning ? "Memutar..." : "Mainkan (Rp 10.000)"}
                        </button>
                    </div>
                );

            case "GAMBLING_RESULT":
                return (
                    <div className="text-center space-y-6 animate-fade-in">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-4xl">😢</div>
                        <h2 className="text-xl font-bold text-gray-800">Maaf Anda belum beruntung...</h2>
                        <p className="text-sm text-gray-600">
                            Yah, saldomu sudah habis untuk main lagi. Ini peringatan bahwa gambling itu <span className="font-bold text-red-500">berisiko tinggi</span>!
                        </p>

                        <div className="bg-gray-800 p-6 rounded-3xl border-4 border-gray-600 opacity-75 grayscale">
                            <div className="flex justify-center gap-4 text-4xl font-mono bg-white p-2 rounded-xl text-gray-800">
                                <span>6</span><span>7</span><span>7</span>
                            </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                            <p className="text-xs text-red-600 font-semibold">"Jangan pertaruhkan masa depanmu pada keberuntungan semata."</p>
                        </div>

                        <button
                            onClick={() => setStep("INVESTMENT_INPUT")}
                            className="w-full bg-emerald-500 text-white font-bold py-4 rounded-full shadow-lg hover:bg-emerald-600 transition-all flex items-center justify-center gap-2"
                        >
                            Coba Cara Lain (Investasi) <ArrowRight size={18} />
                        </button>
                    </div>
                );

            case "INVESTMENT_INPUT":
                return (
                    <div className="space-y-6 animate-fade-in">
                        <div className="text-center">
                            <h2 className="text-xl font-bold text-gray-800">Perencanaan Investasi</h2>
                            <p className="text-xs text-gray-500">Analisis profil risiko kamu dulu yuk!</p>
                        </div>

                        <div className="space-y-4">
                            <label className="text-sm font-bold text-gray-700">Pilih Profil Risiko</label>
                            <div className="grid grid-cols-3 gap-2">
                                {(["Conservative", "Moderate", "Aggressive"] as const).map((r) => (
                                    <button
                                        key={r}
                                        onClick={() => setRiskProfile(r)}
                                        className={`p-2 rounded-xl border-2 text-xs font-bold transition-all ${riskProfile === r
                                            ? "border-blu-blue bg-blue-50 text-blu-blue"
                                            : "border-gray-100 text-gray-400 hover:border-blue-100"
                                            }`}
                                    >
                                        {r}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-xs text-gray-500 block mb-1">Target Dana</label>
                                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm font-bold text-gray-800">Rp 1.000.000</div>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 block mb-1">Modal Awal</label>
                                <div className="bg-white border border-gray-200 rounded-xl p-3 text-sm font-bold text-gray-800">Rp 100.000</div>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 block mb-1">Jangka Waktu</label>
                                <div className="bg-white border border-gray-200 rounded-xl p-3 text-sm font-bold text-gray-800">12 Bulan</div>
                            </div>
                        </div>

                        <button
                            onClick={() => setStep("INVESTMENT_RESULT")}
                            className="w-full bg-blu-blue text-white font-bold py-4 rounded-full shadow-lg hover:bg-blue-600 transition-all mt-4"
                        >
                            Generate Rencana
                        </button>
                    </div>
                );

            case "INVESTMENT_RESULT":
                const data = [
                    { name: 'B1', value: 100000 },
                    { name: 'B3', value: 350000 },
                    { name: 'B6', value: 650000 },
                    { name: 'B9', value: 850000 },
                    { name: 'B12', value: 1100000 },
                ];

                return (
                    <div className="space-y-6 animate-fade-in">
                        <div className="text-center">
                            <h2 className="text-xl font-bold text-gray-800">Rencana Investasimu</h2>
                            <p className="text-xs text-gray-500">Estimasi pertumbuhan asetmu</p>
                        </div>

                        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm h-48">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data}>
                                    <XAxis dataKey="name" hide />
                                    <YAxis hide />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="value" stroke="#0052CC" strokeWidth={3} dot={{ r: 4, fill: "#0052CC" }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-2xl">
                            <div className="flex items-start gap-3">
                                <div className="bg-blue-100 p-2 rounded-full text-blu-blue">
                                    <TrendingUp size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">Potensi Return {riskProfile}!</h4>
                                    <p className="text-xs text-gray-600 mt-1">
                                        Dengan strategi {riskProfile.toLowerCase()}, kamu bisa mencapai Rp 1.1jt dalam 12 bulan. {riskProfile === "Aggressive" ? "Risiko tinggi tapi potensi cuan tinggi!" : "Aman dan stabil."}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="w-full bg-blu-blue text-white font-bold py-4 rounded-full shadow-lg hover:bg-blue-600 transition-all"
                        >
                            Mulai Investasi Sekarang
                        </button>
                    </div>
                );
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

            <div className="bg-white rounded-[2.5rem] w-full max-w-[360px] min-h-[500px] p-8 relative z-10 shadow-3xl flex flex-col justify-center">
                <button onClick={onClose} className="absolute top-6 right-6 text-gray-300 hover:text-gray-500">
                    <X size={24} />
                </button>

                {renderContent()}
            </div>
        </div>
    );
}
