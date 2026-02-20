import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground max-w-xl mb-8">
          How we handle your data. This page is coming soon.
        </p>
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
}
