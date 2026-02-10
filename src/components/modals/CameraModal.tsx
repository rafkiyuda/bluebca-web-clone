"use client";

import { X, Flashlight } from "lucide-react"; // Assuming Flashlight icon exists, if not will use Zap or similar
import { useEffect, useRef, useState } from "react";

interface CameraModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CameraModal({ isOpen, onClose }: CameraModalProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        let stream: MediaStream | null = null;

        const startCamera = async () => {
            try {
                stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: "environment" } // Prefer back camera
                });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    setHasPermission(true);
                }
            } catch (err) {
                console.error("Error accessing camera:", err);
                setHasPermission(false);
            }
        };

        startCamera();

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
            {/* Header / Controls */}
            <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6 pt-12">
                <button onClick={onClose} className="p-2 bg-black/40 backdrop-blur-md rounded-full text-white">
                    <X size={24} />
                </button>
                <div className="text-white font-bold text-lg drop-shadow-md">Scan QRIS</div>
                <button className="p-2 bg-black/40 backdrop-blur-md rounded-full text-white opacity-50 cursor-not-allowed">
                    {/* Placeholder for Flash toggle */}
                    <div className="w-6 h-6 flex items-center justify-center">⚡</div>
                </button>
            </div>

            {/* Camera View */}
            <div className="flex-1 relative flex items-center justify-center bg-gray-900">
                {hasPermission === false ? (
                    <div className="text-white text-center p-6">
                        <p className="mb-2 font-bold">Izin Kamera Ditolak</p>
                        <p className="text-sm opacity-80">Mohon izinkan akses kamera untuk menggunakan fitur QRIS.</p>
                    </div>
                ) : (
                    <>
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Scan Frame Overlay */}
                        <div className="relative w-64 h-64 border-2 border-white/50 rounded-3xl z-10 flex items-center justify-center">
                            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-blu-primary rounded-tl-xl -mt-1 -ml-1"></div>
                            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-blu-primary rounded-tr-xl -mt-1 -mr-1"></div>
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-blu-primary rounded-bl-xl -mb-1 -ml-1"></div>
                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-blu-primary rounded-br-xl -mb-1 -mr-1"></div>

                            {/* Scanning Line Animation */}
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-blu-primary/80 shadow-[0_0_15px_rgba(0,255,255,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
                        </div>

                        <p className="absolute bottom-32 text-white/80 text-sm font-medium z-10 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                            Arahkan kamera ke kode QR
                        </p>
                    </>
                )}
            </div>

            {/* Bottom Actions (if any) */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-center pb-12 bg-gradient-to-t from-black/80 to-transparent">
                <button className="text-white font-medium text-sm flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                    <span className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                        🖼️
                    </span>
                    <span>Upload QR</span>
                </button>
            </div>
        </div>
    );
}

// Add keyframes for scan animation to tailwind config or global css if needed, 
// but standard 'animate-pulse' or similar might be enough for MVP, 
// or we can add style tag here
