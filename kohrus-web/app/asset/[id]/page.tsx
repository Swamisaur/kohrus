import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Music } from "lucide-react";

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
}

export default function AssetDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <div className="container mx-auto px-6 lg:px-12 py-10">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/browse">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Browse
          </Link>
        </Button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <div className="h-96 bg-gradient-to-br from-purple-400 to-pink-400" />
          </Card>
          <div className="space-y-6 min-w-0">
            <div className="min-w-0">
              <h1 className="text-3xl font-bold mb-2 break-words">Midnight Sessions</h1>
              <p className="text-muted-foreground truncate">Artist Name</p>
            </div>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price per Share</span>
                  <span className="font-semibold">₹50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Available Shares</span>
                  <span className="font-semibold">1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Valuation</span>
                  <span className="font-semibold">₹50,000</span>
                </div>
              </CardContent>
            </Card>
            <Button asChild className="w-full" size="lg">
              <Link href="/checkout">
                Invest Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
