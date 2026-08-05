# Soul Power Energies Website

Production-ready, modern, responsive website for **Soul Power Energies** — a solar energy and EV charging solution provider based in Thiruvambady, Kozhikode, Kerala, authorized partner of **Virgin Power and Engineering Pvt. Ltd.**

---

## 🚀 Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode enabled)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with CSS variables
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Email Delivery Adapter**: Resend Ready (`src/lib/email/provider.ts`)
- **Package Manager**: `pnpm`

---

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx                       # Home Page
│   ├── solutions/page.tsx             # Solar & EV Solutions Page
│   ├── about/page.tsx                 # About Us Page
│   ├── brands/page.tsx                # Brands & Technology Directory Page
│   ├── contact/page.tsx               # Contact & Lead Enquiry Page
│   ├── privacy-policy/page.tsx        # Privacy Policy Page
│   ├── terms/page.tsx                 # Terms & Conditions Page
│   ├── not-found.tsx                  # Custom 404 Page
│   ├── sitemap.ts                     # Dynamic XML Sitemap
│   ├── robots.ts                      # Dynamic Robots.txt
│   └── api/
│       └── contact/route.ts           # Server Action / API Route Handler
├── components/
│   ├── layout/
│   │   ├── Header.tsx                 # Responsive Header with Navigation
│   │   ├── Footer.tsx                 # Footer with Virgin Power attribution
│   │   ├── AnnouncementBar.tsx        # Top Bar
│   │   ├── MobileNav.tsx              # Animated Drawer Menu
│   │   └── StickyMobileActionBar.tsx  # Mobile Call / WhatsApp / Enquire Bar
│   ├── home/
│   │   ├── HeroSection.tsx            # Split Hero with badges & CTAs
│   │   ├── TrustHighlights.tsx        # 4 Key Trust Cards
│   │   ├── ServicesOverview.tsx       # Interactive Service Cards
│   │   ├── WhyUsSection.tsx           # Asymmetrical Value Proposition
│   │   ├── ProcessTimeline.tsx        # 5-step process timeline
│   │   ├── SolarEstimator.tsx         # Interactive Lead Generator Calculator
│   │   ├── BrandsSection.tsx          # Clean Responsive Brand Grid
│   │   ├── ResidentialCommercialPanels.tsx # Split segment panels
│   │   ├── EVChargingSection.tsx      # Dark EV Feature Section
│   │   ├── PartnershipSection.tsx     # Virgin Power Relationship
│   │   ├── ServiceAreaSection.tsx     # Kozhikode & Wayanad Coverage
│   │   ├── FAQAccordionSection.tsx    # Accessible FAQ Accordion
│   │   └── FinalCTA.tsx               # Final Conversion Banner
│   ├── solutions/                     # Solutions Page Modules
│   ├── forms/
│   │   └── ContactForm.tsx            # React Hook Form + Zod Lead Form
│   └── ui/                            # Reusable UI Primitives (Logo, Button, Badge, Accordion)
├── config/                            # Centralized Typed Configuration Layer
│   ├── site.ts                        # Master site metadata & contact placeholders
│   ├── navigation.ts                  # Header & Footer Navigation Links
│   ├── services.ts                    # Detailed service definitions
│   ├── brands.ts                      # Verified brand catalog
│   ├── calculator.ts                  # Estimator formulas & disclaimers
│   ├── faqs.ts                        # Frequently Asked Questions data
│   └── images.ts                      # Centralized Image Manifest
└── lib/
    ├── validation/contact.ts          # Zod Form Schema (Indian/International formats)
    ├── email/provider.ts              # Resend Email Provider Adapter
    └── seo/structuredData.ts          # JSON-LD Schemas (Org, LocalBusiness, FAQ)
```

---

## 🛠️ Development & Deployment Setup

### 1. Installation

```bash
# Clone repository and install dependencies
pnpm install
```

### 2. Run Local Development Server

```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Type Checking

```bash
# Type check TypeScript
pnpm tsc --noEmit

# Run ESLint
pnpm lint

# Production Build
pnpm build

# Start Production Server
pnpm start
```

---

## ⚙️ Centralized Customization Guide

### 1. How to Replace the Logo
Open [`src/components/ui/Logo.tsx`](file:///c:/MIB/soulpowerenergies.in/src/components/ui/Logo.tsx). The component currently renders a temporary text logo with a custom SVG sun emblem. When the official logo arrives, replace the SVG icon or insert an `<Image />` component referencing the brand asset.

### 2. How to Update Contact Placeholders
Open [`src/config/site.ts`](file:///c:/MIB/soulpowerenergies.in/src/config/site.ts). Update the `contact` object:
```typescript
contact: {
  phone: "+91 98765 43210",       // Replace null with official phone number
  whatsapp: "919876543210",       // Replace null with WhatsApp number
  email: "info@soulpowerenergies.in", // Replace null with official email
  address: {
    street: "Main Road",
    town: "Thiruvambady",
    district: "Kozhikode",
    state: "Kerala",
    pincode: "673603",
    formatted: "Thiruvambady, Kozhikode, Kerala - 673603"
  }
}
```

### 3. How to Configure Form Email Notifications
1. Sign up for a free account on [Resend](https://resend.com).
2. Create an API Key.
3. Create a `.env.local` file in the project root:
   ```env
   RESEND_API_KEY=re_123456789...
   CONTACT_NOTIFICATION_EMAIL=leads@soulpowerenergies.in
   ```
4. If `RESEND_API_KEY` is not provided, the contact form will automatically run in development mode, logging all validated lead payloads directly to the server console.

### 4. How to Update Solar Estimator Assumptions
Open [`src/config/calculator.ts`](file:///c:/MIB/soulpowerenergies.in/src/config/calculator.ts) to adjust tariff rates, daily kWh generation estimates per kW, or disclaimer text.

---

## 🔒 Content Accuracy & Compliance Rules

1. **Partnership Attribution**: Soul Power Energies is accurately described as an authorized partner of *Virgin Power and Engineering Pvt. Ltd.* Certifications (KSEB, ANERT, MNRE, CII) are attributed strictly to Virgin Power.
2. **Battery Energy Storage**: Presented exclusively with a **"Coming Soon"** badge and early interest registration form.
3. **No Synthetic Data**: Case studies, ratings, customer numbers, and fake testimonials are omitted; empty state notices are used instead.

---

## 📄 License
Private & Proprietary — Soul Power Energies. All rights reserved.
