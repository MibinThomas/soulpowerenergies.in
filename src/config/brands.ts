export interface BrandItem {
  name: string;
  category: "panel" | "inverter" | "ev-charging";
  categoryLabel: string;
  description: string;
  origin: string;
  keyHighlight: string;
  officialUrl?: string;
  brochureUrl?: string;
}

export const brandsData: BrandItem[] = [
  // Solar Panels
  {
    name: "Waaree Energies",
    category: "panel",
    categoryLabel: "Solar Panels & Technology",
    description: "One of India's largest solar panel manufacturers offering high-efficiency Mono PERC and Bifacial modules.",
    origin: "India",
    keyHighlight: "Tier-1 Manufacturer with high degradation resistance",
  },
  {
    name: "Adani Solar",
    category: "panel",
    categoryLabel: "Solar Panels & Technology",
    description: "Pioneering vertically integrated solar manufacturer delivering robust photovoltaic modules engineered for tough climatic conditions.",
    origin: "India",
    keyHighlight: "High module efficiency & ALMM compliant",
  },
  {
    name: "Emmvee Solar",
    category: "panel",
    categoryLabel: "Solar Panels & Technology",
    description: "Renowned Indian solar brand with over two decades of manufacturing excellence in high-performance solar PV modules.",
    origin: "India",
    keyHighlight: "Proven long-term reliability & aesthetic finish",
  },
  // EV Charging
  {
    name: "VE Charge",
    category: "ev-charging",
    categoryLabel: "EV Charging Infrastructure",
    description: "Specialized electric vehicle charging equipment provider offering certified AC and DC charging solutions for residential and commercial spaces.",
    origin: "India",
    keyHighlight: "Smart EV charging protocols & safety compliance",
  },
  // Inverters
  {
    name: "Sungrow",
    category: "inverter",
    categoryLabel: "Solar Inverters",
    description: "Global leader in solar inverter technology, renowned for high conversion efficiency, robust grid compliance, and smart monitoring.",
    origin: "Global Leader",
    keyHighlight: "Industry-leading efficiency & smart mobile app monitoring",
  },
  {
    name: "FoxESS",
    category: "inverter",
    categoryLabel: "Solar Inverters",
    description: "Advanced global inverter brand delivering innovative single-phase, three-phase, and hybrid inverter systems built for longevity.",
    origin: "Global",
    keyHighlight: "Compact design, high surge capacity & smart cooling",
  },
  {
    name: "Waaree Inverters",
    category: "inverter",
    categoryLabel: "Solar Inverters",
    description: "Waaree's line of solar string inverters, optimized for seamless integration with Waaree solar PV arrays.",
    origin: "India",
    keyHighlight: "Harmonized component performance & wide MPPT range",
  },
  {
    name: "Power One",
    category: "inverter",
    categoryLabel: "Solar Inverters",
    description: "Established Indian power electronics manufacturer delivering dependable solar grid-tied inverters designed for tropical grid variations.",
    origin: "India",
    keyHighlight: "Heavy-duty power electronics built for local grid stability",
  },
];
