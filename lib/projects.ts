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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtQI0a2PhYK8P1nS1bJ7I9l4USO37oKeI2Yo6tSgpXlPEU8Gd6DW7Fzwce7wy2H2Rmbb477ryT22CeEJWcRaHg9dkvLwyG6dyZIOSL-78a0d5Ls1aII-oMIVA9QADF-CdAh87FLULzj1YxYwBC3lo83qB0XcOFg-7tTQPqC8HeIpgdtA9n-R4magvveBKEh1Uz2AtW4l4mRKwRA0-lOQOenV1PwZc1y1X4y-HbdQb6gNbZZbX8fzj_b3GVsRgffSPyuYbba59ryFPg",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-jGpVpX5HFI1iRBzJILky-y4E1bpXEYX1gAinAZw9v8kEUbAQRW15Kjs8xUBvdlzuh7WRGDCsW_SGiYeF1ydzKbQFwFMVgp40szFNwN9sFZhHdC17v4m9pRNgtIQ-ICLOZ5RWj-EYeF0EHOanRJko0gmOpybh4zVi1Kju3CRzwPJPhgyVtv079H9cRSZmnmMrWSyZmxXt-0Om2T3ONhsXrpenUoCafrKF38gpYAVs21kqFK6OuCMaXuO7LiZu3lmkf2_rX18_m0nG",
    details: ["Desert contemporary", "6,500 sq ft", "Infinity pool", "Beach access"],
  },
  {
    slug: "dune-retreat",
    title: "The Dune Retreat",
    location: "Dubai",
    country: "UAE",
    description:
      "A sanctuary composed of sand, stone, and water. An architectural response to the infinite desert horizon. The Dune Retreat reimagines the traditional spa as a sequence of contemplative spaces—each opening to the sky, each grounded in the earth. Local limestone and recycled glass create a palette that shifts with the desert light.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCApuCYuvgTuVS2fFWA5tyDHUNTjbA0yuU3qAIn8Sf0cpQ22TTSNVxqxD3EnfvTjlCyj3BHo8f6EyeQNmaIpJ_Id_0GSPc2pw2-nYua5wezChpHA8GmMRxz8z-GVhpayElfaPd-2d8pTzhyLbnxw7k4foKQxdNOeBHd62Fb-BFmjV1C4HRQWc9c2UesmdAvyGA06zrgFBSqGDPxpH0KbxE1koPzURFvcyB90ovLJJ9w3iiZp2DwTCDggu3f-ftrqs5XFmB-MW29AVAM",
    details: ["Spa & Wellness", "12,000 sq ft", "2024"],
  },
  {
    slug: "villa-sereno",
    title: "Villa Sereno",
    location: "Lake Como",
    country: "Italy",
    description:
      "A lakeside retreat that honors the timeless elegance of the Italian villa while embracing contemporary comfort. Stone columns and arched openings frame views of the water, while interiors of warm timber and cool marble create spaces of quiet refinement.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDE-ktWGq6Jsjr-bOqaReTb-VwVcrBe-H3EeQvefJDMOSwJVZiIR7hS6itI1OC85ljyDnauisConRfLu1i2O1m6e5sKigZMSWR26heJZJLHa7o1SEbmMfrXvEKsOYV0xOSuoRuvWoDA5Mf2RZdd4vrxlM9vAj5ibeDDV16q-4DAYquzm_gCJddG6hwFkEwmLW1sJUW-WuTub8u0h-_2McnJ5sirKw0eYnLgXReZg4LF8qj0g4UWJMx82Wuy0IeIsVuRvfsLgHo3KUl4",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDo0vZRlJU-II4ivrG5-j2ZB6_CFW0jqtbctfYW3HKmuGqXQyDG3F-4I1_Ds_cQghq17vAI-B_0cfcpnrWswbT0fmztwQni9K5YzMvwBHgecEIyiUsQFyakAhQddRRA2k4RLVtMQ9KRsE15IOKelWKVqlFYo4dXSFqT22hhX6zCHwxm4Qf6NyfrpsQ5saQNO0kFECqlRmUdQHiZhLIAE7sukQwdvuU2JL1tMyWNCYNTvdoZDJO0kI9DMvMb2GarpTw8KU_Jc52UqdM",
    details: ["Historic Preservation", "17th-century estate", "Minimalist restoration"],
  },
  {
    slug: "stone-sanctuary",
    title: "Stone Sanctuary",
    location: "Kyoto",
    country: "Japan",
    description:
      "A private commission that draws on the principles of Japanese spatial design. Stone, wood, and light create a sequence of contemplative spaces. The indoor pool becomes a meditative courtyard, surrounded by walls that filter the changing seasons.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDE-ktWGq6Jsjr-bOqaReTb-VwVcrBe-H3EeQvefJDMOSwJVZiIR7hS6itI1OC85ljyDnauisConRfLu1i2O1m6e5sKigZMSWR26heJZJLHa7o1SEbmMfrXvEKsOYV0xOSuoRuvWoDA5Mf2RZdd4vrxlM9vAj5ibeDDV16q-4DAYquzm_gCJddG6hwFkEwmLW1sJUW-WuTub8u0h-_2McnJ5sirKw0eYnLgXReZg4LF8qj0g4UWJMx82Wuy0IeIsVuRvfsLgHo3KUl4",
    details: ["Private Commission", "Indoor pool sanctuary", "Japanese influence"],
  },
  {
    slug: "light-pavilion",
    title: "Light Pavilion",
    location: "Copenhagen",
    country: "Denmark",
    description:
      "An exploration of transparency and structure. The Light Pavilion serves as a cultural beacon in the harbor district. Utilizing recycled glass and steel to create a sustainable landmark, the building responds to the Nordic light with facades that shift from reflective to transparent throughout the day.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkYBOet83EH2yCukxJPq4SjPtllXkYUO6yKKmTh5CCUP14gh_JdaBP3VucSxmXzywxztMNbVqEfUgS19Lg17e3BKMqmrigm2xb-I4jhA5DRdMtqtpBm39Au3ak4tAijhfOfepbpAd6DwLa8RgakceCRD4ft-wUep4Y-Vm3Cs5-ua54yneutm3GZUl9haw1SiUUFR_cvSwJxyaUEX3Pp8bCeG-DFLsEo6psvWvqHxvKw7T6jKjtq1kMOf0sQ9dGkvO8RKbqNDLrPep6",
    details: ["Cultural landmark", "Recycled materials", "Harbor district"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
