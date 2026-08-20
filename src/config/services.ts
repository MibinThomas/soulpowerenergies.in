export interface SystemOption {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  howItWorks: string;
  idealFor: string;
  keyHighlights: string[];
  specs: { label: string; value: string }[];
}

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
  bgImage: string;
  suitableFor: string[];
  keyFeatures: string[];
  processSteps: { title: string; desc: string }[];
  benefits: string[];
  systemOptions?: SystemOption[];
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
    bgImage: "/images/residential-solar.png",
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
    systemOptions: [
      {
        id: "on-grid",
        name: "On-Grid Solar System (Grid-Tied)",
        badge: "Maximum ROI & KSEB Net Metering",
        tagline: "Export surplus daytime power directly to KSEB grid for maximum financial savings.",
        description:
          "On-grid solar systems operate by connecting directly to the utility grid. Generated solar power satisfies your home's immediate electrical consumption, while any excess power is exported back to the KSEB grid via a bidirectional Net Meter.",
        howItWorks:
          "1. Rooftop solar PV panels generate DC electricity from sunlight.\n2. High-efficiency string inverter converts DC into clean 230V AC home power.\n3. Home appliances consume solar power first.\n4. Unused excess energy feeds back to KSEB grid through Net Meter, earning bill credits.",
        idealFor:
          "Homeowners with stable grid power looking for the lowest upfront cost, fastest payback period (3–4 years), and maximum return on investment without battery maintenance.",
        keyHighlights: [
          "Lowest upfront capital investment per kW",
          "KSEB Net-metering approval & credit banking",
          "Zero battery maintenance or replacement costs",
          "Payback achieved in 3 to 4 years",
        ],
        specs: [
          { label: "Grid Connection", value: "Direct KSEB Grid Synchronized" },
          { label: "Battery Storage", value: "Not Required (Grid serves as virtual battery)" },
          { label: "Blackout Operation", value: "Automatic anti-islanding safety shutdown" },
          { label: "Net Metering", value: "Full Bi-directional KSEB Net Metering" },
          { label: "Phase Options", value: "Single Phase (3kW) & 3-Phase (5kW, 6kW, 8kW+)" },
        ],
      },
      {
        id: "hybrid",
        name: "Hybrid Solar System (Grid + Battery)",
        badge: "Grid Savings + Outage Backup",
        tagline: "Combine net metering savings with seamless battery backup during grid power cuts.",
        description:
          "Hybrid solar systems pair solar generation and grid net-metering with advanced Lithium battery storage. When grid outages or voltage drops occur, your home instantly switches to battery power without interruption.",
        howItWorks:
          "1. Solar panels power home appliances during peak sunlight hours.\n2. Excess solar energy automatically charges the Lithium LFP battery bank.\n3. Once batteries are fully charged, surplus energy exports to KSEB grid via Net Meter.\n4. During power cuts or night hours, hybrid inverter draws stored battery power in <10ms.",
        idealFor:
          "Homes in areas prone to frequent monsoon power outages, hilly regions (e.g. Wayanad, Thiruvambady), or families requiring uninterrupted power for ACs, medical devices, and work-from-home setups.",
        keyHighlights: [
          "Continuous 24/7 power independence during grid blackouts",
          "< 10ms automatic emergency power switchover",
          "High-cycle Lithium Iron Phosphate (LFP) safety chemistry",
          "Full KSEB Net Metering export support when batteries are full",
        ],
        specs: [
          { label: "Grid Connection", value: "Hybrid Grid Synchronized + Backup EPS" },
          { label: "Battery Chemistry", value: "High-Safety Lithium Iron Phosphate (LFP)" },
          { label: "Switchover Time", value: "Instantaneous (< 10 milliseconds)" },
          { label: "Net Metering", value: "Full Bi-directional KSEB Net Metering" },
          { label: "Phase Options", value: "Single Phase & 3-Phase Hybrid Topology" },
        ],
      },
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
    bgImage: "/images/commercial-solar.png",
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
    systemOptions: [
      {
        id: "on-grid-commercial",
        name: "On-Grid Commercial Solar System",
        badge: "Peak Tariff Reduction & Heavy Load Offset",
        tagline: "Directly offset daytime operational energy costs for factories, offices, and institutions.",
        description:
          "Commercial on-grid solar plants are engineered for daytime operational businesses. By generating power during peak sunlight hours, commercial facilities drastically reduce high daytime grid tariffs and peak demand charges.",
        howItWorks:
          "1. High-wattage Tier-1 solar arrays capture solar radiation on commercial roofs/sheds.\n2. Multi-string 3-phase central inverters synchronize directly with commercial power lines.\n3. Daytime machinery, HVAC, lighting, and computing loads run primarily on solar energy.\n4. Any weekend or holiday excess exports back to the commercial grid.",
        idealFor:
          "Manufacturing plants, commercial office buildings, schools, colleges, and retail establishments operating primarily during daytime working hours.",
        keyHighlights: [
          "Immediate 60%–80% reduction in daytime commercial power bills",
          "Accelerated Depreciation (AD) tax saving benefits",
          "Scalable 3-phase multi-string inverter topology",
          "Rapid commercial payback in 2.5 to 3.5 years",
        ],
        specs: [
          { label: "System Architecture", value: "3-Phase Commercial Multi-String" },
          { label: "Battery Requirement", value: "None required for daytime operations" },
          { label: "Tax Benefit", value: "Eligible for Accelerated Depreciation" },
          { label: "Commercial Payback", value: "2.5 to 3.5 Years" },
        ],
      },
      {
        id: "hybrid-commercial",
        name: "Hybrid Commercial Solar System",
        badge: "Critical Load Continuity & Silent Diesel Generator Replacement",
        tagline: "Replace expensive diesel generator running costs with high-capacity Lithium BESS storage.",
        description:
          "Commercial hybrid solar systems combine high-capacity solar generation with commercial Lithium Battery Energy Storage Systems (BESS). They guarantee zero-interruption power continuity for critical infrastructure while eliminating expensive diesel generator fuel bills.",
        howItWorks:
          "1. High-capacity commercial solar array powers facility baseline loads.\n2. Integrated Commercial BESS charges rapidly from excess solar or off-peak grid.\n3. Upon grid failure, commercial hybrid inverter takes over critical circuits automatically.\n4. Intelligent energy management system (EMS) optimizes peak shaving to lower maximum demand charges.",
        idealFor:
          "Hospitals, IT parks, cold storage facilities, hotels, resorts, and continuous process manufacturing units requiring 100% operational uptime.",
        keyHighlights: [
          "Eliminates high diesel generator fuel and maintenance overheads",
          "Zero-emissions, silent, uninterruptible power backup",
          "Peak demand shaving to prevent utility penalty charges",
          "Scalable commercial LFP battery cabinets (15kWh to 100kWh+)",
        ],
        specs: [
          { label: "System Architecture", value: "3-Phase Hybrid Inverter + Commercial LFP BESS" },
          { label: "Battery Capacity", value: "Modular 15kWh to 100kWh+ Commercial Storage" },
          { label: "Generator Replacement", value: "Silent, Zero-Fuel Diesel Generator Alternative" },
          { label: "Demand Management", value: "Integrated Peak Shaving & Load Balancing" },
        ],
      },
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
    bgImage: "/images/ev-charging.png",
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
    bgImage: "/images/maintenance.png",
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
];
