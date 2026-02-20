import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  MessageSquare,
  Mail,
  Phone,
  ExternalLink,
  Music,
  IndianRupee
} from "lucide-react";

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function ApplicationReviewPage({ params }: { params: { id: string } }) {
  // Mock application data - in real app, fetch by ID
  const application = {
    id: params.id,
    name: "Artist Name",
    email: "artist@example.com",
    phone: "+91 98765 43210",
    spotify: "https://open.spotify.com/artist/123456",
    songCount: 5,
    moneyToRaise: 500000,
    revenueSources: ["Streaming", "Merch"],
    revenueStatements: "yes",
    revenueOrg: "BMI",
    labelContract: "yes",
    labelName: "Universal Music",
    publisherContract: "no",
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/owner/applications">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Applications
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Application Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <h1 className="text-2xl font-bold">Application Review</h1>
                <p className="text-muted-foreground">Review all submitted information</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Name */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Name(s)</Label>
                  <p className="text-sm">{application.name}</p>
                </div>

                {/* Contact Info */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Contact Information</Label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm min-w-0">
                      <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="break-all">{application.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm min-w-0">
                      <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="truncate">{application.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Spotify Link */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Spotify Artist Page</Label>
                  <div className="flex items-center gap-2 text-sm min-w-0">
                    <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <a href={application.spotify} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                      {application.spotify}
                    </a>
                  </div>
                </div>

                {/* Song Count */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Number of Songs</Label>
                  <div className="flex items-center gap-2 text-sm">
                    <Music className="h-4 w-4 text-muted-foreground" />
                    <span>{application.songCount}</span>
                  </div>
                </div>

                {/* Money to Raise */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Money to be Raised</Label>
                  <div className="flex items-center gap-2 text-sm">
                    <IndianRupee className="h-4 w-4 text-muted-foreground" />
                    <span>₹{application.moneyToRaise.toLocaleString()}</span>
                  </div>
                </div>

                {/* Revenue Sources */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Revenue Sources</Label>
                  <div className="flex flex-wrap gap-2">
                    {application.revenueSources.map((source, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-muted text-sm whitespace-nowrap">
                        {source}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Revenue Statements */}
                <div>
                  <Label className="text-sm font-medium mb-2 block">Revenue Statements</Label>
                  <p className="text-sm">{application.revenueStatements === "yes" ? `Yes - ${application.revenueOrg}` : "No"}</p>
                </div>

                {/* Contracts */}
                <div className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Contract with Label</Label>
                    <p className="text-sm break-words">{application.labelContract === "yes" ? `Yes - ${application.labelName}` : "No"}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Contract with Publisher</Label>
                    <p className="text-sm">{application.publisherContract === "yes" ? "Yes" : "No"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Internal Notes */}
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Internal Notes</h2>
              </CardHeader>
              <CardContent>
                <Textarea 
                  placeholder="Add notes about this application..."
                  className="min-h-[100px]"
                />
              </CardContent>
            </Card>
          </div>

          {/* Action Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Actions</h2>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full gap-2" asChild>
                  <Link href="/owner/artists">
                    <CheckCircle className="h-4 w-4" />
                    Approve Application
                  </Link>
                </Button>
                <Button variant="destructive" className="w-full gap-2" asChild>
                  <Link href="/owner/applications">
                    <XCircle className="h-4 w-4" />
                    Reject Application
                  </Link>
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Request More Info
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Application Info</h2>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Submitted:</span>
                  <span>2 hours ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="px-2 py-1 rounded bg-amber-100 text-amber-700 text-xs">Pending</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Application ID:</span>
                  <span>#{application.id}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
