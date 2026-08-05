export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge?: string;
  isComingSoon?: boolean;
  tagline: string;
  description: string;
  fullDescription: string;
  customerProblem: string;
  solutionOverview: string;
  iconName: string;
  suitableFor: string[];
  keyFeatures: string[];
  processSteps: { title: string; desc: string }[];
  benefits: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "residential-solar",
    slug: "residential-rooftop-solar",
    title: "Residential Rooftop Solar",
    shortTitle: "Residential Solar",
    tagline: "Cut home electricity bills with customized rooftop solar power.",
    description:
      "Tailored solar rooftop solutions for independent houses, villas, and residential properties across Kozhikode and Wayanad.",
    fullDescription:
      "Soul Power Energies provides complete residential rooftop solar installations designed to maximize energy generation and minimize monthly electricity costs. Our local engineering team handles site feasibility, panel positioning, structural mounting, electrical grid connection, and ongoing maintenance support.",
    customerProblem:
      "Rising electricity tariffs and recurring grid instability lead to unpredictable monthly power bills for homeowners.",
    solutionOverview:
      "We design efficient grid-tied solar rooftop systems using high-tier solar panels and reliable inverters, converting abundant sunlight into clean, free power for your household appliances.",
    iconName: "Sun",
    suitableFor: [
      "Independent Villas & Bungalows",
      "Residential Independent Homes",
      "Multi-story Residential Buildings",
      "Farmhouses & Rural Residences",
    ],
    keyFeatures: [
      "Comprehensive site assessment & sun-path analysis",
      "High-efficiency panels from leading Indian manufacturers",
      "Custom structural mounting for Kerala climate & monsoons",
      "Net-metering integration support",
      "On-ground maintenance & operational support",
    ],
    processSteps: [
      { title: "Site Assessment", desc: "Evaluating shade, orientation, structural strength, and daily energy consumption." },
      { title: "Custom Proposal", desc: "Recommending system size, panel selection, and expected energy output." },
      { title: "Precision Installation", desc: "Mounting panels, inverter wiring, safety checks, and net-metering grid connection." },
      { title: "Testing & Handover", desc: "Verifying system generation metrics and guiding the homeowner on monitoring." },
    ],
    benefits: [
      "Drastic reduction in monthly electricity bills",
      "Clean, self-generated renewable energy",
      "Long-term energy bill security",
      "Enhanced property value",
    ],
  },
  {
    id: "commercial-solar",
    slug: "commercial-industrial-solar",
    title: "Commercial & Industrial Solar Systems",
    shortTitle: "Commercial Solar",
    tagline: "Transform commercial rooftops into long-term cost-saving assets.",
    description:
      "Scalable commercial and industrial solar installations engineered to reduce operational overheads for businesses.",
    fullDescription:
      "Commercial enterprises and manufacturing units face high daytime electricity costs. Soul Power Energies delivers robust, commercial-grade solar power plants that convert unused rooftop and elevated shed areas into high-yield power generating infrastructure, supported by Virgin Power's proven EPC capabilities.",
    customerProblem:
      "High commercial power tariffs eat into operating margins, while unutilized roof space remains an unproductive liability.",
    solutionOverview:
      "Engineering high-capacity commercial solar systems that directly power day-to-day operations, lower daytime peak power charges, and provide predictable energy economics.",
    iconName: "Building2",
    suitableFor: [
      "Commercial Office Buildings",
      "Factories & Manufacturing Plants",
      "Educational Institutions & Colleges",
      "Hotels, Resorts & Retail Spaces",
      "Hospitals & Healthcare Facilities",
    ],
    keyFeatures: [
      "High-capacity string & central inverter topologies",
      "Engineered structural load & wind resistance design",
      "Minimal disruption to daily business operations",
      "Comprehensive EPC execution framework",
      "Dedicated commercial support SLA",
    ],
    processSteps: [
      { title: "Energy Audit", desc: "Analyzing commercial load profiles, peak tariff hours, and available rooftop area." },
      { title: "Engineering Design", desc: "Detailed CAD structural drawings, electrical single-line diagrams, and safety specs." },
      { title: "Procurement & Execution", desc: "Supplying Tier-1 components and installing under strict safety protocols." },
      { title: "Commissioning & Support", desc: "Grid synchronization, net-metering completion, and operational training." },
    ],
    benefits: [
      "Immediate reduction in business operating costs",
      "Improved corporate sustainability profile",
      "Protection against rising commercial electricity rates",
      "Efficient utilization of roof real estate",
    ],
  },
  {
    id: "ev-charging",
    slug: "ev-charging-station-installation",
    title: "EV Charging Station Installation",
    shortTitle: "EV Charging",
    tagline: "Future-proof your property with professional EV charging setups.",
    description:
      "Turnkey AC and DC electric vehicle charging installation for homes, commercial complexes, and public parking.",
    fullDescription:
      "With the rapid growth of electric mobility in Kerala, accessible EV charging infrastructure is essential. Soul Power Energies provides site assessment, electrical cabling, wallbox/pedestal mounting, testing, and safety commissioning for residential homes, apartments, offices, and commercial establishments.",
    customerProblem:
      "EV owners and businesses lack convenient, professionally installed charging infrastructure with guaranteed electrical safety.",
    solutionOverview:
      "We deliver safe, certified EV charger installations with proper earthing, protective breakers, and load management for seamless daily charging.",
    iconName: "Zap",
    suitableFor: [
      "Private Residential Garages",
      "Apartment Complexes & Gated Communities",
      "Commercial Workplaces & Corporate Hubs",
      "Hotels, Resorts & Shopping Outlets",
      "Public & Semi-Public Parking Premises",
    ],
    keyFeatures: [
      "Installation of VE Charge & certified AC/DC chargers",
      "Dedicated electrical distribution board & surge protection",
      "Custom cable routing & weather-resistant enclosures",
      "Multi-use case adaptability (home, workplace, public)",
      "Local technical assistance and servicing",
    ],
    processSteps: [
      { title: "Power Inspection", desc: "Checking transformer capacity, breaker ratings, and earthing quality." },
      { title: "Charger Selection", desc: "Matching charger power (7.4kW, 11kW, 22kW+) to property requirements." },
      { title: "Electrical Integration", desc: "Running armored cabling, installing safety devices, and mounting hardware." },
      { title: "Safety Testing", desc: "Verifying ground fault interrupts, communication protocols, and live charging." },
    ],
    benefits: [
      "Convenient charging at home or workplace",
      "Attract EV-driving customers to commercial spaces",
      "Certified electrical installation preventing fire hazards",
      "Ready for integration with rooftop solar power",
    ],
  },
  {
    id: "panel-cleaning",
    slug: "solar-panel-cleaning-and-maintenance",
    title: "Solar Panel Cleaning & Maintenance",
    shortTitle: "Cleaning & O&M",
    tagline: "Maintain peak generation efficiency with scheduled care.",
    description:
      "Professional panel cleaning, physical inspection, and preventive maintenance for residential and commercial solar installations.",
    fullDescription:
      "Dust, bird droppings, foliage, and monsoon grime can reduce solar generation efficiency by 15% to 25%. Soul Power Energies offers scheduled cleaning services using soft water and specialized non-abrasive equipment, alongside electrical inspections to ensure your solar array operates at maximum yield.",
    customerProblem:
      "Accumulated dirt and unmonitored electrical degradation reduce system output and shorten panel lifespan.",
    solutionOverview:
      "Routine professional cleaning and preventive technical check-ups that restore clean light absorption and catch issues early.",
    iconName: "Sparkles",
    suitableFor: [
      "Existing Residential Solar Systems",
      "Commercial Rooftop Solar Arrays",
      "Industrial Power Plants",
      "Institutional Solar Infrastructure",
    ],
    keyFeatures: [
      "Purified non-abrasive panel washing",
      "Inverter diagnostic checks & cable inspections",
      "Thermal spot check for damaged cells (where applicable)",
      "Flexible annual maintenance packages",
      "Prompt response local servicing team",
    ],
    processSteps: [
      { title: "Visual Inspection", desc: "Checking structural mounts, cable ties, junction boxes, and glass integrity." },
      { title: "Debris Removal", desc: "Removing leaves, moss, and surface contaminants safely." },
      { title: "De-ionized Wash", desc: "Washing solar glass with soft water and micro-fiber equipment." },
      { title: "Generation Check", desc: "Comparing pre-wash and post-wash generation output." },
    ],
    benefits: [
      "Restores lost energy generation efficiency",
      "Prevents permanent hot-spot damage to panel glass",
      "Extends operational lifespan of solar equipment",
      "Peace of mind with local technical support",
    ],
  },
  {
    id: "hybrid-hvac",
    slug: "solar-hybrid-hvac-solutions",
    title: "Solar Hybrid HVAC Solutions",
    shortTitle: "Solar HVAC",
    tagline: "Energy-optimized air conditioning powered through clean technology.",
    description:
      "Specialized renewable energy air conditioning and cooling solutions delivered through our regional engineering network.",
    fullDescription:
      "Air conditioning represents a significant portion of power consumption in Kerala's warm climate. Working with established technology partners, Soul Power Energies assists commercial and residential clients in integrating solar power with HVAC systems to optimize cooling energy consumption.",
    customerProblem:
      "HVAC systems are the highest energy consumers in modern buildings, leading to heavy power bills during peak heat.",
    solutionOverview:
      "A specialized renewable solution leveraging direct solar power supplementation for HVAC equipment to flatten cooling-driven peak power spikes.",
    iconName: "Wind",
    suitableFor: [
      "Commercial Offices & Corporate Workspaces",
      "Hospitality Suites & Resorts",
      "Large Residential Properties",
      "Educational Institutions",
    ],
    keyFeatures: [
      "Solar power supplementation for cooling units",
      "Integration with energy management networks",
      "Engineering review for high-draw inductive loads",
      "Supported through regional technology partner network",
    ],
    processSteps: [
      { title: "Cooling Load Analysis", desc: "Assessing existing AC tonnage, peak operational hours, and solar offset capability." },
      { title: "Partner Network Review", desc: "Coordinating with specialized HVAC technical partners." },
      { title: "System Recommendation", desc: "Presenting a tailored solar-assisted cooling layout." },
    ],
    benefits: [
      "Targeted reduction in heavy cooling energy costs",
      "Reduces stress on local power connection during summer",
      "Modernized green building energy profile",
    ],
  },
  {
    id: "battery-storage",
    slug: "battery-energy-storage-systems",
    title: "Battery Energy Storage Systems",
    shortTitle: "Battery Storage",
    badge: "Coming Soon",
    isComingSoon: true,
    tagline: "Advanced power backup solutions — currently in development.",
    description:
      "Next-generation energy storage solutions to provide seamless backup during grid outages. Launching soon.",
    fullDescription:
      "Soul Power Energies is actively preparing to launch Battery Energy Storage Systems (BESS) designed for hybrid solar integration. This solution will allow homeowners and commercial facilities to store excess solar energy produced during peak sunlight and utilize it during grid power outages or nighttime hours. Sign up for early updates.",
    customerProblem:
      "Standard grid-tied solar systems automatically shut down during grid outages for safety, leaving users without power unless battery storage is attached.",
    solutionOverview:
      "Upcoming Lithium-ion battery storage architectures integrated with hybrid inverters for uninterruptible backup power.",
    iconName: "BatteryCharging",
    suitableFor: [
      "Homes needing emergency night backup",
      "Commercial premises with critical load continuity needs",
      "Off-grid & semi-grid micro-installations",
    ],
    keyFeatures: [
      "Lithium Iron Phosphate (LFP) high-safety chemistry (planned)",
      "Hybrid inverter synchronization",
      "Uninterruptible power transfer for essential loads",
      "Enquiry registration active for early access",
    ],
    processSteps: [
      { title: "Solution Announcement", desc: "Product lineup and specification launch coming soon." },
      { title: "Early Interest Registration", desc: "Submit your requirement to receive priority notice when available." },
    ],
    benefits: [
      "24/7 power autonomy independent of grid failures",
      "Maximize self-consumption of generated solar energy",
      "Clean, silent alternative to diesel generators",
    ],
  },
];
