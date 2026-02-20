"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Phone, 
  Mail, 
  ExternalLink, 
  Music, 
  IndianRupee, 
  ShoppingBag, 
  Tv, 
  FileText, 
  MoreHorizontal,
  Briefcase,
  Send
} from "lucide-react";

export default function TryoutPage() {
  const [revenueStatements, setRevenueStatements] = useState<string>("");
  const [revenueOrg, setRevenueOrg] = useState<string>("");
  const [labelContract, setLabelContract] = useState<string>("");
  const [publisherContract, setPublisherContract] = useState<string>("");
  const [revenueSources, setRevenueSources] = useState<string[]>([]);

  const toggleRevenueSource = (source: string) => {
    setRevenueSources(prev => 
      prev.includes(source) 
        ? prev.filter(s => s !== source)
        : [...prev, source]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission creates a pending application
    // Application will appear in Platform Owner dashboard for review
    alert("Application submitted successfully! Our team will review your submission and get back to you soon.");
  };

  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-12">
        <Card className="w-full max-w-3xl">
          <CardHeader className="rounded-t-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white border-0">
            <h1 className="text-2xl font-bold">Tryout for Your Song(s)</h1>
            <p className="text-white/80">Express your interest to sell your music royalties</p>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Name(s)</Label>
                <Input
                  id="name"
                  placeholder="Enter your name or artist name"
                  className="h-10"
                />
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <Label>Contact Information</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Phone number"
                      className="h-10 pl-10"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Email address"
                      className="h-10 pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Spotify Link */}
              <div className="space-y-2">
                <Label htmlFor="spotify">Link to Spotify Artist Page</Label>
                <div className="relative">
                  <ExternalLink className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="spotify"
                    type="url"
                    placeholder="https://open.spotify.com/artist/..."
                    className="h-10 pl-10 break-all"
                  />
                </div>
              </div>

              {/* Count of Songs */}
              <div className="space-y-2">
                <Label htmlFor="count">Number of Songs</Label>
                <div className="relative">
                  <Music className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="count"
                    type="number"
                    placeholder="e.g., 5"
                    className="h-10 pl-10"
                  />
                </div>
              </div>

              {/* Money to Raise */}
              <div className="space-y-2">
                <Label htmlFor="money">Money to be Raised</Label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="money"
                    type="number"
                    placeholder="e.g., 500000"
                    className="h-10 pl-10"
                  />
                </div>
              </div>

              {/* Revenue Source */}
              <div className="space-y-3">
                <Label>Revenue Source</Label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: "streaming", label: "Streaming", icon: Music },
                    { id: "merch", label: "Merch", icon: ShoppingBag },
                    { id: "sync", label: "Sync", icon: Tv },
                    { id: "publishing", label: "Publishing", icon: FileText },
                    { id: "others", label: "Others", icon: MoreHorizontal },
                  ].map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => toggleRevenueSource(id)}
                      className={`flex items-center gap-2 rounded-md border px-4 py-2 h-10 transition-colors ${
                        revenueSources.includes(id)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-background hover:bg-muted"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Revenue Statements */}
              <div className="space-y-3">
                <Label>Do you have revenue statements for your songs?</Label>
                <RadioGroup
                  value={revenueStatements}
                  onValueChange={setRevenueStatements}
                  className="flex gap-4"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="revenue-yes" />
                    <Label htmlFor="revenue-yes" className="cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="revenue-no" />
                    <Label htmlFor="revenue-no" className="cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
                
                {revenueStatements === "yes" && (
                  <div className="space-y-3 pt-2">
                    <Label>Which organization?</Label>
                    <div className="flex flex-wrap gap-3">
                      {["BMI", "ASCAP", "IPRS", "Others"].map((org) => (
                        <button
                          key={org}
                          type="button"
                          onClick={() => setRevenueOrg(org === revenueOrg ? "" : org)}
                          className={`rounded-md border px-4 py-2 h-10 text-sm transition-colors ${
                            revenueOrg === org
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-background hover:bg-muted"
                          }`}
                        >
                          {org}
                        </button>
                      ))}
                    </div>
                    {revenueOrg === "Others" && (
                      <Input
                        placeholder="Specify organization name"
                        className="h-10"
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Contract with Label */}
              <div className="space-y-3">
                <Label>Contract with Label</Label>
                <RadioGroup
                  value={labelContract}
                  onValueChange={setLabelContract}
                  className="flex gap-4"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="label-yes" />
                    <Label htmlFor="label-yes" className="cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="label-no" />
                    <Label htmlFor="label-no" className="cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
                
                {labelContract === "yes" && (
                  <div className="relative pt-2">
                    <Briefcase className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Which label?"
                      className="h-10 pl-10"
                    />
                  </div>
                )}
              </div>

              {/* Contract with Publisher */}
              <div className="space-y-3">
                <Label>Contract with Publisher</Label>
                <RadioGroup
                  value={publisherContract}
                  onValueChange={setPublisherContract}
                  className="flex gap-4"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="publisher-yes" />
                    <Label htmlFor="publisher-yes" className="cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="publisher-no" />
                    <Label htmlFor="publisher-no" className="cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
                
                {publisherContract === "yes" && (
                  <div className="relative pt-2">
                    <Briefcase className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Which publisher?"
                      className="h-10 pl-10"
                    />
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                <Button type="button" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/">Cancel</Link>
                </Button>
                <Button type="submit" className="gap-2 w-full sm:w-auto">
                  Submit for Review
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
