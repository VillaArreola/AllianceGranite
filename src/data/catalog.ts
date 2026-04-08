export type StoneType = "Granite" | "Quartz" | "Marble";

export type Collection = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  stoneSlugs: string[];
};

export type Stone = {
  id: string;
  slug: string;
  name: string;
  type: StoneType;
  origin: string;
  collectionId: string;
  image: string;
  tone: string;
  description: string;
  finishes: string[];
  applications: string[];
};

export const collections: Collection[] = [
  {
    id: "classic-granite",
    slug: "classic-granite",
    name: "Classic Granite",
    tagline: "Natural movement and timeless structure",
    description:
      "A curated granite line with dramatic veining and high durability for premium kitchens and social spaces.",
    image: "/images/gallery-7.jpg",
    stoneSlugs: ["black-galaxy", "blue-bahia", "imperial-silver"]
  },
  {
    id: "signature-quartz",
    slug: "signature-quartz",
    name: "Signature Quartz",
    tagline: "Engineered calm with refined elegance",
    description:
      "Low-porosity quartz surfaces designed for modern lifestyles, with soft whites and controlled patterns.",
    image: "/images/gallery-3.jpg",
    stoneSlugs: ["carrara-quartz", "arctic-cloud", "linen-sand"]
  },
  {
    id: "atelier-marble",
    slug: "atelier-marble",
    name: "Atelier Marble",
    tagline: "Statement slabs with sculptural depth",
    description:
      "Hand-selected marble with expressive character, ideal for feature islands, vanities and custom details.",
    image: "/images/gallery-5.jpg",
    stoneSlugs: ["calacatta-gold", "ivory-vein"]
  }
];

export const stones: Stone[] = [
  {
    id: "st-01",
    slug: "calacatta-gold",
    name: "Calacatta Gold",
    type: "Marble",
    origin: "Italy",
    collectionId: "atelier-marble",
    image: "/images/gallery-1.jpg",
    tone: "Warm White",
    description: "Soft ivory field with warm golden veining and elegant movement.",
    finishes: ["Polished", "Honed"],
    applications: ["Kitchen islands", "Bathroom vanities", "Feature walls"]
  },
  {
    id: "st-02",
    slug: "black-galaxy",
    name: "Black Galaxy",
    type: "Granite",
    origin: "India",
    collectionId: "classic-granite",
    image: "/images/gallery-2.jpg",
    tone: "Deep Black",
    description: "Dense black granite with subtle reflective minerals for bold contrast.",
    finishes: ["Polished", "Leathered"],
    applications: ["Countertops", "Bars", "Fireplace surrounds"]
  },
  {
    id: "st-03",
    slug: "carrara-quartz",
    name: "Carrara Quartz",
    type: "Quartz",
    origin: "Engineered Surface",
    collectionId: "signature-quartz",
    image: "/images/gallery-3.jpg",
    tone: "Cool White",
    description: "Clean white quartz with subtle gray veining and balanced pattern.",
    finishes: ["Polished", "Suede"],
    applications: ["Kitchen countertops", "Backsplashes", "Laundry tops"]
  },
  {
    id: "st-04",
    slug: "blue-bahia",
    name: "Blue Bahia",
    type: "Granite",
    origin: "Brazil",
    collectionId: "classic-granite",
    image: "/images/gallery-4.jpg",
    tone: "Royal Blue",
    description: "Rare blue granite with rich mineral texture and luxurious visual impact.",
    finishes: ["Polished"],
    applications: ["Statement islands", "Reception desks", "Accent walls"]
  },
  {
    id: "st-05",
    slug: "ivory-vein",
    name: "Ivory Vein",
    type: "Marble",
    origin: "Turkey",
    collectionId: "atelier-marble",
    image: "/images/gallery-6.jpg",
    tone: "Ivory Beige",
    description: "Subtle beige marble with linear veins for soft, calm interiors.",
    finishes: ["Honed", "Brushed"],
    applications: ["Vanities", "Shower walls", "Floating shelves"]
  },
  {
    id: "st-06",
    slug: "imperial-silver",
    name: "Imperial Silver",
    type: "Granite",
    origin: "Brazil",
    collectionId: "classic-granite",
    image: "/images/gallery-8.jpg",
    tone: "Silver Gray",
    description: "Multi-tone silver granite with layered movement and refined depth.",
    finishes: ["Polished", "Flamed"],
    applications: ["Outdoor kitchens", "Countertops", "Stair treads"]
  },
  {
    id: "st-07",
    slug: "arctic-cloud",
    name: "Arctic Cloud",
    type: "Quartz",
    origin: "Engineered Surface",
    collectionId: "signature-quartz",
    image: "/images/gallery-5.jpg",
    tone: "Soft White",
    description: "Light quartz body with delicate cloud veining and low visual noise.",
    finishes: ["Polished"],
    applications: ["Open kitchens", "Island waterfalls", "Commercial counters"]
  },
  {
    id: "st-08",
    slug: "linen-sand",
    name: "Linen Sand",
    type: "Quartz",
    origin: "Engineered Surface",
    collectionId: "signature-quartz",
    image: "/images/gallery-7.jpg",
    tone: "Warm Beige",
    description: "Warm neutral quartz with a sand-like texture and minimal pattern.",
    finishes: ["Matte", "Polished"],
    applications: ["Family kitchens", "Mudrooms", "Custom furniture tops"]
  }
];

export const getCollectionById = (id: string) =>
  collections.find((collection) => collection.id === id);

export const getStoneBySlug = (slug: string) =>
  stones.find((stone) => stone.slug === slug);
