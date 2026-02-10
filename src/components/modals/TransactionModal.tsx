"use client";

import {
    X,
    ArrowRightLeft,
    Receipt,
    Wallet,
    ScanLine,
    Banknote,
    ArrowDownToLine,
    MonitorSmartphone,
    Gift,
    CreditCard,
    HandCoins,
    ChevronRight,
    ShoppingCart
} from "lucide-react";

interface TransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function TransactionModal({ isOpen, onClose }: TransactionModalProps) {
    if (!isOpen) return null;

    const menus = [
        { name: "Transfer", icon: <ArrowRightLeft size={24} />, bg: "bg-blu-blue", color: "text-white" },
        { name: "Bayar/Beli", icon: <Receipt size={24} />, bg: "bg-blu-blue", color: "text-white", badge: "New", badgeColor: "bg-pink-500" },
        { name: "E-Wallet", icon: <Wallet size={24} />, bg: "bg-blu-blue", color: "text-white" },
        { name: "QRIS", icon: <ScanLine size={32} />, bg: "bg-blu-primary", color: "text-white" }, // QRIS is usually prominent
        { name: "Tarik Tunai", icon: <Banknote size={24} />, bg: "bg-blu-blue", color: "text-white" },
        { name: "Setor Tunai", icon: <ArrowDownToLine size={24} />, bg: "bg-blu-blue", color: "text-white" },
        { name: "BCA Virtual Account", icon: <MonitorSmartphone size={24} />, bg: "bg-blu-primary", color: "text-white" }, // Using blu-primary for variety
        { name: "bluGift", icon: <Gift size={24} />, bg: "bg-blu-blue", color: "text-white" },
        { name: "Flazz/ Uang Elektronik", icon: <CreditCard size={24} />, bg: "bg-blu-blue", color: "text-white", badge: "New", badgeColor: "bg-pink-500" },
        { name: "Tagih Dana", icon: <HandCoins size={24} />, bg: "bg-blu-blue", color: "text-white", badge: "New", badgeColor: "bg-pink-500" },
    ];

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-sm rounded-[2.5rem] p-8 animate-scale-up flex flex-col items-center max-h-[90vh] overflow-y-auto no-scrollbar">

                {/* Drag Handle (Visual Only) */}
                <div className="w-12 h-1.5 bg-gray-200 rounded-full mb-6 absolute top-3"></div>

                {/* Empty Transaction Card */}
                <div className="w-full bg-white border border-gray-100 shadow-lg rounded-2xl p-4 mb-8 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <ShoppingCart size={24} className="text-[#003857]" />
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-blu-primary rounded-full flex items-center justify-center text-[10px] text-white font-bold border border-white">
                                -
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Belum ada transaksi</p>
                            <p className="font-bold text-gray-800">Total: Rp 0,00</p>
                        </div>
                    </div>
                    <ChevronRight size={20} className="text-[#003857]" />
                </div>

                {/* Grid Menu */}
                <div className="grid grid-cols-3 gap-y-8 gap-x-4 w-full mb-12">
                    {menus.map((menu, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 cursor-pointer group">
                            <div className="relative">
                                <div className={`w-14 h-14 rounded-full ${menu.bg} ${menu.color} flex items-center justify-center shadow-lg shadow-blue-100 group-hover:scale-105 transition-transform`}>
                                    {menu.icon}
                                </div>
                                {menu.badge && (
                                    <div className={`absolute -bottom-2 -right-1 ${menu.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white`}>
                                        {menu.badge}
                                    </div>
                                )}
                            </div>
                            <span className="text-xs text-center text-gray-600 font-medium leading-tight max-w-[80px]">
                                {menu.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="bg-white border border-gray-100 shadow-md p-4 rounded-full hover:bg-gray-50 transition-colors"
                >
                    <X size={24} className="text-[#003857]" />
                </button>
            </div>
        </div>
    );
}
