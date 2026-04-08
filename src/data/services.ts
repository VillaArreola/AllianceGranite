export type ServiceItem = {
  id: string;
  title: string;
  short: string;
  details: string;
};

export type ServiceStep = {
  step: string;
  title: string;
  description: string;
};

export type ServiceArea = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const serviceItems: ServiceItem[] = [
  {
    id: "consultation",
    title: "Consultation",
    short: "Clear recommendations for style, use, and budget.",
    details:
      "We help you compare granite, quartz, and marble options based on your layout, finish preferences, and daily use so you can choose with confidence."
  },
  {
    id: "templating-fabrication",
    title: "Templating & Fabrication",
    short: "Precise measurements and clean shop work.",
    details:
      "Our team templates your space accurately and fabricates each piece with careful edge finishing, cutouts, and seam planning for a clean final result."
  },
  {
    id: "installation",
    title: "Installation",
    short: "Fast, careful install with detail-focused finishing.",
    details:
      "Installation is scheduled around your project timeline, with careful placement, leveling, and final walkthrough before completion."
  },
  {
    id: "project-support",
    title: "Project Support",
    short: "Responsive communication from quote to completion.",
    details:
      "You get clear updates, realistic timing, and local support throughout the process so nothing feels uncertain or delayed."
  }
];

export const serviceSteps: ServiceStep[] = [
  {
    step: "01",
    title: "Share Your Project",
    description: "Tell us your space, goals, and preferred style."
  },
  {
    step: "02",
    title: "Choose Materials",
    description: "Review options with guidance on look, durability, and budget."
  },
  {
    step: "03",
    title: "Schedule Install",
    description: "Approve final details and we complete fabrication and installation."
  }
];

export const serviceAreas: ServiceArea[] = [
  {
    id: "kitchens",
    title: "Kitchens",
    description: "Full countertop planning and installation tailored to daily cooking and entertaining.",
    image: "/images/gallery-1.jpg",
    alt: "Granite kitchen countertop installation"
  },
  {
    id: "islands",
    title: "Kitchen Islands",
    description: "Large-format island fabrication with careful seam planning and edge detailing.",
    image: "/images/services/islan.png",
    alt: "Stone kitchen island with polished edge"
  },
  {
    id: "vanities",
    title: "Vanities",
    description: "Bathroom vanity tops cut for sinks, fixtures, and clean moisture-ready finishes.",
    image: "/images/gallery-3.jpg",
    alt: "Bathroom vanity with stone top"
  },
  {
    id: "backsplashes",
    title: "Backsplashes",
    description: "Stone backsplash solutions that tie your wall surface into the countertop design.",
    image: "/images/gallery-4.jpg",
    alt: "Kitchen backsplash detail in natural stone"
  },
  {
    id: "countertops",
    title: "Countertops",
    description: "Granite, quartz, and marble countertop fabrication for residential and commercial spaces.",
    image: "/images/gallery-5.jpg",
    alt: "Quartz countertop surface close-up"
  },
  {
    id: "breakfast-bars",
    title: "Breakfast Bars",
    description: "Integrated breakfast bar surfaces designed for comfort, durability, and style.",
    image: "/images/gallery-6.jpg",
    alt: "Breakfast bar stone overhang seating area"
  }
];
