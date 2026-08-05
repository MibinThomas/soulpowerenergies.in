export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export const mainNav: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Solutions",
    href: "/solutions",
    description: "Rooftop Solar, Commercial Systems, EV Charging & Maintenance",
  },
  {
    title: "About",
    href: "/about",
    description: "Our mission, local roots, and Virgin Power engineering partnership",
  },
  {
    title: "Brands",
    href: "/brands",
    description: "Tier-1 Solar Panels, Inverters & EV Technology Partners",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch or request a free site assessment",
  },
];

export const footerNav = {
  solutions: [
    { title: "Residential Rooftop Solar", href: "/solutions#residential-rooftop-solar" },
    { title: "Commercial & Industrial Solar", href: "/solutions#commercial-industrial-solar" },
    { title: "EV Charging Stations", href: "/solutions#ev-charging-station-installation" },
    { title: "Solar Panel Maintenance", href: "/solutions#solar-panel-cleaning-and-maintenance" },
    { title: "Solar Hybrid HVAC", href: "/solutions#solar-hybrid-hvac-solutions" },
    { title: "Battery Energy Storage (Soon)", href: "/solutions#battery-energy-storage-systems" },
  ],
  company: [
    { title: "About Soul Power", href: "/about" },
    { title: "Engineering Partnership", href: "/about#partnership" },
    { title: "Brands & Technology", href: "/brands" },
    { title: "Service Coverage", href: "/#service-area" },
    { title: "Contact Us", href: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms & Conditions", href: "/terms" },
  ],
};
