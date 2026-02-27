export type Project = {
  slug: string;
  title: string;
  location: string;
  country?: string;
  year?: string;
  type?: string;
  description: string;
  tagline?: string;
  image: string;
  images?: string[];
  details?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "villa-eos",
    title: "Villa Eos",
    location: "Mykonos",
    country: "Greece",
    year: "2023",
    type: "Residential",
    description:
      "A monolithic structure carved from the landscape itself, Villa Eos redefines island living through shadow, light, and silence. Perched on the Cycladic cliffs, this residence embraces the Mediterranean sun while offering refuge from its intensity. White stucco walls and dark-framed glass create a striking dialogue between solid and void, inviting the Aegean horizon into every room.",
    image: "/images/duna-1.png",
    details: ["Cycladic Modernism", "4,200 sq ft", "Private pool", "Ocean views"],
  },
  {
    slug: "casa-arena",
    title: "Casa Arena",
    location: "Cabo San Lucas",
    country: "Mexico",
    tagline: "Where the desert meets the sea.",
    description:
      "Blurring the boundaries between indoor luxury and the raw beauty of the Baja peninsula. Casa Arena rises from the sand with walls of local stone and floor-to-ceiling glass that frame the endless Pacific. The architecture responds to the desert heat with deep overhangs and courtyards that channel ocean breezes through every space.",
    image: "/images/duna-2.png",
    details: ["Desert contemporary", "6,500 sq ft", "Infinity pool", "Beach access"],
  },
  {
    slug: "dune-retreat",
    title: "The Dune Retreat",
    location: "Dubai",
    country: "UAE",
    description:
      "A sanctuary composed of sand, stone, and water. An architectural response to the infinite desert horizon. The Dune Retreat reimagines the traditional spa as a sequence of contemplative spaces—each opening to the sky, each grounded in the earth. Local limestone and recycled glass create a palette that shifts with the desert light.",
    image: "/images/duna-3.png",
    details: ["Spa & Wellness", "12,000 sq ft", "2024"],
  },
  {
    slug: "villa-sereno",
    title: "Villa Sereno",
    location: "Lake Como",
    country: "Italy",
    description:
      "A lakeside retreat that honors the timeless elegance of the Italian villa while embracing contemporary comfort. Stone columns and arched openings frame views of the water, while interiors of warm timber and cool marble create spaces of quiet refinement.",
    image: "/images/duna-4.png",
    details: ["Lakeside residence", "Indoor pool", "Stone & marble"],
  },
  {
    slug: "arch-house",
    title: "Arch House",
    location: "Tuscany",
    country: "Italy",
    year: "2022",
    type: "Restoration",
    description:
      "Restoring the soul of a 17th-century estate with minimalist interventions that honor the passage of time. Arch House weaves contemporary insertions into historic stone walls, creating a dialogue between centuries. High ceilings and arched openings preserve the grandeur of the original structure.",
    image: "/images/duna-5.png",
    details: ["Historic Preservation", "17th-century estate", "Minimalist restoration"],
  },
  {
    slug: "stone-sanctuary",
    title: "Stone Sanctuary",
    location: "Kyoto",
    country: "Japan",
    description:
      "A private commission that draws on the principles of Japanese spatial design. Stone, wood, and light create a sequence of contemplative spaces. The indoor pool becomes a meditative courtyard, surrounded by walls that filter the changing seasons.",
    image: "/images/duna-6.png",
    details: ["Private Commission", "Indoor pool sanctuary", "Japanese influence"],
  },
  {
    slug: "light-pavilion",
    title: "Light Pavilion",
    location: "Copenhagen",
    country: "Denmark",
    description:
      "An exploration of transparency and structure. The Light Pavilion serves as a cultural beacon in the harbor district. Utilizing recycled glass and steel to create a sustainable landmark, the building responds to the Nordic light with facades that shift from reflective to transparent throughout the day.",
    image: "/images/duna-7.png",
    details: ["Cultural landmark", "Recycled materials", "Harbor district"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
