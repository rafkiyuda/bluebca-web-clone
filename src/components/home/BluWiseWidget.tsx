"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { BluWiseModal } from "../modals/BluWiseModal";

export function BluWiseWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-24 right-4 z-40 animate-bounce-slow cursor-pointer group" onClick={() => setIsOpen(true)}>
                <div className="bg-white p-3 rounded-full shadow-xl border-2 border-blue-100 relative group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🦉</span>
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm animate-pulse">
                        NEW
                    </div>
                </div>
                <div className="bg-blu-blue/90 backdrop-blur text-white text-[10px] font-bold py-1 px-3 rounded-full shadow-lg absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Coba bluWISE!
                </div>
            </div>

            <BluWiseModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
