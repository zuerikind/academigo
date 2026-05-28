/** Numeric pricing only — labels live in messages/{de,en}.ts */
export const pricingAmounts = {
  lessons: [
    {
      id: "single",
      priceChf: 70,
      durationMin: 50,
      perLessonChf: null as number | null,
      highlight: false,
    },
    {
      id: "pack5",
      priceChf: 325,
      durationMin: 50,
      perLessonChf: 65,
      highlight: true,
    },
    {
      id: "pack10",
      priceChf: 620,
      durationMin: 50,
      perLessonChf: 62,
      highlight: false,
    },
  ],
  platform: {
    priceChf: 50,
  },
} as const;
