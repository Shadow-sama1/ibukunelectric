import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, TrendingUp } from "lucide-react";

const projects = [
  { title: "Lekki Family Estate", location: "Lagos", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80", details: "12kVA hybrid system supporting daily loads and nighttime backup" },
  { title: "Maitama Clinic Retrofit", location: "Abuja", image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e6?auto=format&fit=crop&w=1200&q=80", details: "6kVA backup integration for critical medical operations" },
  { title: "Dugbe Retail Hub", location: "Ibadan", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80", details: "18kVA system powering shop fronts and refrigeration loads" },
  { title: "Eko Residences", location: "Lagos", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80", details: "10kVA rooftop solution for comfort and resilience throughout the home" },
  { title: "Kaduna School Campus", location: "Kaduna", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80", details: "Multi-zone installation designed for steady academic operations" },
  { title: "Port Harcourt Warehouse", location: "Rivers", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80", details: "Commercial backup architecture for equipment and security loads" },
  { title: "Ibadan Hotel Suites", location: "Oyo", image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80", details: "Hybrid installation balancing guest comfort and staff operations" },
  { title: "Owerri Office Complex", location: "Imo", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80", details: "Power continuity plan for offices, internet and server load" },
  { title: "Ado-Ekiti Pharmacy", location: "Ekiti", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80", details: "Efficient backup power for refrigeration, lighting and access systems" },
  { title: "Asaba Mixed-Use Block", location: "Delta", image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e6?auto=format&fit=crop&w=1200&q=80", details: "A refined hybrid design for multi-unit power stability" },
  { title: "Abuja Residential Villa", location: "Abuja", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80", details: "Quiet residential solar system with battery backup and controls" },
  { title: "Ilorin Manufacturing Line", location: "Kwara", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80", details: "Industrial-stage backup system supporting continuity during outages" },
];

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[#E6F4F2] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Projects</p>
        <h1 className="mt-3 text-4xl font-black text-[#0B4F4A] sm:text-5xl">Projects</h1>
        <p className="mt-4 text-base text-[#1E2D2C]">12 projects</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-[1.75rem] border border-[#E7EAE8] bg-white shadow-sm">
            <div className="relative h-56">
              <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-sm text-[#4B5A58]">
                  <MapPin size={16} />
                  {project.location}
                </div>
                <span className="rounded-full bg-[#FBF3DC] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0B4F4A]">Case study</span>
              </div>
              <h2 className="mt-4 text-2xl font-black text-[#0B4F4A]">{project.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#4B5A58]">{project.details}</p>
              <div className="mt-5 flex items-center justify-between text-sm font-semibold text-[#0F766E]">
                <span className="inline-flex items-center gap-2">
                  <TrendingUp size={15} /> Outcome-focused design
                </span>
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
