import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  ArrowLeft, 
  Plus,
  Eye
} from "lucide-react";

export default function ApprovedArtistsPage() {
  const artists = [
    {
      id: 1,
      name: "Artist Name 1",
      email: "artist1@example.com",
      status: "Ready for Portfolio",
      songs: 5,
      approvedDate: "2 days ago",
      setupProgress: "100%"
    },
    {
      id: 2,
      name: "Artist Name 2",
      email: "artist2@example.com",
      status: "Setup in Progress",
      songs: 3,
      approvedDate: "5 days ago",
      setupProgress: "60%"
    },
    {
      id: 3,
      name: "Artist Name 3",
      email: "artist3@example.com",
      status: "Published",
      songs: 8,
      approvedDate: "1 week ago",
      setupProgress: "100%"
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
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">Approved Artists</h1>
              <p className="text-muted-foreground">Manage approved artists and their setup progress</p>
            </div>
            <Button asChild>
              <Link href="/owner/portfolio">
                <Plus className="mr-2 h-4 w-4" />
                Create Portfolio Listing
              </Link>
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search artists..." className="pl-10 max-w-md" />
          </div>
        </div>

        {/* Artists List */}
        <div className="space-y-4">
          {artists.map((artist) => (
            <Card key={artist.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3 gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold mb-1 truncate">{artist.name}</h3>
                        <p className="text-sm text-muted-foreground truncate">{artist.email}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 whitespace-nowrap ${
                        artist.status === "Published" ? "bg-green-100 text-green-700" :
                        artist.status === "Ready for Portfolio" ? "bg-blue-100 text-blue-700" :
                        "bg-amber-100 text-amber-700"
                      }`}>
                        {artist.status}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div className="min-w-0">
                        <span className="text-muted-foreground">Songs:</span>
                        <span className="ml-2 font-medium">{artist.songs}</span>
                      </div>
                      <div className="min-w-0">
                        <span className="text-muted-foreground">Setup Progress:</span>
                        <span className="ml-2 font-medium">{artist.setupProgress}</span>
                      </div>
                      <div className="min-w-0">
                        <span className="text-muted-foreground">Approved:</span>
                        <span className="ml-2 font-medium">{artist.approvedDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/owner/artists/${artist.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Link>
                    </Button>
                    {artist.status === "Ready for Portfolio" && (
                      <Button size="sm" asChild>
                        <Link href="/owner/portfolio/new">
                          Add to Portfolio
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
