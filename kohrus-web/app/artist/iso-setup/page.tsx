import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function ISOSetupPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <Navigation />
      <div className="flex-1 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-12">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <h1 className="text-2xl font-bold">ISO Setup</h1>
            <p className="text-muted-foreground">Configure your Initial Song Offering</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">Set up your ISO parameters...</p>
            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/artist/valuation">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </Button>
              <Button className="w-full sm:w-auto" asChild>
                <Link href="/artist/iso-launch">
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
