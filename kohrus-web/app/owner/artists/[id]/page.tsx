import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Clock, Music } from "lucide-react";

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function ArtistDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <div className="container mx-auto px-6 lg:px-12 py-10">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/owner/artists">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Artists
          </Link>
        </Button>
        <Card className="max-w-3xl">
          <CardHeader>
            <h1 className="text-2xl font-bold">Artist Details</h1>
            <p className="text-muted-foreground">View approved artist information and setup progress</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h2 className="font-semibold mb-2">Artist Name</h2>
              <p className="text-muted-foreground">Artist Name</p>
            </div>
            <div>
              <h2 className="font-semibold mb-2">Setup Progress</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Profile Created</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Verification Complete</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-600" />
                  <span className="text-sm">Song Setup in Progress</span>
                </div>
              </div>
            </div>
            <Button asChild>
              <Link href="/owner/portfolio/new">
                Create Portfolio Listing
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
