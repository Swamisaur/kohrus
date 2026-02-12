import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function RoyaltyDistributionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <div className="container mx-auto px-6 lg:px-12 py-10">
        <h1 className="text-2xl lg:text-3xl font-bold mb-8">Royalty Distribution</h1>
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground">Manage royalty distribution to investors...</p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
