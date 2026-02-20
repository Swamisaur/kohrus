/* eslint-disable @next/next/no-img-element -- Landing uses dynamic basePath and static export with unoptimized images */
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Sparkles, TrendingUp, PieChart, Wallet, RefreshCw, Mic } from "lucide-react";
import { LandingFallbackImage } from "@/components/landing-fallback-image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const howItWorksSteps = [
  {
    number: 1,
    title: "Browse & Discover",
    description:
      "Explore songs, albums and collections from verified artists. Analyse yield projections, streaming data and risk scores.",
    image: `${basePath}/how-step-1.png`,
  },
  {
    number: 2,
    title: "Invest from ₹50",
    description:
      "Purchase fractional royalty shares via UPI. Choose your investment amount and own a piece of the music you love.",
    image: `${basePath}/how-step-2.png`,
  },
  {
    number: 3,
    title: "Earn & Trade",
    description:
      "Receive monthly royalty dividends as streams grow. Trade your shares on the secondary market anytime, 24/7.",
    image: `${basePath}/how-step-3.png`,
  },
];

const featuredAssets = [
  {
    id: 1,
    title: "Monsoon Nights",
    artist: "Priya Sharma",
    price: "₹5",
    change: "+12.5%",
    image: `${basePath}/featured-1.png`,
    gradient: "linear-gradient(120deg, rgba(5, 150, 105, 0.6) 0%, rgba(37, 99, 235, 0.6) 100%)",
  },
  {
    id: 2,
    title: "Urban Pulse (Album)",
    artist: "Vikram Collective",
    price: "₹2",
    change: "+8.2%",
    image: `${basePath}/featured-2.png`,
    gradient: "linear-gradient(45deg, rgba(234, 88, 12, 0.6) 0%, rgba(217, 119, 6, 0.6) 100%)",
  },
  {
    id: 3,
    title: "Neon City",
    artist: "Zara X",
    price: "₹5",
    change: "+15.3%",
    image: `${basePath}/featured-3.png`,
    gradient: "linear-gradient(160deg, rgba(124, 58, 237, 0.6) 0%, rgba(219, 39, 119, 0.6) 100%)",
  },
  {
    id: 4,
    title: "Indie Collection Vol. 3",
    artist: "Various Artists",
    price: "₹4",
    change: "+6.8%",
    image: `${basePath}/featured-4.png`,
    gradient: "linear-gradient(90deg, rgba(29, 78, 216, 0.6) 0%, rgba(14, 165, 233, 0.6) 100%)",
  },
];

const whyReasons = [
  {
    title: "Fractional ownership",
    description: "Start with ₹50. Own a slice of real royalty streams—no lock-in, no minimums.",
    icon: PieChart,
    image: `${basePath}/why-1.png`,
  },
  {
    title: "Passive income",
    description: "Earn monthly dividends as songs get streamed. Set it and forget it.",
    icon: Wallet,
    image: `${basePath}/why-2.png`,
  },
  {
    title: "Liquid market",
    description: "Trade your shares 24/7 on the secondary market. Exit when you want.",
    icon: RefreshCw,
    image: `${basePath}/why-3.png`,
  },
];

