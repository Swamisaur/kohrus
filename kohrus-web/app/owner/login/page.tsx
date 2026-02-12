import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Shield } from "lucide-react";

export default function OwnerLoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <Navigation />
      <div className="flex-1 flex items-center justify-center py-10 px-6 lg:px-12">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <Shield className="h-6 w-6 text-amber-600" />
            </div>
            <h1 className="text-2xl font-bold break-words">Platform Owner Login</h1>
            <p className="text-muted-foreground break-words">Access your admin dashboard</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="owner@kohrus.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button asChild className="w-full gap-2">
                <Link href="/owner/dashboard">
                  Login
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              <Link href="/" className="text-primary hover:underline">
                Back to Home
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
