"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Gauge,
  Lightbulb,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  faqItems,
  industries,
  projectShowcase,
  reviewCards,
  solutionsByScale,
} from "@/app/lib/site-data";

const stats = [
  { value: "25,000+", label: "Installations" },
  { value: "10+", label: "Years in business" },
  { value: "75", label: "Engineers" },
  { value: "48 hrs", label: "Average install time" },
  { value: "₦700,000", label: "Complete packages from", href: "/packages" },
];

const heroSlides = [
  "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
];

const processSteps = ["Assess", "Design", "Install", "Support"];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F7F8F8]">
      <section className="relative isolate overflow-hidden bg-[#0B4F4A] text-white">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: activeSlide === index ? 1 : 0 }}
            >
              <Image src={slide} alt="Solar installation" fill className="object-cover" sizes="100vw" priority={index === 0} />
              <div className="absolute inset-0 bg-[#0B4F4A]/70" />
            </div>
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#F5D77A]">
                Solar & energy solutions across Nigeria
              </div>
              <h1 className="max-w-xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Reliable Energy Solutions for Homes & Businesses
              </h1>
              <p className="mt-5 max-w-lg text-base text-[#E6F4F2] sm:text-lg">
                We design and install dependable solar, inverter, and battery systems that keep homes productive and businesses running without interruption.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/packages" className="inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-3 text-sm font-bold text-[#0B4F4A] shadow-lg shadow-[#D4A017]/20 transition hover:bg-[#B8860B]">
                  View Packages
                </Link>
                <a href="https://wa.me/2348000000000?text=Hello%20Ibukun%20Electric" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[1.5rem] bg-white p-5 text-[#0B4F4A]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Load profile</p>
                    <h2 className="mt-2 text-2xl font-black">1.5kVA backup</h2>
                  </div>
                  <span className="rounded-full bg-[#E6F4F2] px-3 py-1 text-xs font-semibold text-[#0F766E]">Estimate</span>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-[#F7F8F8] px-4 py-3">
                    <span className="text-sm text-[#4B5A58]">Inverter</span>
                    <span className="font-bold">2kVA</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-[#F7F8F8] px-4 py-3">
                    <span className="text-sm text-[#4B5A58]">Battery</span>
                    <span className="font-bold">5.5kWh</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-[#F7F8F8] px-4 py-3">
                    <span className="text-sm text-[#4B5A58]">Solar panels</span>
                    <span className="font-bold">2 units</span>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl bg-[#FBF3DC] p-4 text-sm text-[#0B4F4A]">
                  This is an initial estimate for planning and should be confirmed with a site assessment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E7EAE8] bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
          {stats.map((item) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center lg:text-left">
              {item.href ? (
                <Link href={item.href} className="inline-block text-2xl font-black text-[#0B4F4A] sm:text-[2rem]">{item.value}</Link>
              ) : (
                <div className="text-2xl font-black text-[#0B4F4A] sm:text-[2rem]">{item.value}</div>
              )}
              <p className="mt-1 text-sm text-[#4B5A58]">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-b border-[#E7EAE8] bg-[#F4F8F7] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#4B5A58]">
            Trusted by homes and businesses across Nigeria
          </p>
          <div className="marquee-track flex gap-10 whitespace-nowrap text-2xl font-black uppercase tracking-[0.15em] text-[#B2BCBA]">
            {["Apex Homes", "Crest Bank", "Greenworks", "Nigerian Clinics", "Prime Retail", "Helios", "Urban Living", "Sunrise Energy"].map((client) => (
              <span key={client} className="inline-flex items-center opacity-80 grayscale transition hover:text-[#0F766E] hover:grayscale-0">{client}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-[1.5rem] border border-[#E7EAE8] bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F4F2] text-sm font-black text-[#0B4F4A]">{index + 1}</div>
              <p className="text-lg font-bold text-[#0B4F4A]">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#E6F4F2] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#D7EAE7] p-4 shadow-xl">
            <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80" alt="Engineer reviewing a solar installation" width={900} height={1000} className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">About us</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0B4F4A] sm:text-5xl">
              Reliable Power, Engineered for Your Peace of Mind
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Designed and installed in-house",
                "Quality equipment and certified engineering",
                "Support after installation and long-term guidance",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-[#DDEAE7]">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E6F4F2] text-[#0B4F4A]">
                    <BadgeCheck size={14} />
                  </span>
                  <span className="text-base font-medium text-[#1E2D2C]">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/team" className="inline-flex items-center justify-center rounded-full bg-[#0B4F4A] px-6 py-3 text-sm font-bold text-white">
                Meet our team
              </Link>
              <a href="tel:+2348000000000" className="inline-flex items-center justify-center rounded-full border border-[#0B4F4A] bg-white px-6 py-3 text-sm font-bold text-[#0B4F4A]">
                Talk to an engineer
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Why customers choose us</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B4F4A] sm:text-4xl">Dependable power, designed around real-life needs</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Professionally Installed & Commissioned", description: "Certified installers and end-to-end project oversight from design to handover." },
            { icon: Wrench, title: "Quality Equipment, Clear Specifications", description: "We match the best components to your consumption profile and site conditions." },
            { icon: TrendingUp, title: "Flexible & Secure Order Process", description: "Order with confidence and a clearly staged process that reduces uncertainty." },
            { icon: Gauge, title: "Transparent Pricing & Availability", description: "Clear costing, delivery timing, and package guidance without hidden surprises." },
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-[1.75rem] border border-[#E7EAE8] bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6F4F2] text-[#0B4F4A]">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#0B4F4A]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4B5A58]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Industries we serve</p>
            <h2 className="mt-3 text-3xl font-black text-[#0B4F4A]">Flexible energy systems for every sector</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <div key={industry} className="rounded-full border border-[#DDEAE7] bg-[#F7F8F8] px-5 py-3 text-sm font-semibold text-[#1E2D2C] shadow-sm">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Solutions by scale</p>
          <h2 className="mt-3 text-3xl font-black text-[#0B4F4A]">Powering homes, businesses, and industrial growth</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {solutionsByScale.map(({ title, description }) => (
            <div key={title} className="rounded-[1.75rem] border border-[#E7EAE8] bg-[#E6F4F2] p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A017] text-[#0B4F4A]">
                <Lightbulb size={20} />
              </div>
              <h3 className="text-2xl font-black text-[#0B4F4A]">{title}</h3>
              <p className="mt-4 text-base leading-7 text-[#1E2D2C]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F4F8F7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Load calculator</p>
              <h2 className="mt-3 text-3xl font-black text-[#0B4F4A]">Find the Right System for Your Energy Needs</h2>
            </div>
            <Link href="/calculator" className="hidden text-sm font-semibold text-[#0F766E] md:inline-flex items-center gap-2">
              Calculate My Solar System <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-[#E7EAE8] bg-white p-8 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E7EAE8] pb-4">
                  <span className="text-sm font-semibold text-[#4B5A58]">Recommended system</span>
                  <span className="rounded-full bg-[#FBF3DC] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0B4F4A]">Estimate</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#4B5A58]">Inverter</p>
                    <p className="text-2xl font-black text-[#0B4F4A]">1kVA</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#4B5A58]">Battery</p>
                    <p className="text-2xl font-black text-[#0B4F4A]">5.5kWh</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#4B5A58]">Panels</p>
                    <p className="text-2xl font-black text-[#0B4F4A]">2</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-[#4B5A58]">
                This is an initial estimate based on average appliance usage and should be confirmed after a load assessment.
              </p>
              <Link href="/calculator" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-3 text-sm font-bold text-[#0B4F4A]">
                Calculate My Solar System
              </Link>
            </div>

            <div className="rounded-[2rem] border border-[#E7EAE8] bg-[#0B4F4A] p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F5D77A]">Smart sizing</p>
              <h3 className="mt-4 text-3xl font-black">Match your loads to the right capacity.</h3>
              <p className="mt-4 text-sm leading-7 text-[#D7E9E6]">
                A proper system starts with an accurate load assessment, but a rough estimate can help you start planning your energy upgrade.
              </p>
              <div className="mt-8 flex items-center gap-3 text-[#F5D77A]">
                <Phone size={18} />
                <span>Speak with an engineer before you order</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Selected projects</p>
            <h2 className="mt-3 text-3xl font-black text-[#0B4F4A]">Recent installations with measurable impact</h2>
          </div>
          <Link href="/portfolio" className="hidden items-center gap-2 text-sm font-semibold text-[#0F766E] md:inline-flex">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projectShowcase.map((project) => (
            <motion.article key={project.title} whileHover={{ y: -4 }} className="overflow-hidden rounded-[1.75rem] border border-[#E7EAE8] bg-white shadow-sm">
              <div className="relative h-56 w-full overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xl font-black text-[#0B4F4A]">₦{project.price.toLocaleString("en-NG")}</span>
                  <span className="rounded-full bg-[#FBF3DC] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0B4F4A]">Featured</span>
                </div>
                <h3 className="mt-4 text-2xl font-black text-[#0B4F4A]">{project.title}</h3>
                <div className="mt-3 flex items-center gap-2 text-sm text-[#4B5A58]">
                  <MapPin size={16} />
                  {project.location}
                </div>
                <p className="mt-3 text-sm leading-6 text-[#4B5A58]">{project.capacity}</p>
                <Link href="/portfolio" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0F766E]">
                  Explore project <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-[#FFFDF7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Reviews</p>
            <h2 className="mt-3 text-3xl font-black text-[#0B4F4A]">What our clients say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reviewCards.map((review) => (
              <div key={`${review.author}-${review.location}`} className="rounded-[1.75rem] border border-[#F1E9D7] bg-white p-6 shadow-sm">
                <div className="flex gap-1 text-[#D4A017]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-7 text-[#1E2D2C]">“{review.quote}”</p>
                <div className="mt-6 border-t border-[#F1E9D7] pt-4">
                  <p className="font-black text-[#0B4F4A]">{review.author}</p>
                  <div className="mt-1 flex items-center justify-between text-sm text-[#4B5A58]">
                    <span>{review.location}</span>
                    <span className="rounded-full bg-[#FBF3DC] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0B4F4A]">{review.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">How it works</p>
          <h2 className="mt-3 text-3xl font-black text-[#0B4F4A]">A clear process from first call to post-install support</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Order",
            "System Confirmation",
            "Processing & Scheduling",
            "Delivery",
            "Installation & Handover",
            "After-Sales Support",
          ].map((step, index) => (
            <div key={step} className="rounded-[1.5rem] border border-[#E7EAE8] bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A017] text-sm font-black text-[#0B4F4A]">{index + 1}</span>
                <span className="text-lg font-bold text-[#0B4F4A]">{step}</span>
              </div>
              <div className="h-1 w-full rounded-full bg-[#E6F4F2]" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">FAQ preview</p>
              <h2 className="mt-3 text-3xl font-black text-[#0B4F4A]">Common questions before you order</h2>
            </div>
            <Link href="/faq" className="hidden items-center gap-2 text-sm font-semibold text-[#0F766E] md:inline-flex">
              See all questions <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={item.question} className="rounded-[1.5rem] border border-[#E7EAE8] bg-[#F7F8F8] p-4 shadow-sm">
                <button type="button" className="flex w-full items-center justify-between gap-4 text-left" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <span className="text-base font-bold text-[#0B4F4A]">{item.question}</span>
                  <span className="text-xl font-semibold text-[#0F766E]">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index ? <p className="mt-4 text-sm leading-7 text-[#4B5A58]">{item.answer}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[#0B4F4A] px-6 py-10 text-white shadow-xl lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F5D77A]">Power your home or business with confidence</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Power Your Home or Business with Confidence</h2>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/packages" className="inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-3 text-sm font-bold text-[#0B4F4A]">View Packages</Link>
                <a href="tel:+2348000000000" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white">Call Us</a>
                <a href="https://wa.me/2348000000000?text=Hello%20Ibukun%20Electric" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white">Chat on WhatsApp</a>
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F5D77A]">Reach us</p>
              <div className="mt-4 space-y-3 text-sm text-[#E6F4F2]">
                <p>+234 800 000 0000</p>
                <p>hello@ibukunelectric.ng</p>
                <p>21 Oke Aro Road, Ikeja, Lagos</p>
                <p>Mon–Fri 9AM–5:30PM | Sat 9AM–2PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
