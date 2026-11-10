export type PackageTier =
  | "Starter"
  | "Starter Pro"
  | "Basic"
  | "Premium"
  | "Silver"
  | "Gold"
  | "Platinum"
  | "Diamond";

export type BatteryType = "Tubular" | "Lithium" | "Hybrid";

export type SolarPackage = {
  id: string;
  tier: PackageTier;
  batteryType: BatteryType;
  capacityKva: number;
  voltage: string;
  solarOption: boolean;
  systemVoltage: string;
  description: string;
  powers: string[];
  price: number;
  image: string;
};

export const packages: SolarPackage[] = [
  { id: "starter-5kva-tubular", tier: "Starter", batteryType: "Tubular", capacityKva: 5, voltage: "48V", solarOption: true, systemVoltage: "48V", description: "Small-home backup package", powers: ["2 fans", "LED lighting", "TV", "Wi‑Fi router"], price: 980000, image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80" },
  { id: "premium-5kva-lithium", tier: "Premium", batteryType: "Lithium", capacityKva: 5, voltage: "48V", solarOption: true, systemVoltage: "48V", description: "Family power package with faster cycling", powers: ["Fridge", "Deep freezer", "AC unit", "3 fans"], price: 1590000, image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=80" },
  { id: "silver-3kva-hybrid", tier: "Silver", batteryType: "Hybrid", capacityKva: 3, voltage: "24V", solarOption: true, systemVoltage: "24V", description: "Balanced hybrid package for apartments", powers: ["Lighting", "Laptop", "TV", "Fans"], price: 1120000, image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80" },
  { id: "gold-8kva-tubular", tier: "Gold", batteryType: "Tubular", capacityKva: 8, voltage: "48V", solarOption: true, systemVoltage: "48V", description: "Large home and small office package", powers: ["Water pump", "2 ACs", "Microwave", "Office loads"], price: 1960000, image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e6?auto=format&fit=crop&w=900&q=80" },
  { id: "platinum-10kva-lithium", tier: "Platinum", batteryType: "Lithium", capacityKva: 10, voltage: "48V", solarOption: true, systemVoltage: "48V", description: "High-availability power system", powers: ["3 AC units", "Fridge", "CCTV", "Office equipment"], price: 2780000, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80" },
  { id: "diamond-15kva-hybrid", tier: "Diamond", batteryType: "Hybrid", capacityKva: 15, voltage: "96V", solarOption: true, systemVoltage: "96V", description: "Premium commercial power backup", powers: ["Retail loads", "Server room", "HVAC", "Cold storage"], price: 3960000, image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80" },
  { id: "starter-pro-1kva-tubular", tier: "Starter Pro", batteryType: "Tubular", capacityKva: 1, voltage: "12V", solarOption: false, systemVoltage: "12V", description: "Entry-level backup boost", powers: ["3 LED lights", "Phone charging", "Laptop"], price: 720000, image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80" },
  { id: "basic-3kva-lithium", tier: "Basic", batteryType: "Lithium", capacityKva: 3, voltage: "24V", solarOption: true, systemVoltage: "24V", description: "Compact and efficient backup", powers: ["Fans", "TV", "Router", "Lights"], price: 1180000, image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80" },
  { id: "silver-5kva-lithium", tier: "Silver", batteryType: "Lithium", capacityKva: 5, voltage: "48V", solarOption: true, systemVoltage: "48V", description: "Reliable home energy package", powers: ["Home office", "Fridge", "Security lights", "2 fans"], price: 1680000, image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=80" },
  { id: "gold-7kva-hybrid", tier: "Gold", batteryType: "Hybrid", capacityKva: 7, voltage: "48V", solarOption: true, systemVoltage: "48V", description: "High-performance hybrid solution", powers: ["2 ACs", "Water heater", "Entertainment", "Wi‑Fi"], price: 2140000, image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80" },
  { id: "starter-2kva-tubular", tier: "Starter", batteryType: "Tubular", capacityKva: 2, voltage: "24V", solarOption: false, systemVoltage: "24V", description: "Small apartment and cabin support", powers: ["Router", "TV", "Fans", "2 lights"], price: 840000, image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80" },
  { id: "basic-5kva-tubular", tier: "Basic", batteryType: "Tubular", capacityKva: 5, voltage: "48V", solarOption: true, systemVoltage: "48V", description: "Classic robust solar backup", powers: ["Office devices", "Fridge", "Lighting", "AC"], price: 1460000, image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e6?auto=format&fit=crop&w=900&q=80" },
  { id: "starter-pro-3kva-lithium", tier: "Starter Pro", batteryType: "Lithium", capacityKva: 3, voltage: "24V", solarOption: true, systemVoltage: "24V", description: "Mid-range support for growing needs", powers: ["Fans", "Refrigerator", "Lights", "Laptop"], price: 1360000, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80" },
  { id: "premium-8kva-hybrid", tier: "Premium", batteryType: "Hybrid", capacityKva: 8, voltage: "48V", solarOption: true, systemVoltage: "48V", description: "Automated hybrid backup for homes", powers: ["2 ACs", "Water pump", "CCTV", "Large family loads"], price: 2390000, image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80" },
  { id: "silver-10kva-tubular", tier: "Silver", batteryType: "Tubular", capacityKva: 10, voltage: "48V", solarOption: true, systemVoltage: "48V", description: "Prepared for frequent outages", powers: ["Office setup", "Freezer", "Security", "AC"], price: 2640000, image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80" },
  { id: "platinum-12kva-lithium", tier: "Platinum", batteryType: "Lithium", capacityKva: 12, voltage: "96V", solarOption: true, systemVoltage: "96V", description: "Commercial-grade energy autonomy", powers: ["Retail systems", "CCTV", "Office loads", "Reception"], price: 3420000, image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=80" },
  { id: "diamond-20kva-hybrid", tier: "Diamond", batteryType: "Hybrid", capacityKva: 20, voltage: "96V", solarOption: true, systemVoltage: "96V", description: "Top-tier hybrid solution for operations", powers: ["Industrial motors", "HVAC", "Cold room", "Data center"], price: 4680000, image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80" },
  { id: "premium-15kva-tubular", tier: "Premium", batteryType: "Tubular", capacityKva: 15, voltage: "96V", solarOption: true, systemVoltage: "96V", description: "High-capacity confidence", powers: ["Business equipment", "Water systems", "Air conditioning", "Lighting"], price: 3280000, image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e6?auto=format&fit=crop&w=900&q=80" },
  { id: "basic-2kva-lithium", tier: "Basic", batteryType: "Lithium", capacityKva: 2, voltage: "24V", solarOption: false, systemVoltage: "24V", description: "Minimal but efficient home backup", powers: ["Lights", "Fans", "TV", "Laptop"], price: 890000, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80" },
  { id: "gold-12kva-lithium", tier: "Gold", batteryType: "Lithium", capacityKva: 12, voltage: "96V", solarOption: true, systemVoltage: "96V", description: "High-availability infrastructure package", powers: ["3 ACs", "Office rack", "CCTV", "Large computing loads"], price: 3140000, image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80" },
  { id: "starter-10kva-hybrid", tier: "Starter", batteryType: "Hybrid", capacityKva: 10, voltage: "48V", solarOption: true, systemVoltage: "48V", description: "Scalable business backup path", powers: ["Server", "Lighting", "UPS loads", "Office support"], price: 2460000, image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80" },
  { id: "premium-3kva-tubular", tier: "Premium", batteryType: "Tubular", capacityKva: 3, voltage: "24V", solarOption: true, systemVoltage: "24V", description: "Efficient home backup design", powers: ["TV", "Fans", "Lighting", "Router"], price: 1160000, image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80" },
  { id: "silver-7kva-lithium", tier: "Silver", batteryType: "Lithium", capacityKva: 7, voltage: "48V", solarOption: true, systemVoltage: "48V", description: "Works across mixed loads", powers: ["Fridge", "2 ACs", "Fans", "Laptop"], price: 1880000, image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=80" },
  { id: "diamond-30kva-hybrid", tier: "Diamond", batteryType: "Hybrid", capacityKva: 30, voltage: "120V", solarOption: true, systemVoltage: "120V", description: "Large-scale industrial energy package", powers: ["Industrial machines", "HVAC", "Lighting", "Data systems"], price: 6190000, image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e6?auto=format&fit=crop&w=900&q=80" },
];

export const projectShowcase = [
  { title: "Lekki Family Estate", location: "Lagos", price: 3850000, capacity: "12kVA hybrid solar system", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80" },
  { title: "Maitama Clinic Retrofit", location: "Abuja", price: 2460000, capacity: "6kVA backup integration", image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e6?auto=format&fit=crop&w=1000&q=80" },
  { title: "Dugbe Retail Hub", location: "Ibadan", price: 5120000, capacity: "18kVA commercial installation", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80" },
];

export const reviewCards = [
  { quote: "The team explained our loads clearly and delivered a system that runs our office without interruption.", author: "Adebayo O.", location: "Lagos", source: "Google" },
  { quote: "Installation was on time and the handover walk-through was very helpful for the household.", author: "Efe K.", location: "Warri", source: "WhatsApp" },
  { quote: "Their support after commissioning gave us confidence in the long-term performance of the plant.", author: "Mariam T.", location: "Abuja", source: "Website" },
  { quote: "From design to connection, the entire process felt premium and transparent.", author: "Seyi A.", location: "Port Harcourt", source: "In person" },
  { quote: "We got a clean system layout and the batteries perform reliably in this climate.", author: "Kelechi N.", location: "Enugu", source: "Facebook" },
  { quote: "They helped us plan a hybrid system that handled our cooling loads and office equipment.", author: "Tunde R.", location: "Ibadan", source: "Google" },
];

export const serviceCards = [
  { title: "System Design & Engineering", description: "Load analysis, design drawings, and power-matching recommendations for homes and commercial facilities." },
  { title: "Energy Audit & Consultation", description: "Data-driven review of your consumption patterns so you only pay for the capacity your property genuinely needs." },
  { title: "Solar Installation", description: "Professional rooftop and ground-mount installation with commissioning and safety checks built in." },
  { title: "After-Sales Support", description: "Remote troubleshooting, maintenance guidance, and responsive support when your system needs attention." },
  { title: "Maintenance & System Checks", description: "Preventive inspections, battery health monitoring, and optimization for peak long-term performance." },
];

export const faqItems = [
  { question: "Do I need to pay in full before installation?", answer: "Not always. We offer a structured order process with deposit milestones and clear confirmation before installation begins." },
  { question: "How long does installation usually take?", answer: "Most residential projects are completed within 1–5 days depending on system size, roof access, and permitting." },
  { question: "Can I buy single solar equipment items?", answer: "Yes. We can supply inverter units, batteries, panels, and accessories individually or as a full system package." },
  { question: "What is the difference between tubular and lithium batteries?", answer: "Tubular batteries are robust and cost-effective for long cycling, while lithium offers faster charging, higher efficiency, and a lighter footprint." },
  { question: "Which states do you cover?", answer: "We operate across major cities and regional hubs in Nigeria, with project support available based on site conditions and scope." },
  { question: "What happens after I place my order?", answer: "Our team confirms the design, schedules the site assessment, and then moves into procurement, installation, and post-installation support." },
];

export const industries = [
  "Banking & Financial Institutions",
  "Healthcare",
  "Hospitality",
  "Manufacturing & Industrial Facilities",
  "Real Estate",
  "Education",
  "Commercial Facilities",
];

export const solutionsByScale = [
  { title: "Residential", description: "Reliable, quiet power that supports daily comfort and safety in homes." },
  { title: "Commercial", description: "Back-up and solar systems designed to keep operations efficient and productive." },
  { title: "Industrial & Utility-Scale", description: "High-capacity infrastructure solutions for large loads, complexes, and critical operations." },
];

export const teamMembers = [
  { name: "Chinwe Okafor", role: "Lead Project Engineer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80" },
  { name: "Aminu Salisu", role: "Solar Design Specialist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80" },
  { name: "Tosin Adeyemi", role: "Installation Supervisor", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80" },
];

export const vacancies = [
  { title: "Solar Installation Technician", location: "Lagos", type: "Full-time" },
  { title: "Electrical Site Engineer", location: "Abuja", type: "Full-time" },
  { title: "Customer Support Lead", location: "Remote / Hybrid", type: "Contract" },
];
