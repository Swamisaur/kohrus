import Link from "next/link";

const footerLinkClass =
  "text-sm text-muted-foreground hover:text-foreground min-h-11 flex items-center rounded-md px-1 -mx-1 active:opacity-80 transition-colors touch-manipulation md:min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-3 min-w-0">
            <h3 className="text-xl font-bold truncate">kohrus</h3>
            <p className="text-sm text-muted-foreground break-words">
              The Stock Market for Music
            </p>
            <p className="text-xs text-muted-foreground/80 break-words">
              Invest in music. Earn from streams.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm">Platform</h4>
            <Link href="/browse" className={footerLinkClass}>
              Browse Assets
            </Link>
            <Link href="/artists" className={footerLinkClass}>
              For Artists
            </Link>
            <Link href="/investors" className={footerLinkClass}>
              For Investors
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm">Company</h4>
            <Link href="/about" className={footerLinkClass}>
              About
            </Link>
            <Link href="/careers" className={footerLinkClass}>
              Careers
            </Link>
            <Link href="/contact" className={footerLinkClass}>
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm">Legal</h4>
            <Link href="/privacy" className={footerLinkClass}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={footerLinkClass}>
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground break-words">
          © 2026 Kohrus Technologies Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
