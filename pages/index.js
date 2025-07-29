import AssetCard from "@/components/AssetCard";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import TradeBox from "@/components/TradeBox";

export default function Home() {
  return (
    <div className="flex flex-col max-w-md mx-auto min-h-screen bg-[#fcfcfc]">
      <main className=" flex-grow">
        <Header />
        <AssetCard />
        <TradeBox />
      </main>
      <footer>
        <BottomNav />
      </footer>
    </div>
  );
}
