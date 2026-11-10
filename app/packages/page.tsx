"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { packages, type SolarPackage } from "@/app/lib/site-data";
import { useCartStore } from "@/app/lib/cart-store";

const batteryOptions = ["all", "Tubular", "Lithium", "Hybrid"] as const;
const tierOptions = ["all", "Starter", "Starter Pro", "Basic", "Premium", "Silver", "Gold", "Platinum", "Diamond"] as const;

export default function PackageCatalogPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  const [toast, setToast] = useState<string | null>(null);

  const selectedBattery = (searchParams.get("battery") ?? "all") as (typeof batteryOptions)[number];
  const selectedTier = (searchParams.get("tier") ?? "all") as (typeof tierOptions)[number];
  const selectedCapacity = Number(searchParams.get("capacity") ?? "0");
  const priceSort = searchParams.get("sort") ?? "featured";

  const filteredPackages = useMemo(() => {
    let result = [...packages];

    if (selectedBattery !== "all") {
      result = result.filter((pkg) => pkg.batteryType === selectedBattery);
    }

    if (selectedTier !== "all") {
      result = result.filter((pkg) => pkg.tier === selectedTier);
    }

    if (selectedCapacity > 0) {
      result = result.filter((pkg) => pkg.capacityKva <= selectedCapacity);
    }

    if (priceSort === "low") {
      result.sort((a, b) => a.price - b.price);
    }
    if (priceSort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedBattery, selectedCapacity, selectedTier, priceSort]);

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value || value === "all" || value === "featured" || value === "0") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.replace(`/packages?${params.toString()}`);
  };

  const handleAddToCart = (pkg: SolarPackage) => {
    addItem({ id: pkg.id, name: `${pkg.tier} ${pkg.capacityKva}kVA`, price: pkg.price, quantity: 1 });
    setToast(`${pkg.tier} ${pkg.capacityKva}kVA added to cart`);
    window.setTimeout(() => setToast(null), 1800);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[#E6F4F2] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Packages</p>
        <h1 className="mt-3 text-4xl font-black text-[#0B4F4A] sm:text-5xl">Inverter and solar packages</h1>
        <p className="mt-4 max-w-2xl text-base text-[#1E2D2C]">
          Choose a right-sized package for your home, office or commercial operation and compare dependable options by battery type, capacity and tier.
        </p>
      </div>

      <div className="mt-10 rounded-[2rem] border border-[#E7EAE8] bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3 text-[#0B4F4A]">
          <SlidersHorizontal size={18} />
          <span className="text-sm font-semibold uppercase tracking-[0.18em]">Filter & sort</span>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-4">
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#4B5A58]">Battery type</label>
            <select value={selectedBattery} onChange={(e) => updateQuery("battery", e.target.value)} className="w-full rounded-xl border border-[#DDEAE7] bg-[#F7F8F8] px-3 py-3 text-sm text-[#0F1F1E] outline-none">
              {batteryOptions.map((option) => (
                <option key={option} value={option}>{option === "all" ? "All" : option}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#4B5A58]">Capacity (kVA)</label>
            <select value={selectedCapacity ? String(selectedCapacity) : "0"} onChange={(e) => updateQuery("capacity", e.target.value)} className="w-full rounded-xl border border-[#DDEAE7] bg-[#F7F8F8] px-3 py-3 text-sm text-[#0F1F1E] outline-none">
              <option value="0">Any</option>
              <option value="1">Up to 1kVA</option>
              <option value="3">Up to 3kVA</option>
              <option value="5">Up to 5kVA</option>
              <option value="8">Up to 8kVA</option>
              <option value="10">Up to 10kVA</option>
              <option value="15">Up to 15kVA</option>
              <option value="30">Up to 30kVA</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#4B5A58]">Tier</label>
            <select value={selectedTier} onChange={(e) => updateQuery("tier", e.target.value)} className="w-full rounded-xl border border-[#DDEAE7] bg-[#F7F8F8] px-3 py-3 text-sm text-[#0F1F1E] outline-none">
              {tierOptions.map((option) => (
                <option key={option} value={option}>{option === "all" ? "All tiers" : option}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#4B5A58]">Price sort</label>
            <select value={priceSort} onChange={(e) => updateQuery("sort", e.target.value)} className="w-full rounded-xl border border-[#DDEAE7] bg-[#F7F8F8] px-3 py-3 text-sm text-[#0F1F1E] outline-none">
              <option value="featured">Featured</option>
              <option value="low">Price: Low to high</option>
              <option value="high">Price: High to low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm font-semibold text-[#4B5A58]">Showing all {filteredPackages.length} packages</p>
      </div>

      {toast ? (
        <div className="mt-4 inline-flex rounded-full bg-[#0B4F4A] px-4 py-2 text-sm font-semibold text-white shadow-sm">{toast}</div>
      ) : null}

      <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredPackages.map((pkg) => (
          <div key={pkg.id} className="overflow-hidden rounded-[1.75rem] border border-[#E7EAE8] bg-white shadow-sm">
            <div className="relative h-48 w-full">
              <Image src={pkg.image} alt={pkg.tier} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              <div className="absolute left-4 top-4 flex gap-2">
                <span className="rounded-full bg-[#0B4F4A] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">{pkg.batteryType}</span>
                {pkg.solarOption ? <span className="rounded-full bg-[#FBF3DC] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0B4F4A]">Solar option</span> : null}
              </div>
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0F766E]">{pkg.tier}</p>
              <h2 className="mt-2 text-2xl font-black text-[#0B4F4A]">{pkg.capacityKva}kVA</h2>
              <div className="mt-2 flex items-center gap-2 text-sm text-[#4B5A58]">
                <span className="font-medium">·</span>
                <span>{pkg.systemVoltage}</span>
              </div>
              <p className="mt-4 text-sm text-[#1E2D2C]">Powers {pkg.powers.join(", ")}</p>
              <p className="mt-5 text-2xl font-black text-[#0B4F4A]">From ₦{pkg.price.toLocaleString("en-NG")}</p>
              <div className="mt-5 flex items-center gap-3">
                <Link href={`/packages/${pkg.id}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#DDEAE7] bg-[#F7F8F8] px-4 py-3 text-sm font-semibold text-[#0B4F4A]">
                  View details <ArrowRight size={16} />
                </Link>
                <button type="button" onClick={() => handleAddToCart(pkg)} className="inline-flex items-center justify-center rounded-full bg-[#D4A017] px-4 py-3 text-sm font-bold text-[#0B4F4A]">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-[2rem] bg-[#0B4F4A] p-8 text-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F5D77A]">Need a recommendation?</p>
            <h2 className="mt-2 text-3xl font-black">Not sure which size you need?</h2>
          </div>
          <Link href="/contact?topic=Help%20choosing%20a%20package" className="inline-flex items-center gap-2 rounded-full bg-[#D4A017] px-6 py-3 text-sm font-bold text-[#0B4F4A]">
            Talk to our team <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
