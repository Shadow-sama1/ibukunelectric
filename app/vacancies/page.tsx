import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { vacancies } from "@/app/lib/site-data";

export default function VacanciesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[#E6F4F2] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Careers</p>
        <h1 className="mt-3 text-4xl font-black text-[#0B4F4A] sm:text-5xl">Careers</h1>
      </div>

      <div className="mt-10 space-y-5">
        {vacancies.map((vacancy) => (
          <div key={vacancy.title} className="flex flex-col gap-4 rounded-[1.5rem] border border-[#E7EAE8] bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0F766E]">{vacancy.type}</p>
              <h2 className="mt-2 text-2xl font-black text-[#0B4F4A]">{vacancy.title}</h2>
              <p className="mt-2 text-sm text-[#4B5A58]">{vacancy.location}</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#D4A017] px-5 py-3 text-sm font-bold text-[#0B4F4A]">
              Apply now <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
