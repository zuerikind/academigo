export const siteConfig = {
  brand: "Academigo",
  domain: "https://academigo.xyz",

  seo: {
    email: "omid@mathetogo.xyz",
    telephone: "+41786936898",
    sameAs: [
      "https://platform.mathetogo.xyz",
      "https://wa.me/41786936898",
    ],
  },

  links: {
    /** App (marketplace). Override with NEXT_PUBLIC_APP_ORIGIN in Vercel. */
    appOrigin:
      process.env.NEXT_PUBLIC_APP_ORIGIN ?? "https://www.app.academigo.xyz",
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
