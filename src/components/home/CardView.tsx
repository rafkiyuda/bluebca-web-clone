import { Plane } from "lucide-react";

export function CardView() {
    return (
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide snap-x">
            {/* Card 1: Garuda x bluDebit Card */}
            <div className="snap-center w-full min-w-[300px] h-[400px] bg-[#005E9C] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden text-white flex-shrink-0">
                {/* Background Design */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#007CC3] rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>

                <div className="z-10">
                    <h3 className="text-xl font-bold mb-2">Garuda x bluDebit Card</h3>
                    <p className="text-sm opacity-90 leading-relaxed mb-4">
                        Garuda x bluDebit Card hadir untukmu. Dapatkan benefit untuk travelers! ✈️
                    </p>

                    <button className="bg-white text-[#005E9C] font-bold py-2.5 px-6 rounded-full text-sm inline-block shadow-sm">
                        Request
                    </button>
                </div>

                <div className="flex justify-end mt-4">
                    {/* Placeholder for Card Image - Using a CSS representation or a placeholder image */}
                    <div className="w-32 h-48 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl rounded-tr-3xl shadow-lg relative border border-white/20 transform rotate-[-5deg] translate-y-4 translate-x-2">
                        <div className="absolute top-4 left-4">
                            <div className="w-8 h-5 bg-yellow-500/80 rounded"></div>
                        </div>
                        <div className="absolute bottom-4 right-4 text-xs font-mono tracking-widest opacity-80">
                            blu
                        </div>
                        <div className="absolute bottom-4 left-4">
                            <div className="flex -space-x-1">
                                <div className="w-6 h-6 rounded-full bg-red-500 opacity-80"></div>
                                <div className="w-6 h-6 rounded-full bg-yellow-500 opacity-80"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 2: Request bluDebit Card */}
            <div className="snap-center w-full min-w-[300px] h-[400px] bg-[#1A1F2E] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden text-white flex-shrink-0">
                <div className="z-10">
                    <h3 className="text-xl font-bold mb-2">Request bluDebit Card</h3>
                    <p className="text-sm opacity-90 leading-relaxed mb-4">
                        Kartu debit virtual & fisik dari blu. Bikin transaksi online & offline jadi lebih mudah!
                    </p>

                    <button className="bg-white text-[#1A1F2E] font-bold py-2.5 px-6 rounded-full text-sm inline-block shadow-sm">
                        Aktifkan
                    </button>
                </div>
            </div>
        </div>
    );
}
