/** Numeric pricing only — labels live in messages/{de,en}.ts */
export const pricingAmounts = {
  tiers: [
    { id: "starter", highlight: false, credits: 1, priceChf: 89 },
    {
      id: "focus",
      highlight: true,
      credits: 5,
      priceChf: 425,
      pricePerLessonChf: 85,
      savingsChf: 20,
    },
    {
      id: "excellence",
      highlight: false,
      credits: 10,
      priceChf: 790,
      pricePerLessonChf: 79,
      savingsChf: 100,
    },
  ],
} as const;
