import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ArrowLeft, Clock, Mail, Phone, ExternalLink } from "lucide-react";

export default function PendingApplicationsPage() {
  const applications = [
    {
      id: 1,
      name: "Artist Name 1",
      email: "artist1@example.com",
      phone: "+91 98765 43210",
      spotify: "https://open.spotify.com/artist/...",
      songs: 5,
      revenue: "Streaming, Merch",
      submitted: "2 hours ago",
      status: "pending"
    },
    {
      id: 2,
      name: "Artist Name 2",
      email: "artist2@example.com",
      phone: "+91 98765 43211",
      spotify: "https://open.spotify.com/artist/...",
      songs: 3,
      revenue: "Streaming, Sync",
      submitted: "5 hours ago",
      status: "pending"
    },
    {
      id: 3,
      name: "Artist Name 3",
      email: "artist3@example.com",
      phone: "+91 98765 43212",
      spotify: "https://open.spotify.com/artist/...",
      songs: 8,
      revenue: "Streaming, Publishing",
      submitted: "1 day ago",
      status: "pending"
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <div className="container mx-auto px-6 lg:px-12 py-10">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/owner/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Pending Applications</h1>
          <p className="text-muted-foreground">Review artist interest form submissions</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search applications..." className="pl-10" />
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {applications.map((app) => (
            <Card key={app.id} className="hover:shadow-lg transition-shadow">
              <Link href={`/owner/applications/${app.id}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3 gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold mb-1 truncate">{app.name}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2 min-w-0">
                              <Mail className="h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{app.email}</span>
                            </div>
                            <div className="flex items-center gap-2 min-w-0">
                              <Phone className="h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{app.phone}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium flex-shrink-0">
                          <Clock className="h-3 w-3" />
                          <span className="whitespace-nowrap">{app.status}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                        <div className="min-w-0">
                          <span className="text-muted-foreground">Songs:</span>
                          <span className="ml-2 font-medium">{app.songs}</span>
                        </div>
                        <div className="min-w-0">
                          <span className="text-muted-foreground">Revenue Sources:</span>
                          <span className="ml-2 font-medium break-words">{app.revenue}</span>
                        </div>
                        <div className="flex items-center gap-2 min-w-0">
                          <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-muted-foreground truncate">Spotify Profile</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Button asChild>
                        <Link href={`/owner/applications/${app.id}`}>
                          Review Application
                          <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
                    Submitted {app.submitted}
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
