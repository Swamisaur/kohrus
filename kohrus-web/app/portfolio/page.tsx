import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <div className="container mx-auto px-6 lg:px-12 py-10">
        <h1 className="text-2xl lg:text-3xl font-bold mb-8">Portfolio Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-2">Total Investment</p>
              <p className="text-2xl font-bold">₹5,000</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-2">Current Value</p>
              <p className="text-2xl font-bold">₹5,500</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-2">Total Returns</p>
              <p className="text-2xl font-bold text-green-600">+10%</p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Assets</h2>
            <Button variant="outline" asChild>
              <Link href="/browse">
                Browse More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">Midnight Sessions</h3>
                  <p className="text-sm text-muted-foreground truncate">10 shares</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-semibold whitespace-nowrap">₹500</p>
                  <p className="text-sm text-green-600 whitespace-nowrap">+₹50</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
