/** Numeric pricing only — labels live in messages/{de,en}.ts */
export const pricingAmounts = {
  tiers: [
    {
      id: "essentials",
      highlight: false,
      options: [
        { id: "single", priceChf: 79 },
        { id: "pack5", priceChf: 375 },
        { id: "pack10", priceChf: 690 },
      ],
    },
    {
      id: "plus",
      priceChf: 299,
      highlight: true,
    },
    {
      id: "excellence",
      priceChf: 549,
      highlight: false,
    },
  ],
} as const;
