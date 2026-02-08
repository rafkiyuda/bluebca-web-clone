import { ChevronRight } from "lucide-react";

export function PromoSection() {
    const promos = [
        {
            id: 1,
            bg: "bg-[#4B0082]", // Indigo/Purple
            title: "bluExtraCash, pinjaman hingga 50 juta",
            icon: "💰",
            textColor: "text-white",
        },
        {
            id: 2,
            bg: "bg-blu-primary", // Cyan
            title: "Cek Financial Insight kamu di bulan Januari",
            icon: "📊",
            textColor: "text-white",
        },
        {
            id: 3,
            bg: "bg-blu-blue", // Blue
            title: "Lihat Rate Deposito Terbaru",
            icon: "percent",
            textColor: "text-white",
        }
    ];

    return (
        <div className="w-full mt-8">
            <div className="flex items-center gap-2 mb-4">
                <h2 className="font-bold text-gray-700">SPESIAL UNTUKMU ✨</h2>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
                {promos.map((promo) => (
                    <div
                        key={promo.id}
                        className={`flex-shrink-0 w-40 h-48 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden ${promo.bg}`}
                    >
                        {/* Decorative circles/elements could go here */}
                        <div className="text-2xl">{promo.icon}</div>
                        <h3 className={`font-bold text-sm leading-tight ${promo.textColor}`}>
                            {promo.title}
                        </h3>
                        <div className="absolute bottom-2 right-2 opacity-20">
                            <div className="w-16 h-16 bg-white rounded-full blur-xl"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
