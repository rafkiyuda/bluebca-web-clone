import { AccountCard } from "@/components/home/AccountCard";
import { FavoriteTransactions } from "@/components/home/FavoriteTransactions";
import { ProfileHeader } from "@/components/home/ProfileHeader";
import { PromoSection } from "@/components/home/PromoSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 pt-32 pb-32 relative bg-white">
      {/* Adjusted padding top to clear the fixed header */}
      <ProfileHeader />
      <AccountCard />
      <PromoSection />
      <FavoriteTransactions />
    </main>
  );
}
