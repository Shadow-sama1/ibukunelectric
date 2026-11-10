import Image from "next/image";
import { teamMembers } from "@/app/lib/site-data";

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[#E6F4F2] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Our team</p>
        <h1 className="mt-3 text-4xl font-black text-[#0B4F4A] sm:text-5xl">Meet the people behind your power solution</h1>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {teamMembers.map((member) => (
          <article key={member.name} className="overflow-hidden rounded-[1.75rem] border border-[#E7EAE8] bg-white shadow-sm">
            <div className="relative h-72 w-full">
              <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-black text-[#0B4F4A]">{member.name}</h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#0F766E]">{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
