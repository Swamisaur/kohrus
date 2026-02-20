import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Plus, 
  Edit, 
  Eye,
  CheckCircle,
  XCircle,
  Inbox
} from "lucide-react";

export default function PortfolioManagementPage() {
  const listings = [
    {
      id: 1,
      artist: "Artist Name 1",
      song: "Midnight Sessions",
      price: 50,
      shares: 1000,
      status: "published",
      valuation: 50000
    },
    {
      id: 2,
      artist: "Artist Name 2",
      song: "Summer Vibes",
      price: 75,
      shares: 500,
      status: "draft",
      valuation: 37500
    },
    {
      id: 3,
      artist: "Artist Name 3",
      song: "Urban Dreams",
      price: 100,
      shares: 2000,
      status: "published",
      valuation: 200000
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/owner/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">Portfolio Management</h1>
              <p className="text-muted-foreground">Create and manage listings available for buyers</p>
            </div>
            <Button asChild>
              <Link href="/owner/portfolio/new">
                <Plus className="mr-2 h-4 w-4" />
                Create New Listing
              </Link>
            </Button>
          </div>
        </div>

        {/* Listings Grid */}
        {listings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center border border-dashed border-border rounded-xl bg-muted/30">
            <Inbox className="h-12 w-12 text-muted-foreground mb-4" aria-hidden />
            <h2 className="text-lg font-semibold mb-2">No listings yet</h2>
            <p className="text-muted-foreground max-w-sm mb-6">
              Create your first listing to make music assets available for investors.
            </p>
            <Button asChild>
              <Link href="/owner/portfolio/new">
                <Plus className="mr-2 h-4 w-4" />
                Create New Listing
              </Link>
            </Button>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <Card key={listing.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-4" />
                  <h3 className="font-semibold mb-1 truncate">{listing.song}</h3>
                  <p className="text-sm text-muted-foreground mb-3 truncate">{listing.artist}</p>
                  <div className="flex items-center gap-2 mb-2">
                    {listing.status === "published" ? (
                      <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-medium flex items-center gap-1 whitespace-nowrap">
                        <CheckCircle className="h-3 w-3 flex-shrink-0" />
                        Published
                      </span>
                    ) : (
                      <span className="px-2 py-1 rounded bg-amber-100 text-amber-700 text-xs font-medium flex items-center gap-1 whitespace-nowrap">
                        <XCircle className="h-3 w-3 flex-shrink-0" />
                        Draft
                      </span>
                    )}
                  </div>
                </div>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price per Share:</span>
                    <span className="font-medium">₹{listing.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Shares:</span>
                    <span className="font-medium">{listing.shares.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Valuation:</span>
                    <span className="font-medium">₹{listing.valuation.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link href={`/owner/portfolio/${listing.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link href={`/asset/${listing.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
