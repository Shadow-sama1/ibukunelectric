"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, MessageCircle, Phone, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCartStore } from "@/app/lib/cart-store";

const navItems = [
  { href: "/packages", label: "Packages" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Projects" },
  { href: "/team", label: "Our Team" },
  { href: "/vacancies", label: "Careers" },
  { href: "/contact", label: "Contact us" },
];

function LogoMark({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A017] text-[#0B4F4A] shadow-sm">
        <svg viewBox="0 0 64 64" className="h-6 w-6 fill-current" aria-label="Ibukun Electric logo">
          <path d="M34 8 17 34h13l-4 22 20-30H39l5-18Z" />
        </svg>
      </div>
      <span className={`text-lg font-black tracking-tight ${light ? "text-white" : "text-[#0B4F4A]"}`}>
        Ibukun Electric
      </span>
    </div>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const cartCount = useCartStore((state) => state.totalItems);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F8F8] text-[#0F1F1E]">
      {loading ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B4F4A] text-white">
          <div className="flex items-center gap-3 text-lg font-semibold tracking-[0.18em] uppercase">
            <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-[#D4A017]" />
            Loading…
          </div>
        </div>
      ) : null}

      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[101] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-[#0B4F4A]">
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-[#E7EAE8] bg-[#F7F8F8]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0" aria-label="Ibukun Electric home">
            <LogoMark />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${pathname === item.href ? "text-[#0B4F4A]" : "text-[#1E2D2C] hover:text-[#0F766E]"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+2348000000000" className="inline-flex items-center gap-2 rounded-full border border-[#D4A017] bg-[#FBF3DC] px-4 py-2 text-sm font-semibold text-[#0B4F4A]">
              <Phone size={16} />
              +234 800 000 0000
            </a>
            <Link href="/calculator" className="text-sm font-semibold text-[#0B4F4A] transition hover:text-[#0F766E]">
              Load calculator
            </Link>
            <Link href="/cart" className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0B4F4A] shadow-sm ring-1 ring-[#DDEAE7] transition hover:shadow-md" aria-label="View cart">
              <ShoppingCart size={18} />
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D4A017] px-1 text-[10px] font-bold text-[#0B4F4A]">
                  {cartCount}
                </span>
              ) : null}
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#DDEAE7] bg-white text-[#0B4F4A] lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-[#E7EAE8] bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-base font-medium text-[#1E2D2C]" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-3 pt-3">
                <a href="tel:+2348000000000" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B4F4A] px-4 py-3 font-semibold text-white">
                  <Phone size={16} /> +234 800 000 0000
                </a>
                <Link href="/calculator" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4A017] bg-[#FBF3DC] px-4 py-3 font-semibold text-[#0B4F4A]" onClick={() => setMobileOpen(false)}>
                  Load calculator
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main id="content">{children}</main>

      <a
        href="https://wa.me/2348000000000?text=Hello%20Ibukun%20Electric"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:scale-[1.02]"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">Chat on WhatsApp / We are available</span>
      </a>

      <footer className="mt-20 bg-[#0B4F4A] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.3fr] lg:px-8">
          <div>
            <LogoMark light />
            <p className="mt-5 max-w-sm text-sm text-[#D7E9E6]">
              Engineering resilient power solutions for homes, businesses and growing communities across Nigeria.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <input type="email" placeholder="Email address" className="h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/70 outline-none" />
              <button type="button" className="inline-flex h-12 items-center justify-center rounded-full bg-[#D4A017] px-5 text-sm font-semibold text-[#0B4F4A]">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#F5D77A]">Shop</p>
            <ul className="mt-4 space-y-3 text-sm text-[#D7E9E6]">
              <li><Link href="/packages">Packages</Link></li>
              <li><Link href="/calculator">Load calculator</Link></li>
              <li><Link href="/cart">Cart</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#F5D77A]">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-[#D7E9E6]">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Projects</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/vacancies">Careers</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#F5D77A]">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-[#D7E9E6]">
              <li>+234 800 000 0000</li>
              <li>+234 809 000 0000</li>
              <li>+234 702 000 0000</li>
              <li>hello@ibukunelectric.ng</li>
              <li>WhatsApp: +234 800 000 0000</li>
              <li>21 Oke Aro Road, Ikeja, Lagos</li>
              <li>Mon–Fri 9AM–5:30PM | Sat 9AM–2PM</li>
            </ul>
            <div className="mt-5 flex gap-3 text-[#F5D77A]">
              {['Facebook', 'Instagram', 'TikTok', 'X', 'YouTube'].map((social) => (
                <span key={social} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm font-medium">{social.slice(0, 1)}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-xs text-[#D7E9E6] sm:px-6 lg:px-8">
            <p>© 2025 Ibukun Electric. All rights reserved.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#F5D77A]">
              Book a consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
