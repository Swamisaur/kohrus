import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, CreditCard, Wallet, IndianRupee } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <Navigation />
      <div className="flex-1 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-12">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <h1 className="text-2xl font-bold">Investment Checkout</h1>
            <p className="text-muted-foreground">Complete your investment</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 p-4 bg-muted rounded-lg">
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Asset</span>
                <span className="font-semibold truncate text-right">Midnight Sessions</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Shares</span>
                <span className="font-semibold whitespace-nowrap">10</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Price per Share</span>
                <span className="font-semibold whitespace-nowrap">₹50</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t gap-4">
                <span>Total</span>
                <span className="whitespace-nowrap">₹500</span>
              </div>
            </div>
            <div className="space-y-4">
              <Label>Payment Method</Label>
              <RadioGroup defaultValue="upi">
                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem value="upi" id="upi" />
                  <Wallet className="h-4 w-4 mr-2" />
                  <Label htmlFor="upi" className="cursor-pointer">UPI</Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem value="card" id="card" />
                  <CreditCard className="h-4 w-4 mr-2" />
                  <Label htmlFor="card" className="cursor-pointer">Credit/Debit Card</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/asset/1">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </Button>
              <Button className="w-full sm:w-auto" asChild>
                <Link href="/portfolio">
                  Complete Investment
                  <IndianRupee className="ml-2 h-4 w-4" />
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
