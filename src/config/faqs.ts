export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "solar" | "ev" | "maintenance" | "battery";
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-rooftop-suitability",
    question: "Is my rooftop suitable for solar panel installation?",
    answer:
      "Most RCC flat roofs, tiled roofs, and metallic sheet sheds in Kozhikode and Wayanad are well-suited for solar installation. During our initial site assessment, our technical team evaluates structural strength, roof orientation (south/south-west exposure is ideal), and potential shade from nearby trees or structures to recommend the optimal setup.",
    category: "solar",
  },
  {
    id: "faq-system-size",
    question: "What size solar system does my property need?",
    answer:
      "System size depends on your monthly electricity bill, average daily kWh consumption, and peak load requirements. A typical independent house in Kerala with a monthly bill of ₹2,500 - ₹5,000 generally requires a 3 kW to 5 kW solar rooftop system. Use our online Solar Savings Estimator or contact our team for a site assessment.",
    category: "solar",
  },
  {
    id: "faq-commercial-solar",
    question: "Do you provide commercial and industrial solar installations?",
    answer:
      "Yes. We design and install scalable commercial rooftop solar power plants for offices, institutions, retail centers, hotels, factories, and industrial units. Backed by Virgin Power and Engineering Pvt. Ltd.'s engineering capabilities, we handle high-capacity grid-tied installations from design to commissioning.",
    category: "solar",
  },
  {
    id: "faq-ev-charging",
    question: "Do you install EV charging stations for homes and businesses?",
    answer:
      "Yes. Soul Power Energies provides turnkey EV charger installation services for residential garages, apartment complexes, commercial workplaces, and public parking spaces. We install certified AC wallboxes and DC fast chargers (including VE Charge units) with complete electrical safety integration.",
    category: "ev",
  },
  {
    id: "faq-cleaning-maintenance",
    question: "Do you provide solar panel cleaning and maintenance services?",
    answer:
      "Yes. Accumulated dust, bird droppings, and monsoon grime can lower panel generation by up to 25%. We offer scheduled non-abrasive panel washing, electrical system inspections, inverter diagnostics, and preventive maintenance packages to keep your array operating at peak yield.",
    category: "maintenance",
  },
  {
    id: "faq-brands-offered",
    question: "Which solar panel and inverter brands do you offer?",
    answer:
      "We install Tier-1 solar panels from leading brands including Waaree Energies, Adani Solar, and Emmvee Solar, along with certified EV charging hardware from VE Charge. For string and hybrid inverters, we offer technology from Sungrow, FoxESS, Waaree, and Power One.",
    category: "general",
  },
  {
    id: "faq-after-sales",
    question: "Do you provide local after-sales support?",
    answer:
      "Absolutely. Located in Thiruvambady, Kozhikode, our dedicated local team provides prompt on-ground service across Kozhikode and Wayanad. We provide routine system health checks, troubleshooting, and direct support throughout the operating lifespan of your installation.",
    category: "general",
  },
  {
    id: "faq-battery-storage",
    question: "Are battery energy storage systems (BESS) available?",
    answer:
      "Battery Energy Storage Systems are currently coming soon! We are preparing to introduce advanced lithium battery storage options for hybrid solar backup. Submit an enquiry on our website to register for early updates when storage solutions launch.",
    category: "battery",
  },
];
