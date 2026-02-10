import { ArrowRight, Smartphone, Calendar, PartyPopper } from "lucide-react";

export function PromoBanner() {
    return (
        <div className="w-full mt-8 mb-4">
            <div className="flex items-center gap-2 mb-4">
                <h2 className="font-bold text-gray-700">PROMO 🎉</h2>
            </div>

            <div className="w-full h-40 rounded-2xl overflow-hidden relative bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md">
                {/* Background Pattern/Design simulation */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="flex h-full relative z-10">
                    {/* Left Content */}
                    <div className="w-3/5 p-4 flex flex-col justify-center text-white">
                        <p className="text-[10px] uppercase font-bold tracking-wider mb-1 opacity-90">Promo Resolusi 2026</p>
                        <h3 className="font-extrabold text-xl leading-none mb-1">Total Rewards</h3>
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-sm font-medium">Lebih dari</span>
                            <span className="text-3xl font-black text-yellow-300 drop-shadow-sm">Rp 1,1 JUTA</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-[10px] font-medium leading-tight inline-block">
                            Ikuti juga misi naik level dan dapatkan voucher QRIS!
                        </div>
                    </div>

                    {/* Right Content (Illustration placeholder) */}
                    <div className="w-2/5 flex items-end justify-center relative">
                        {/* Simulated Character/Phone Illustration */}
                        <div className="relative w-20 h-24 bg-white rounded-t-xl shadow-lg border-x-4 border-t-4 border-gray-800 flex flex-col items-center justify-center -mb-2 z-20">
                            <span className="text-blue-500 font-bold text-lg">blu</span>
                        </div>
                        <div className="absolute top-4 right-4 animate-bounce">
                            <PartyPopper className="text-yellow-300 w-8 h-8" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
