import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Inbox } from "lucide-react";

export default function BrowsePage() {
  const assets = [
    { id: 1, name: "Midnight Sessions", artist: "Artist Name", price: "₹50", shares: "1,000" },
    { id: 2, name: "Summer Vibes", artist: "Artist Name", price: "₹75", shares: "500" },
    { id: 3, name: "Urban Dreams", artist: "Artist Name", price: "₹100", shares: "2,000" },
    { id: 4, name: "Electric Nights", artist: "Artist Name", price: "₹60", shares: "1,500" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10">
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">Browse Assets</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search songs, artists..." className="pl-10 w-full max-w-md" />
          </div>
        </div>
        {assets.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <Inbox className="h-12 w-12 text-muted-foreground mb-4" aria-hidden />
            <h2 className="text-lg font-semibold mb-2">No assets yet</h2>
            <p className="text-muted-foreground max-w-sm mb-6">
              There are no music assets available to invest in right now. Check back later.
            </p>
            <Button asChild>
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((asset) => (
            <Card key={asset.id} className="cursor-pointer hover:shadow-lg transition-shadow active:scale-[0.99] touch-manipulation">
              <Link href={`/asset/${asset.id}`}>
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400" />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1 truncate">{asset.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2 truncate">{asset.artist}</p>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-sm font-medium truncate">{asset.price}/share</span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">{asset.shares} shares</span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
