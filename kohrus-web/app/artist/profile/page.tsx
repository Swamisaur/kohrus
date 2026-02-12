import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function ArtistProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <Navigation />
      <div className="flex-1 flex items-center justify-center py-10 px-6 lg:px-12">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <h1 className="text-2xl font-bold">Artist Profile</h1>
            <p className="text-muted-foreground">Complete your artist profile</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="artistName">Artist Name</Label>
              <Input id="artistName" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Input id="bio" />
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/artist/signup">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </Button>
              <Button className="w-full sm:w-auto" asChild>
                <Link href="/artist/verify">
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
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
