import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function KYCPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <Navigation />
      <div className="flex-1 flex items-center justify-center py-10 px-6 lg:px-12">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <h1 className="text-2xl font-bold">KYC Verification</h1>
            <p className="text-muted-foreground">Complete your identity verification</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="pan">PAN Number</Label>
              <Input id="pan" placeholder="ABCDE1234F" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="aadhaar">Aadhaar Number</Label>
              <Input id="aadhaar" placeholder="XXXX XXXX XXXX" />
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/signup">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </Button>
              <Button className="w-full sm:w-auto" asChild>
                <Link href="/wallet">
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
