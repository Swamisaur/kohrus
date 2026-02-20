import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted">
      <Navigation />
      <div className="flex-1 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-md text-center space-y-6">
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="text-muted-foreground">
            Login is coming soon. For now, use sign up to create an account.
          </p>
          <Button asChild className="w-full">
            <Link href="/signup">Go to Sign up</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
