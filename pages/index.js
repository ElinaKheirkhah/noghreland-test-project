import AssetCard from "@/components/AssetCard";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import TradeBox from "@/components/TradeBox";

export default function Home() {
  return (
    <div className="flex flex-col max-w-md mx-auto h-screen bg-[#fcfcfc]">
      <header className="h-18 shrink-0">
        <Header />
      </header>
      <main className="flex-1 overflow-y-auto">
        <AssetCard />
        <TradeBox />
      </main>
      <footer className="h-18 shrink-0">
        <BottomNav />
      </footer>
    </div>
  );
}