const testimonials = [
  {
    quote: "I started with ₹500 and now earn a small but steady royalty every month. Feels good to back artists I love.",
    name: "Ravi K.",
    role: "Investor, Mumbai",
    initial: "R",
  },
  {
    quote: "Kohrus let me raise capital from my listeners without giving away my rights. Game-changer for indie artists.",
    name: "Priya S.",
    role: "Indie Artist",
    initial: "P",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative container mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-16 px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20 overflow-hidden">
        {/* Optional subtle hero background */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none hidden lg:block"
          style={{
            backgroundImage: `url(${basePath}/hero-bg.png)`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
          aria-hidden
        />
        <div className="relative flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            New Platform
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight text-foreground break-words">
            The Stock Market<br />for Music
          </h1>
          <p className="max-w-lg mx-auto lg:mx-0 text-base lg:text-lg leading-relaxed text-foreground/90 break-words">
            Own a piece of the songs you love. Earn from streams. Trade like a pro.
          </p>
          <p className="max-w-md mx-auto lg:mx-0 text-sm text-muted-foreground break-words">
            From ₹50 · Monthly royalty dividends · Liquid secondary market
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
            <div className="flex items-center gap-2 text-sm">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" /></span>
              <div>
                <div className="font-semibold text-foreground">2,500+</div>
                <div className="text-muted-foreground">Investors</div>
              </div>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" />
            <div className="text-sm">
              <div className="font-semibold text-foreground">150+</div>
              <div className="text-muted-foreground">Artists</div>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" />
            <div className="text-sm">
              <div className="font-semibold text-foreground">₹12Cr+</div>
              <div className="text-muted-foreground">Deployed</div>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-96 mt-8 lg:mt-0">
          <div className="landing-hero-card overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <div className="landing-hero-card-label">Live deal</div>
            <div className="landing-card-image relative h-48">
              <img
                src={`${basePath}/hero-card.png`}
                alt="Featured: Midnight Dreams"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="landing-card-overlay" />
              <div className="landing-card-info">
                <span className="landing-card-artist">Arjun Mehta</span>
                <span className="landing-card-title">Midnight Dreams</span>
              </div>
            </div>
            <div className="landing-card-body space-y-4 p-5">
              <div className="landing-card-metrics grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="font-semibold text-foreground">₹199</div>
                  <div className="text-xs text-muted-foreground">per share</div>
                </div>
                <div className="landing-card-metric-highlight">
                  <div className="font-semibold text-emerald-600">+12.5%</div>
                  <div className="text-xs text-muted-foreground">30d</div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">68%</div>
                  <div className="text-xs text-muted-foreground">funded</div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="landing-progress-fill h-full rounded-full bg-primary" style={{ width: "68%" }} />
                </div>
                <div className="text-xs text-muted-foreground">312 investors • Closes in 6 days</div>
              </div>
              <Button className="w-full gap-2" asChild>
                <Link href="/browse">
                  Invest in this deal
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-border bg-muted/80 px-4 sm:px-6 lg:px-12 py-5">
        <div className="container mx-auto flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-8 text-sm">
          <span className="text-muted-foreground">Trusted by artists & investors</span>
          <span className="font-semibold text-foreground">2,500+ Investors</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground hidden sm:inline" />
          <span className="font-semibold text-foreground">150+ Artists</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground hidden sm:inline" />
          <span className="font-semibold text-foreground">₹12Cr+ Deployed</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground hidden sm:inline" />
          <span className="text-muted-foreground">Verified artists · UPI & secure payments</span>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
        <div className="mb-12 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
            How it works
          </div>
          <h2 className="mb-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Start earning in 3 simple steps
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Whether you&apos;re an artist seeking capital or a fan wanting to invest, getting started is easy.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          <div className="absolute left-[16.666%] right-[16.666%] top-[10rem] h-px bg-gradient-to-r from-transparent via-border to-transparent hidden md:block" aria-hidden />
          {howItWorksSteps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200 min-w-0"
            >
              <div className="landing-step-image-wrapper relative h-44">
                <img
                  src={step.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="landing-step-gradient-overlay" />
                <div className="absolute bottom-3 left-3 text-4xl font-bold text-white/90 drop-shadow">{step.number}</div>
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold break-words text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground break-words leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Assets */}
      <section id="browse" className="bg-muted/60 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">Featured assets</div>
              <h2 className="mb-2 text-2xl lg:text-3xl font-bold text-foreground">Live from the market</h2>
              <p className="text-muted-foreground">Discover trending music investments from verified artists</p>
            </div>
            <Button variant="ghost" className="gap-2 shrink-0" asChild>
              <Link href="/browse">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredAssets.map((asset) => (
              <Link
                key={asset.id}
                href={`/asset/${asset.id}`}
                className="overflow-hidden rounded-lg border border-border bg-card shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="landing-featured-image-container relative h-32">
                  <img
                    src={asset.image}
                    alt={asset.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    className="landing-featured-gradient-overlay absolute inset-0"
                    style={{ background: asset.gradient }}
                  />
                </div>
                <div className="p-4 min-w-0">
                  <h3 className="mb-1 font-semibold truncate">{asset.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">{asset.artist}</p>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xs text-muted-foreground">Price</span>
                      <div className="font-semibold text-foreground">{asset.price}</div>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <TrendingUp className="h-3.5 w-3.5" />
                      <span className="text-sm font-medium">{asset.change}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kohrus */}
      <section id="why" className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
        <div className="mb-12 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">Why Kohrus</div>
          <h2 className="mb-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Invest in music that pays you back
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Fractional ownership, monthly dividends, and a liquid market—so you stay in control.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyReasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={i}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200"
              >
                <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <LandingFallbackImage
                    src={reason.image}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-xl object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                  />
                  <Icon className="h-7 w-7 relative z-10" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-muted/60 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">Who it&apos;s for</div>
            <h2 className="mb-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Investors and artists, one platform
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Whether you want to grow your money or fund your next release, Kohrus connects you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <LandingFallbackImage
                src={`${basePath}/for-investors.png`}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                wrapperClassName="relative h-48 bg-muted"
                fallback={
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <Wallet className="h-16 w-16 opacity-40" />
                  </div>
                }
              />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">For Investors</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Discover songs, invest from ₹50, earn royalties, and trade anytime.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">· Browse verified artists and yield projections</li>
                  <li className="flex items-center gap-2">· Invest via UPI, own fractional royalty shares</li>
                  <li className="flex items-center gap-2">· Monthly dividends as streams grow</li>
                  <li className="flex items-center gap-2">· Secondary market—buy and sell 24/7</li>
                </ul>
                <Button className="mt-4 gap-2" asChild>
                  <Link href="/signup">Start investing <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <LandingFallbackImage
                src={`${basePath}/for-artists.png`}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                wrapperClassName="relative h-48 bg-muted"
                fallback={
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <Mic className="h-16 w-16 opacity-40" />
                  </div>
                }
              />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">For Artists</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Raise capital from your fans. Keep ownership. Get funded.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">· List your music and set your terms</li>
                  <li className="flex items-center gap-2">· Get funded by fans who believe in you</li>
                  <li className="flex items-center gap-2">· Retain rights and creative control</li>
                  <li className="flex items-center gap-2">· Transparent royalty splits</li>
                </ul>
                <Button variant="outline" className="mt-4 gap-2" asChild>
                  <Link href="/artist/signup">Artist signup <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
        <div className="mb-12 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">What people say</div>
          <h2 className="mb-4 text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Trusted by investors and artists
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <p className="mb-4 text-foreground/90 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-20">
        <div className="relative overflow-hidden rounded-3xl min-h-[280px] flex items-center justify-center">
          <img
            src={`${basePath}/cta-banner.png`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden />
          <div className="relative z-10 p-8 lg:p-16 text-center text-white w-full">
            <h2 className="mb-4 text-2xl lg:text-4xl font-bold break-words">
              Ready to invest in the music you love?
            </h2>
            <p className="mb-8 mx-auto max-w-lg text-white/90 break-words">
              Join 2,500+ investors. Start with ₹50. Earn monthly—trade anytime.
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
