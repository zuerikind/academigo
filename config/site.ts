export const siteConfig = {
  brand: "Academigo",
  domain: "https://academigo.xyz",

  links: {
    whatsapp: "https://wa.me/41786936898",
    platform: "https://platform.mathetogo.xyz",
    consultation: "https://wa.me/41786936898",
    email: "mailto:omid@mathetogo.xyz",
    pricesAnchor: "#pricing",
  },

  features: {
    teachers: false,
    locations: false,
    booking: false,
    stripe: false,
    parentDashboard: false,
    teacherMatching: false,
    platformIntegration: false,
  },

  future: {
    teachers: [] as { id: string; name: string; subjects: string[] }[],
    locations: [] as { id: string; city: string; address?: string }[],
  },
} as const;

export type SiteConfig = typeof siteConfig;
