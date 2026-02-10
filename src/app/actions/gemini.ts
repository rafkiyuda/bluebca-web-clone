"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

export async function generateFinancialAdvice(target: string, amount: number) {
    if (!apiKey) {
        return "Maaf, API Key Gemini belum dikonfigurasi.";
    }

    const dummyExpenseData = `
    - Makanan & Minuman: Rp 1.500.000 / bulan
    - Transportasi: Rp 800.000 / bulan
    - Top Up E-Wallet: Rp 500.000 / bulan
    - Belanja: Rp 1.800.000 / bulan
    - Total Pengeluaran: Rp 4.600.000 / bulan
    - Total Pemasukan: Rp 5.500.000 / bulan
    - Sisa Cashflow: Rp 900.000 / bulan
    `;

    const prompt = `
    Kamu adalah asisten finansial dari aplikasi bank digital "blu". Nama kamu adalah "Sarah".
    Tugasmu adalah memberikan saran keuangan kepada pengguna yang ingin mencapai "Target Impian" mereka.
    
    Data Pengguna:
    - Target Impian: ${target}
    - Biaya Target: Rp ${amount.toLocaleString('id-ID')}
    - Profil Pengeluaran Bulanan (Dummy Data):
      ${dummyExpenseData}
    
    Berikan saran yang spesifik, ramah, dan memotivasi.
    Sebutkan berapa lama kira-kira target akan tercapai dengan kondisi saat ini.
    Berikan rekomendasi di kategori pengeluaran mana mereka bisa berhemat (misal: Makanan atau Belanja).
    Gunakan gaya bahasa santai tapi profesional, seperti teman yang pintar mengatur keuangan.
    
    Format jawaban:
    "Halo, [Saran Keuangan]"
    Jangan gunakan markdown bold (**text**) terlalu banyak, cukup highlight angka penting saja.
    `;

    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(prompt);
        return result.response.text();
    } catch (error: any) {
        console.error("Error generating advice:", error);
        return `Error: ${error.message || JSON.stringify(error)}`;
    }
}
