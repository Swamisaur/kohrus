import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  CheckCircle, 
  XCircle, 
  Music, 
  TrendingUp,
  ArrowRight,
  Clock,
  Users
} from "lucide-react";

export default function OwnerDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10">
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Platform Owner Dashboard</h1>
          <p className="text-muted-foreground">Manage artist applications and portfolio listings</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Pending Reviews</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Approved Artists</p>
                  <p className="text-2xl font-bold">45</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Published Listings</p>
                  <p className="text-2xl font-bold">28</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Music className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Total Revenue</p>
                  <p className="text-2xl font-bold">₹2.5Cr</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <Link href="/owner/applications">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1 truncate">Review Applications</h3>
                    <p className="text-sm text-muted-foreground truncate">12 pending reviews</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Link>
          </Card>
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <Link href="/owner/artists">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1 truncate">Manage Artists</h3>
                    <p className="text-sm text-muted-foreground truncate">45 approved artists</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Link>
          </Card>
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <Link href="/owner/portfolio">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Music className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1 truncate">Portfolio Management</h3>
                    <p className="text-sm text-muted-foreground truncate">28 published listings</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { action: "Approved", artist: "Artist Name 1", time: "2 hours ago", type: "approve" },
                { action: "Rejected", artist: "Artist Name 2", time: "5 hours ago", type: "reject" },
                { action: "Published", artist: "Song Title", time: "1 day ago", type: "publish" },
                { action: "Approved", artist: "Artist Name 3", time: "1 day ago", type: "approve" },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 pb-4 border-b last:border-0 last:pb-0">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    activity.type === "approve" ? "bg-green-100" : 
                    activity.type === "reject" ? "bg-red-100" : 
                    "bg-blue-100"
                  }`}>
                    {activity.type === "approve" ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : activity.type === "reject" ? (
                      <XCircle className="h-4 w-4 text-red-600" />
                    ) : (
                      <Music className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{activity.action}</p>
                    <p className="text-xs text-muted-foreground truncate">{activity.artist}</p>
                  </div>
                  <p className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
