import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-6 lg:px-12 py-12 lg:py-20">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            New Platform
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-foreground break-words">
            The Stock Market<br />for Music
          </h1>
          <p className="max-w-lg mx-auto lg:mx-0 text-base lg:text-lg leading-relaxed text-muted-foreground break-words">
            Invest in songs, albums & collections. Earn passive income from streaming royalties. Trade shares on a liquid secondary market.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <Button size="lg" className="gap-2 w-full sm:w-auto" asChild>
              <Link href="/signup">
                Start Investing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto" asChild>
              <Link href="/artist/signup">
                <Music className="h-4 w-4" />
                I&apos;m an Artist
              </Link>
            </Button>
            <Link href="/tryout" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="gap-2 w-full">
                <Sparkles className="h-4 w-4" />
                Tryout for your song(s)
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 pt-4">
            <div className="text-sm">
              <div className="font-semibold text-foreground">2,500+</div>
              <div className="text-muted-foreground">Investors</div>
            </div>
            <div className="h-1 w-1 rounded-full bg-muted-foreground" />
            <div className="text-sm">
              <div className="font-semibold text-foreground">150+</div>
              <div className="text-muted-foreground">Artists</div>
            </div>
            <div className="h-1 w-1 rounded-full bg-muted-foreground" />
            <div className="text-sm">
              <div className="font-semibold text-foreground">₹12Cr+</div>
              <div className="text-muted-foreground">Deployed</div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-96 mt-8 lg:mt-0">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500" />
            <div className="space-y-4 p-5">
              <h3 className="font-semibold">Featured Asset</h3>
              <p className="text-sm text-muted-foreground">Discover trending music investments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-border bg-muted px-6 lg:px-12 py-4">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 lg:gap-12 text-sm">
          <span className="text-muted-foreground">Trusted by artists & investors across</span>
          <span className="font-semibold text-foreground">2,500+ Investors</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
          <span className="font-semibold text-foreground">150+ Artists</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
          <span className="font-semibold text-foreground">₹12Cr+ Deployed</span>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="mb-12 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
            HOW IT WORKS
          </div>
          <h2 className="mb-4 text-3xl lg:text-4xl font-bold tracking-tight">
            Start earning in 3 simple steps
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Whether you&apos;re an artist seeking capital or a fan wanting to invest, getting started is easy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Browse & Discover", desc: "Explore curated music assets from emerging artists" },
            { title: "Invest from ₹50", desc: "Start with small amounts and build your portfolio" },
            { title: "Earn & Trade", desc: "Receive royalty dividends and trade on secondary market" },
          ].map((step, i) => (
            <div key={i} className="rounded-lg border border-border bg-muted p-7 min-w-0">
              <div className="mb-4 text-3xl font-bold text-muted-foreground">{i + 1}</div>
              <h3 className="mb-2 text-lg font-semibold break-words">{step.title}</h3>
              <p className="text-sm text-muted-foreground break-words">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Assets */}
      <section className="bg-muted px-6 lg:px-12 py-12 lg:py-20">
        <div className="container mx-auto">
          <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <h2 className="mb-2 text-2xl lg:text-3xl font-bold">Featured Assets</h2>
              <p className="text-muted-foreground">Discover trending music investments</p>
            </div>
            <Button variant="ghost" className="gap-2" asChild>
              <Link href="/browse">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((i) => (
              <Link key={i} href={`/asset/${i}`} className="overflow-hidden rounded-lg border border-border bg-card shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-400" />
                <div className="p-4 min-w-0">
                  <h3 className="mb-1 font-semibold truncate">Artist {i}</h3>
                  <p className="text-sm text-muted-foreground truncate">Song Title {i}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 lg:p-16 text-center text-white">
          <h2 className="mb-4 text-2xl lg:text-4xl font-bold break-words">
            Ready to invest in the music you love?
          </h2>
          <p className="mb-8 mx-auto max-w-lg text-white/80 break-words">
            Join thousands of investors earning passive income from music royalties. Start with as little as ₹50.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto" asChild>
              <Link href="/signup">
                Create Free Account
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto" asChild>
              <Link href="/browse">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
