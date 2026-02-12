import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, IndianRupee } from "lucide-react";

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function EditPortfolioListingPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <Navigation />
      <div className="flex-1 flex items-center justify-center py-10 px-6 lg:px-12">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <div className="flex items-center gap-4 mb-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/owner/portfolio">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Edit Portfolio Listing</h1>
                <p className="text-muted-foreground">Update listing details</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="song">Song/Album Title</Label>
              <Input id="song" defaultValue="Midnight Sessions" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price per Share (₹)</Label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="price" type="number" defaultValue="50" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="shares">Total Shares</Label>
                <Input id="shares" type="number" defaultValue="1000" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/owner/portfolio">Cancel</Link>
              </Button>
              <Button className="w-full sm:w-auto gap-2" asChild>
                <Link href="/owner/portfolio">
                  Save Changes
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
