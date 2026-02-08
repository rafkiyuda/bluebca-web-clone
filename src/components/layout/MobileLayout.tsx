import React from "react";

interface MobileLayoutProps {
    children: React.ReactNode;
}

export function MobileLayout({ children }: MobileLayoutProps) {
    return (
        <div className="min-h-screen w-full bg-[#FAFAFA] flex justify-center">
            <div className="w-full max-w-[480px] min-h-screen bg-blu-secondary shadow-xl relative overflow-x-hidden">
                {children}
            </div>
        </div>
    );
}
