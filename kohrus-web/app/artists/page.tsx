import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ArtistsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10">
        <Button variant="ghost" className="mb-6 -ml-2" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">For Artists</h1>
        <p className="text-muted-foreground max-w-xl mb-6">
          Raise capital from your fans. List your music and get funded.
        </p>
        <Button asChild>
          <Link href="/artist/signup">Artist signup</Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
}
