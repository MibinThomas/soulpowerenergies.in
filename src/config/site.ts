export interface SiteConfig {
  name: string;
  tagline: string;
  shortName: string;
  description: string;
  url: string;
  primaryLocation: {
    town: string;
    district: string;
    state: string;
    country: string;
  };
  serviceAreas: string[];
  partner: {
    name: string;
    fullName: string;
    relationship: string;
    description: string;
    associatedBodies: string[];
    wording: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    mapUrl: string;
    address: {
      street: string;
      town: string;
      district: string;
      state: string;
      pincode: string | null;
      formatted: string;
    };
    businessHours: string;
  };
  social: {
    facebook: string | null;
    instagram: string | null;
    linkedin: string | null;
    youtube: string | null;
    twitter: string | null;
  };
  meta: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    keywords: string[];
  };
}

export const siteConfig: SiteConfig = {
  name: "Soul Power Energies",
  shortName: "Soul Power",
  tagline: "Powered By The Sun",
  description:
    "Locally managed solar and EV charging solutions for homes, businesses, and industries across Kozhikode and Wayanad. Authorized partner of Virgin Power and Engineering Pvt. Ltd.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://soulpowerenergies.in",

  primaryLocation: {
    town: "Thiruvambadi",
    district: "Calicut",
    state: "Kerala",
    country: "India",
  },

  serviceAreas: ["Calicut / Kozhikode", "Wayanad", "Thiruvambadi", "Northern Kerala"],

  partner: {
    name: "Virgin Power",
    fullName: "Virgin Power and Engineering Pvt. Ltd.",
    relationship: "Authorized Partner",
    description:
      "A leading renewable and sustainable power solutions company in India.",
    associatedBodies: ["KSEB", "ANERT", "MNRE", "CII"],
    wording:
      "Engineering and execution capabilities supported by Virgin Power and Engineering Pvt. Ltd., an organization associated with recognized renewable-energy bodies and standards.",
  },

  contact: {
    phone: "+91 96560 63369",
    whatsapp: "919656063369",
    email: "info@soulpowerenergies.in",
    mapUrl: "https://maps.app.goo.gl/yjU8L1mtqQJTH7oq9?g_st=aw",
    address: {
      street: "1st Floor, Ancillae Bhavan Block A Complex, Punnackal Road",
      town: "Thiruvambadi",
      district: "Calicut",
      state: "Kerala",
      pincode: null,
      formatted:
        "Soul Power Energies, 1st Floor, Ancillae Bhavan Block A Complex, Punnackal Road, Thiruvambadi, Calicut",
    },
    businessHours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },

  social: {
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
    twitter: null,
  },

  meta: {
    defaultTitle: "Soul Power Energies | Solar Energy & EV Charging Kozhikode & Wayanad",
    titleTemplate: "%s | Soul Power Energies",
    defaultDescription:
      "Professional solar rooftop installations, commercial solar power systems, and EV charging solutions in Kozhikode & Wayanad. Backed by Virgin Power engineering expertise.",
    keywords: [
      "Solar company in Kozhikode",
      "Rooftop solar installation Kozhikode",
      "Solar company in Wayanad",
      "Commercial solar installation Kerala",
      "EV charging station installation Kozhikode",
      "Solar panel maintenance Kozhikode",
      "Residential solar solutions Kerala",
      "Thiruvambady solar installer",
      "Virgin Power authorized partner Kerala",
    ],
  },
};
