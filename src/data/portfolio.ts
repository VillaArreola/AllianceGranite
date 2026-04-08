export type Project = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  location: string;
  completedAt: string;
  heroImage: string;
  galleryImages: string[];
  summary: string;
  scope: string[];
  materials: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "pr-01",
    slug: "lower-gwynedd-waterfall-kitchen",
    title: "Lower Gwynedd Waterfall Kitchen",
    tagline: "A bright kitchen centered on a full-height island.",
    location: "Lower Gwynedd, PA",
    completedAt: "2025-11",
    heroImage: "/images/gallery-1.jpg",
    galleryImages: ["/images/gallery-2.jpg", "/images/gallery-7.jpg", "/images/gallery-3.jpg"],
    summary:
      "Full renovation with a waterfall island and perimeter counters. The final palette was designed to maximize natural light while keeping high daily durability.",
    scope: [
      "Site measurement and templating",
      "Island waterfall fabrication",
      "Perimeter counter installation",
      "Final sealing and quality check"
    ],
    materials: ["calacatta-gold", "carrara-quartz"],
    featured: true
  },
  {
    id: "pr-02",
    slug: "doylestown-luxury-bath-suite",
    title: "Doylestown Luxury Bath Suite",
    tagline: "Soft marble tones for a spa-style master bathroom.",
    location: "Doylestown, PA",
    completedAt: "2025-09",
    heroImage: "/images/gallery-6.jpg",
    galleryImages: ["/images/gallery-5.jpg", "/images/gallery-1.jpg", "/images/gallery-4.jpg"],
    summary:
      "Custom vanity surfaces and shower accents with seamless transitions. Designed for visual calm, moisture resistance and easy long-term maintenance.",
    scope: [
      "Vanity tops and backsplashes",
      "Shower accent walls",
      "Niche and shelf cut details",
      "Moisture-safe finish selection"
    ],
    materials: ["ivory-vein", "calacatta-gold"],
    featured: true
  },
  {
    id: "pr-03",
    slug: "wayne-modern-entertaining-bar",
    title: "Wayne Modern Entertaining Bar",
    tagline: "Bold dark stone with a clean contemporary profile.",
    location: "Wayne, PA",
    completedAt: "2025-08",
    heroImage: "/images/gallery-2.jpg",
    galleryImages: ["/images/gallery-8.jpg", "/images/gallery-4.jpg", "/images/gallery-3.jpg"],
    summary:
      "A residential bar build with high-contrast finishes and precise edge work. The project emphasizes impact, stain resistance and smooth serving workflow.",
    scope: [
      "Counter and bar-top fabrication",
      "Integrated sink cutout",
      "Back wall stone feature",
      "Protective final finish"
    ],
    materials: ["black-galaxy", "imperial-silver"],
    featured: true
  },
  {
    id: "pr-04",
    slug: "chestnut-hill-open-kitchen-refresh",
    title: "Chestnut Hill Open Kitchen Refresh",
    tagline: "Warm quartz tones to unify an open-plan layout.",
    location: "Chestnut Hill, PA",
    completedAt: "2025-07",
    heroImage: "/images/gallery-7.jpg",
    galleryImages: ["/images/gallery-3.jpg", "/images/gallery-5.jpg", "/images/gallery-8.jpg"],
    summary:
      "Kitchen and pantry surfaces updated with low-maintenance quartz. The result balances warmth, clean lines and practical day-to-day performance.",
    scope: [
      "Kitchen and pantry counters",
      "Backsplash coordination",
      "Appliance edge alignment",
      "Final fit and finish"
    ],
    materials: ["linen-sand", "arctic-cloud"],
    featured: true
  }
];

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
