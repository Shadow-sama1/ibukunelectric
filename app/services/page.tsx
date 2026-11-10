import Link from "next/link";
import { ArrowRight, Bolt, Building2, ChartNoAxesCombined, ClipboardCheck, Wrench } from "lucide-react";
import { industries, serviceCards, solutionsByScale } from "@/app/lib/site-data";

const icons = [Bolt, ClipboardCheck, Building2, Wrench, ChartNoAxesCombined];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[#E6F4F2] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Services</p>
        <h1 className="mt-3 text-4xl font-black text-[#0B4F4A] sm:text-5xl">Services</h1>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="tel:+2348000000000" className="inline-flex items-center gap-2 rounded-full bg-[#0B4F4A] px-5 py-3 text-sm font-bold text-white">Talk to an engineer</a>
          <a href="tel:+2348000000000" className="inline-flex items-center gap-2 rounded-full border border-[#0B4F4A] bg-white px-5 py-3 text-sm font-bold text-[#0B4F4A]">Call us now</a>
        </div>
      </div>

      <section className="mt-14">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">How we can help</p>
          <h2 className="mt-3 text-3xl font-black text-[#0B4F4A]">End-to-end energy support</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {serviceCards.map((service, index) => {
            const Icon = icons[index] ?? Bolt;
            return (
              <div key={service.title} className="rounded-[1.5rem] border border-[#E7EAE8] bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6F4F2] text-[#0B4F4A]">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-black text-[#0B4F4A]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4B5A58]">{service.description}</p>
                <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0F766E]">
                  Let&apos;s go <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-20 bg-white py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Industries we serve</p>
          <h2 className="mt-3 text-3xl font-black text-[#0B4F4A]">Flexible systems for different operations</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry) => (
            <div key={industry} className="rounded-full border border-[#DDEAE7] bg-[#F7F8F8] px-5 py-3 text-sm font-semibold text-[#1E2D2C]">
              {industry}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Solutions by scale</p>
          <h2 className="mt-3 text-3xl font-black text-[#0B4F4A]">The right fit for every load profile</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {solutionsByScale.map(({ title, description }) => (
            <div key={title} className="rounded-[1.75rem] border border-[#E7EAE8] bg-[#E6F4F2] p-8 shadow-sm">
              <h3 className="text-2xl font-black text-[#0B4F4A]">{title}</h3>
              <p className="mt-4 text-base leading-7 text-[#1E2D2C]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] bg-[#0B4F4A] p-8 text-white">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F5D77A]">Need a recommendation?</p>
            <h2 className="mt-2 text-3xl font-black">Not Sure Which Solar System Is Right for You?</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+2348000000000" className="inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-3 text-sm font-bold text-[#0B4F4A]">Call</a>
            <a href="https://wa.me/2348000000000?text=Hello%20Ibukun%20Electric" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white">Send a message</a>
          </div>
        </div>
      </section>
    </div>
  );
}
