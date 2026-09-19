export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Subsidies & Govt Schemes" | "System Buying Guides" | "Maintenance & Performance";
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  imageAlt: string;
  keywords: string[];
  isFeatured?: boolean;
  content: {
    introduction: string;
    sections: {
      id: string;
      heading: string;
      subheading?: string;
      paragraphs: string[];
      bulletPoints?: string[];
      callout?: {
        type: "tip" | "important" | "quote" | "stats";
        title: string;
        text: string;
      };
      table?: {
        headers: string[];
        rows: string[][];
      };
    }[];
    conclusion: string;
    faqs?: {
      question: string;
      answer: string;
    }[];
  };
}

export const blogsData: BlogPost[] = [
  {
    id: "pm-surya-ghar-kerala-guide",
    slug: "pm-surya-ghar-muft-bijli-yojana-kerala-solar-subsidy-guide",
    title: "PM Surya Ghar Muft Bijli Yojana Kerala Guide (2026): Subsidies, KSEB Net Metering & How to Apply",
    subtitle: "Everything Kozhikode & Wayanad homeowners need to know about getting up to ₹78,000 in direct solar subsidies.",
    description: "Complete breakdown of PM Surya Ghar Muft Bijli Yojana solar subsidies in Kerala. Learn how homeowners in Kozhikode & Wayanad can claim government subsidies, apply for KSEB net metering, and eliminate monthly electricity bills.",
    category: "Subsidies & Govt Schemes",
    publishedAt: "2026-09-18",
    updatedAt: "2026-09-18",
    readTime: "6 min read",
    author: {
      name: "Er. Mibin Thomas",
      role: "Lead Solar Project Engineer",
      avatar: "/logo/mobile logo.png",
    },
    image: "/images/residential-solar.webp",
    imageAlt: "Residential solar panel rooftop installation in Kozhikode Kerala",
    keywords: [
      "PM Surya Ghar Kerala subsidy",
      "KSEB solar subsidy Kozhikode",
      "Solar subsidy Thiruvambadi Wayanad",
      "Solar panel cost Kerala 2026",
      "3kW rooftop solar subsidy Kerala",
      "Free electricity scheme Kerala",
    ],
    isFeatured: true,
    content: {
      introduction: "Rising electricity tariffs in Kerala have made rooftop solar power one of the smartest investments for homeowners in Kozhikode, Wayanad, and across Northern Kerala. Under the Central Government's flagship **PM Surya Ghar: Muft Bijli Yojana**, residential households can receive direct financial subsidies of up to **₹78,000** for installing rooftop solar systems.",
      sections: [
        {
          id: "subsidy-breakdown",
          heading: "1. Official PM Surya Ghar Subsidy Amount Structure",
          subheading: "Direct Central Financial Assistance (CFA) calculated by capacity",
          paragraphs: [
            "The PM Surya Ghar scheme provides fixed financial assistance based on your installed solar system capacity (kW). The subsidy amount is directly credited to your bank account after KSEB net-metering commissioning.",
          ],
          table: {
            headers: ["System Capacity", "Recommended Usage", "Direct Govt Subsidy (CFA)", "Avg. Monthly Generation"],
            rows: [
              ["1 kW Solar System", "Small home (Basic lights, fans, TV)", "₹30,000", "120 - 140 Units"],
              ["2 kW Solar System", "2-BHK Home (Fridge, washing machine)", "₹60,000", "240 - 280 Units"],
              ["3 kW Solar System", "3-BHK Home (Air conditioner, pumps)", "₹78,000 (Maximum Cap)", "360 - 420 Units"],
              ["4 kW to 10 kW System", "Large Villas & Multi-story Houses", "₹78,000 (Capped at 3kW)", "500 - 1200+ Units"],
            ],
          },
          callout: {
            type: "important",
            title: "Maximum Subsidy Cap",
            text: "The maximum direct financial subsidy under PM Surya Ghar is capped at ₹78,000 for systems of 3 kW capacity and above.",
          },
        },
        {
          id: "kseb-net-metering",
          heading: "2. How KSEB Net Metering Works in Kerala",
          subheading: "Export excess daytime solar energy to receive electricity bill credits",
          paragraphs: [
            "When your rooftop solar array generates more electricity during peak sunlight hours than your house consumes, the surplus energy flows automatically into the KSEB electrical grid through a **Bi-directional Net Meter**.",
            "KSEB tracks the units you export versus the units you import from the grid during night hours. At the end of each billing cycle, your KSEB power bill reflects only the net difference. If you export more than you consume, your net electricity bill drops to zero or baseline fixed charges.",
          ],
          bulletPoints: [
            "Bi-directional net meters record both import and export energy units.",
            "Surplus credit units roll over to subsequent months under KSEB guidelines.",
            "Helps achieve a complete payback on your investment within 3 to 4 years.",
          ],
        },
        {
          id: "step-by-step-process",
          heading: "3. Step-by-Step Application & Installation Process",
          subheading: "From portal registration to physical grid commissioning",
          paragraphs: [
            "Soul Power Energies manages the end-to-end documentation, technical feasibility, component procurement, and KSEB inspection process for homeowners in Kozhikode and Wayanad.",
          ],
          bulletPoints: [
            "**Step 1: Registration on National Portal**: Register on pmsuryaghar.gov.in using your KSEB Consumer Number.",
            "**Step 2: On-Site Engineering Audit**: Our technical team inspects roof orientation, shadow-free area, and phase wiring.",
            "**Step 3: Component Procurement & Installation**: Mounting Tier-1 Waaree / Premier modules and certified string inverters.",
            "**Step 4: KSEB Net Meter Inspection**: KSEB section officers inspect the anti-islanding safety switches and install the net meter.",
            "**Step 5: Direct Subsidy Release**: Upon commissioning approval, the subsidy is released directly into your bank account within 30 days.",
          ],
          callout: {
            type: "tip",
            title: "Local Technical Assistance",
            text: "Soul Power Energies is an authorized Virgin Power partner based in Thiruvambadi, Kozhikode. Our team handles all KSEB paperwork on your behalf.",
          },
        },
      ],
      conclusion: "Switching to rooftop solar under PM Surya Ghar is one of the most reliable ways to insulate your family from rising electricity prices while supporting clean green energy in Kerala. Contact Soul Power Energies today for a free on-site solar assessment.",
      faqs: [
        {
          question: "Can apartment owners apply for PM Surya Ghar subsidy?",
          answer: "Yes, Group Housing Societies (GHS) and Resident Welfare Associations (RWA) can apply for common lighting and elevator solar power setups with subsidies up to ₹18,000 per kW.",
        },
        {
          question: "How long does it take to receive the PM Surya Ghar subsidy in Kerala?",
          answer: "After KSEB net-metering commissioning and portal approval, the subsidy amount is credited directly to your bank account within 30 working days.",
        },
        {
          question: "Is battery backup required for on-grid net metering?",
          answer: "No, standard on-grid solar systems do not require expensive battery banks because the KSEB grid acts as a virtual storage mechanism.",
        },
      ],
    },
  },
  {
    id: "on-grid-vs-hybrid-solar-kerala",
    slug: "on-grid-vs-hybrid-solar-system-kerala-homes",
    title: "On-Grid vs. Hybrid Solar Systems in Kerala: Which One is Right for Your Home?",
    subtitle: "A practical breakdown of cost, payback periods, and power outage backup for Kozhikode & Wayanad residents.",
    description: "Detailed comparison between On-Grid grid-tied solar systems and Hybrid Lithium battery systems for homes in Kerala. Compare costs, KSEB net metering credits, and monsoon power cut reliability.",
    category: "System Buying Guides",
    publishedAt: "2026-09-15",
    updatedAt: "2026-09-15",
    readTime: "7 min read",
    author: {
      name: "Soul Power Technical Desk",
      role: "Renewable Systems Engineering Team",
      avatar: "/logo/mobile logo.png",
    },
    image: "/images/with-solar.webp",
    imageAlt: "3D Solar house visualization showing on-grid and hybrid energy flow",
    keywords: [
      "On grid vs hybrid solar Kerala",
      "best solar system Kozhikode",
      "hybrid solar battery backup Wayanad",
      "KSEB net metering payback period",
      "solar power cut backup Kerala",
      "Lithium battery solar system Kerala",
    ],
    isFeatured: false,
    content: {
      introduction: "When choosing a rooftop solar setup for your home in Kozhikode or Wayanad, one of the biggest decisions is deciding between an **On-Grid (Grid-Tied)** system and a **Hybrid (Grid + Battery)** system. Both options harness solar energy efficiently, but they serve different priorities depending on your neighborhood's grid stability.",
      sections: [
        {
          id: "on-grid-overview",
          heading: "1. On-Grid Solar Systems (Grid-Tied)",
          subheading: "Maximum Return on Investment & Lowest Upfront Cost",
          paragraphs: [
            "An **On-Grid solar system** works in direct synchronization with the KSEB grid. It feeds generated solar power into your home appliances first, exporting any extra daytime surplus directly to KSEB via a Net Meter.",
            "Because on-grid systems do not use batteries, they are the most affordable per kilowatt and offer the fastest payback period (typically 3 to 4 years).",
          ],
          bulletPoints: [
            "**Pros**: Lowest upfront cost, eligible for maximum PM Surya Ghar subsidies, zero battery maintenance.",
            "**Cons**: For safety reasons (anti-islanding protection), on-grid inverters shut down during grid power outages.",
            "**Best For**: Homes in urban Kozhikode or town areas with reliable continuous grid power.",
          ],
        },
        {
          id: "hybrid-overview",
          heading: "2. Hybrid Solar Systems (Grid + Battery Backup)",
          subheading: "Uninterrupted Power Continuity During Monsoons & Blackouts",
          paragraphs: [
            "A **Hybrid solar system** combines grid net-metering with advanced Lithium Iron Phosphate (LFP) battery storage. During daylight hours, solar power satisfies home loads and charges the battery bank.",
            "When a KSEB power cut occurs—common during Kerala monsoons or in hilly regions like Wayanad and Thiruvambadi—the hybrid inverter switches to battery power in **< 10 milliseconds**, keeping lights, fans, refrigerators, and ACs running without interruption.",
          ],
          bulletPoints: [
            "**Pros**: 24/7 power independence during grid blackouts, instant switchover, full net metering export when batteries are full.",
            "**Cons**: Higher upfront investment due to high-cycle Lithium battery bank.",
            "**Best For**: Hilly terrain (Wayanad, Thiruvambady), high-monsoon regions, or homes with critical medical/work-from-home loads.",
          ],
        },
        {
          id: "comparison-table",
          heading: "3. Direct Comparison Matrix",
          subheading: "Feature-by-feature evaluation for Kerala homeowners",
          paragraphs: [
            "The table below outlines key operational differences between On-Grid and Hybrid configurations:",
          ],
          table: {
            headers: ["Feature / Metric", "On-Grid Solar System", "Hybrid Solar System"],
            rows: [
              ["Grid Connection", "Connected directly to KSEB Grid", "Grid Synchronized + Backup EPS"],
              ["Battery Storage", "Not Required", "Required (High-safety Lithium LFP)"],
              ["Blackout Performance", "Shutdown for line worker safety", "Instant (<10ms) emergency backup"],
              ["Net Metering", "Full KSEB Net Metering", "Full Net Metering (when battery full)"],
              ["Estimated Payback", "3.0 - 4.0 Years", "4.5 - 5.5 Years"],
              ["Upfront Capital Cost", "Lowest Investment", "Moderate Investment"],
            ],
          },
        },
      ],
      conclusion: "If your area has consistent electricity with minimal power cuts, an On-Grid system delivers maximum ROI. If you reside in power-cut-prone hilly areas like Wayanad or Thiruvambadi, a Hybrid system provides peace of mind with 24/7 backup. Contact Soul Power Energies for a customized load assessment.",
      faqs: [
        {
          question: "Can I start with an On-Grid system and upgrade to Hybrid later?",
          answer: "Yes, by choosing a Hybrid-ready inverter during initial installation, you can add Lithium battery storage modules seamlessly in the future.",
        },
        {
          question: "What is the lifespan of Lithium solar batteries in Kerala?",
          answer: "Modern Lithium Iron Phosphate (LFP) solar batteries offer 4000+ charge cycles, lasting over 10 to 12 years with zero water maintenance.",
        },
      ],
    },
  },
  {
    id: "solar-panel-monsoon-care-maintenance",
    slug: "solar-panel-monsoon-care-maintenance-kerala",
    title: "Kerala Monsoon Solar Care: How Heavy Rain, Dust & Moss Impact Generation & How to Protect Your Array",
    subtitle: "Essential preventive care tips to prevent 15–25% generation drops during monsoon and dry seasons.",
    description: "Learn how heavy rainfall, moss accumulation, foliage shade, and dust impact rooftop solar power generation in Kozhikode & Wayanad. Complete guide to professional cleaning and O&M preventive care.",
    category: "Maintenance & Performance",
    publishedAt: "2026-09-10",
    updatedAt: "2026-09-10",
    readTime: "5 min read",
    author: {
      name: "Soul Power Maintenance Team",
      role: "Field Operations & O&M Division",
      avatar: "/logo/mobile logo.png",
    },
    image: "/images/maintenance.webp",
    imageAlt: "Solar technician performing professional panel cleaning and maintenance in Kerala",
    keywords: [
      "Solar panel cleaning Kozhikode",
      "monsoon solar panel maintenance Kerala",
      "solar array cleaning Wayanad",
      "restore solar generation Kerala",
      "solar panel maintenance schedule",
      "solar glass hotspot prevention",
    ],
    isFeatured: false,
    content: {
      introduction: "Kerala’s tropical climate offers abundant sunshine, but it also brings unique challenges: intense South-West monsoon rain, humid conditions fostering moss growth, bird droppings, and tree foliage buildup. Over time, surface contamination can reduce solar generation yield by **15% to 25%** if left unmanaged.",
      sections: [
        {
          id: "monsoon-impact",
          heading: "1. The Impact of Monsoons & Debris on Solar Output",
          subheading: "Why natural rainfall isn't always enough to keep panels clean",
          paragraphs: [
            "While heavy monsoon rain washes off surface dust, it can also leave water spots, tree sap, leaves, and wet moss along panel frames.",
            "When bird droppings or leaves obstruct specific solar cells, those shaded cells stop generating power and act as electrical resistance. This causes localized heat buildup known as **Hotspots**, which can permanently damage panel glass over time.",
          ],
          callout: {
            type: "stats",
            title: "Generation Impact",
            text: "Accumulated dust and moss moss along the lower frame of solar panels reduce energy yield by 15% to 25% across typical 12-month periods.",
          },
        },
        {
          id: "cleaning-best-practices",
          heading: "2. Do's and Don'ts for Solar Panel Cleaning in Kerala",
          subheading: "Safe practices to avoid scratching tempered solar glass",
          paragraphs: [
            "Cleaning solar panels requires non-abrasive soft equipment and proper timing to avoid thermal shock.",
          ],
          bulletPoints: [
            "**DO Clean Early Morning or Late Evening**: Avoid washing hot panels during intense afternoon sun to prevent thermal shock fractures.",
            "**DO Use Soft Microfiber Brushes & Pure Water**: Hard water with high mineral content leaves white scale marks on glass. Use de-ionized or soft water.",
            "**DON'T Use Harsh Chemicals or Detergents**: Acidic or abrasive cleaners damage the anti-reflective coating on Tier-1 solar modules.",
            "**DON'T Pressure Wash at Close Range**: High-pressure sprayers can force water past IP67 junction box seals.",
          ],
        },
        {
          id: "om-service-checklist",
          heading: "3. Professional O&M Maintenance Checklist",
          subheading: "Beyond washing: electrical & structural safety inspections",
          paragraphs: [
            "Routine cleaning is only one component of solar health. A comprehensive annual maintenance checkup by Soul Power Energies includes:",
          ],
          bulletPoints: [
            "**DC Junction & MC4 Connector Check**: Inspecting for moisture ingress, loose crimps, or thermal discoloration.",
            "**Inverter Diagnostic Log Review**: Analyzing MPPT efficiency logs and voltage stability records.",
            "**Mounting Structure & Anodized Clamps**: Verifying wind resistance stability following monsoon storms.",
            "**Earthing & Surge Protection (SPD)**: Testing ground resistance values to ensure lightning protection readiness.",
          ],
        },
      ],
      conclusion: "Regular preventive care ensures your solar investment operates at maximum power generation year after year. Soul Power Energies offers annual maintenance contracts (AMC) and professional panel cleaning across Kozhikode and Wayanad.",
      faqs: [
        {
          question: "How often should rooftop solar panels be cleaned in Kerala?",
          answer: "We recommend professional cleaning 3 to 4 times a year: right after monsoon season, during peak summer dust months, and mid-year.",
        },
        {
          question: "Does rainwater clean solar panels effectively?",
          answer: "Rain removes loose dust, but leaves behind sticky pollen, bird droppings, and frame-edge moss that require manual soft-brush washing.",
        },
      ],
    },
  },
];
