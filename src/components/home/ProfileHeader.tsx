"use client";

import { Bell, Headset, Star } from "lucide-react";

export function ProfileHeader() {
    return (
        <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blu-primary flex items-center justify-center text-white font-bold text-lg">
                    DT
                </div>
                <div className="bg-blu-gray px-3 py-1.5 rounded-full flex items-center gap-2">
                    <div className="bg-blu-primary p-0.5 rounded-full">
                        <Star size={12} className="text-white bg-blu-primary" fill="currentColor" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">bluNewbie</span>
                </div>
            </div>
            <div className="flex gap-4">
                <button
                    onClick={() => alert("Fitur Chat haloblu akan segera hadir!")}
                    className="p-2 rounded-full hover:bg-gray-100 relative"
                >
                    <Headset size={24} className="text-gray-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 relative">
                    <Bell size={24} className="text-gray-600" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>
            </div>
        </div>
    );
}
