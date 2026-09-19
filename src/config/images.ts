export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export const siteImages = {
  hero: {
    src: "/images/hero.webp",
    alt: "Modern rooftop solar panel installation on a lush green tropical residential building",
    width: 1600,
    height: 900,
  },
  residentialSolar: {
    src: "/images/residential-solar.webp",
    alt: "Solar photovoltaic panels installed on home roof absorbing bright tropical sunlight",
    width: 1200,
    height: 800,
  },
  commercialSolar: {
    src: "/images/commercial-solar.webp",
    alt: "Large scale commercial solar panel array on building rooftop",
    width: 1200,
    height: 800,
  },
  evCharging: {
    src: "/images/ev-charging.webp",
    alt: "Electric vehicle charging cable connected to electric vehicle charging port",
    width: 1200,
    height: 800,
  },
  maintenance: {
    src: "/images/maintenance.webp",
    alt: "Solar technician performing professional panel maintenance and inspection",
    width: 1200,
    height: 800,
  },
  virginPowerPartner: {
    src: "/images/virgin-power-partner.webp",
    alt: "Engineering team collaborating on renewable energy project schematics",
    width: 1000,
    height: 667,
  },
  keralaLandscape: {
    src: "/images/kerala-landscape.webp",
    alt: "Lush green natural hill landscape of Kozhikode and Wayanad region",
    width: 1200,
    height: 800,
  },
};

