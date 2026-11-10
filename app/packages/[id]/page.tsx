"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, MessageCircle, Plus, ShoppingCart } from "lucide-react";
import { packages } from "@/app/lib/site-data";
import { useCartStore } from "@/app/lib/cart-store";

export default function PackageDetailPage() {
  const params = useParams<{ id: string }>();
  const selectedPackage = packages.find((pkg) => pkg.id === params?.id);

  if (!selectedPackage) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-[#0B4F4A]">Package not found</h1>
        <Link href="/packages" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-3 text-sm font-bold text-[#0B4F4A]">
          View all packages
        </Link>
      </div>
    );
  }

  const related = packages.filter((pkg) => pkg.id !== selectedPackage.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/packages" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F766E]">
        <ArrowRight size={16} className="rotate-180" /> Back to packages
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="overflow-hidden rounded-[2rem] border border-[#E7EAE8] bg-white shadow-sm">
            <Image src={selectedPackage.image} alt={selectedPackage.tier} width={1200} height={900} className="h-[420px] w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {[selectedPackage.image, selectedPackage.image, selectedPackage.image].map((image, index) => (
              <div key={`${selectedPackage.id}-${index}`} className="overflow-hidden rounded-[1.25rem] border border-[#E7EAE8] bg-white">
                <Image src={image} alt={`${selectedPackage.tier} gallery ${index + 1}`} width={500} height={350} className="h-28 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-[2rem] border border-[#E7EAE8] bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#0B4F4A] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">{selectedPackage.batteryType}</span>
              {selectedPackage.solarOption ? (
                <span className="rounded-full bg-[#FBF3DC] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0B4F4A]">Solar option</span>
              ) : null}
            </div>
            <h1 className="mt-4 text-4xl font-black text-[#0B4F4A]">{selectedPackage.tier}</h1>
            <p className="mt-2 text-lg text-[#4B5A58]">{selectedPackage.capacityKva}kVA · {selectedPackage.systemVoltage}</p>
            <p className="mt-6 text-3xl font-black text-[#0B4F4A]">₦{selectedPackage.price.toLocaleString("en-NG")}</p>
            <p className="mt-2 text-sm text-[#4B5A58]">Installation included</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <AddToCartButton packageItem={selectedPackage} />
              <a href={`https://wa.me/2348000000000?text=${encodeURIComponent(`Hello Ibukun Electric, I would like to ask about the ${selectedPackage.tier} package.`)}`} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#DDEAE7] bg-[#F7F8F8] px-4 py-3 text-sm font-semibold text-[#0B4F4A]">
                <MessageCircle size={16} /> Ask about this package
              </a>
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-[#E6F4F2] p-4 text-sm text-[#0B4F4A]">
              {selectedPackage.description}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-[2rem] border border-[#E7EAE8] bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-[#0B4F4A]">Specifications</h2>
        <div className="mt-6 overflow-hidden rounded-[1.25rem] border border-[#E7EAE8]">
          <table className="w-full border-collapse text-left">
            <tbody>
              <tr className="border-b border-[#E7EAE8] bg-[#F7F8F8]">
                <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#4B5A58]">Inverter capacity</th>
                <td className="px-4 py-3 text-sm font-medium text-[#0F1F1E]">{selectedPackage.capacityKva}kVA</td>
              </tr>
              <tr className="border-b border-[#E7EAE8]">
                <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#4B5A58]">System voltage</th>
                <td className="px-4 py-3 text-sm font-medium text-[#0F1F1E]">{selectedPackage.systemVoltage}</td>
              </tr>
              <tr className="border-b border-[#E7EAE8] bg-[#F7F8F8]">
                <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#4B5A58]">Battery type</th>
                <td className="px-4 py-3 text-sm font-medium text-[#0F1F1E]">{selectedPackage.batteryType}</td>
              </tr>
              <tr className="border-b border-[#E7EAE8]">
                <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#4B5A58]">Battery capacity</th>
                <td className="px-4 py-3 text-sm font-medium text-[#0F1F1E]">{selectedPackage.capacityKva * 3}kWh</td>
              </tr>
              <tr className="bg-[#F7F8F8]">
                <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#4B5A58]">Solar panels</th>
                <td className="px-4 py-3 text-sm font-medium text-[#0F1F1E]">{selectedPackage.solarOption ? "Included" : "Optional"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 rounded-[2rem] border border-[#E7EAE8] bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-[#0B4F4A]">What this package powers</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {selectedPackage.powers.map((power) => (
            <li key={power} className="flex items-center gap-3 rounded-2xl bg-[#F7F8F8] px-4 py-3 text-sm font-medium text-[#1E2D2C]">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E6F4F2] text-[#0B4F4A]">
                <Plus size={14} />
              </span>
              {power}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-black text-[#0B4F4A]">Related packages</h2>
          <Link href="/packages" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F766E]">
            View all packages <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((pkg) => (
            <Link key={pkg.id} href={`/packages/${pkg.id}`} className="overflow-hidden rounded-[1.5rem] border border-[#E7EAE8] bg-white shadow-sm">
              <div className="relative h-40 w-full">
                <Image src={pkg.image} alt={pkg.tier} fill className="object-cover" sizes="(max-width: 768px) 100vw, 30vw" />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0F766E]">{pkg.tier}</p>
                <h3 className="mt-2 text-xl font-black text-[#0B4F4A]">{pkg.capacityKva}kVA</h3>
                <p className="mt-2 text-sm text-[#4B5A58]">From ₦{pkg.price.toLocaleString("en-NG")}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function AddToCartButton({ packageItem }: { packageItem: (typeof packages)[number] }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleClick = () => {
    addItem({ id: packageItem.id, name: `${packageItem.tier} ${packageItem.capacityKva}kVA`, price: packageItem.price, quantity: 1 });
  };

  return (
    <button type="button" onClick={handleClick} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#D4A017] px-4 py-3 text-sm font-bold text-[#0B4F4A]">
      <ShoppingCart size={16} /> Add to cart
    </button>
  );
}
