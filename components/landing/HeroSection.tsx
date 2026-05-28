"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrandMark } from "@/components/brand/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DashboardMockup } from "@/components/ui/DashboardMockup";
import { TrustStats } from "@/components/ui/TrustStats";
import { siteConfig } from "@/config/site";
import { localePath } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/config";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { Dictionary } from "@/messages/types";

function HeroCopy({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const { hero, common } = dict;

  return (
    <div className="max-w-xl">
      <div className="flex items-center gap-3">
        <BrandMark
          brandName={common.brand}
          size={40}
          appearance="dark"
        />
        <p className="text-sm font-semibold uppercase tracking-widest text-academy-gold">
          {hero.eyebrow}
        </p>
      </div>
      <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
        {hero.title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-white/80">{hero.lead}</p>
      <p className="mt-4 text-base leading-relaxed text-white/70">
        {hero.subjects}
      </p>
      <p className="mt-2 text-base text-white/70">{hero.location}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href={siteConfig.links.consultation} external variant="accent">
          {common.buttons.freeConsultation}
        </Button>
        <Button
          href={`${localePath(locale)}${siteConfig.links.pricesAnchor}`}
          variant="outline"
        >
          {common.buttons.viewPricing}
        </Button>
      </div>
      <div className="mt-10">
        <TrustStats items={hero.trust} />
      </div>
    </div>
  );
}

function HeroBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-academy-gold/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        aria-hidden
      />
    </>
  );
}

export function HeroSection({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-academy-navy py-20 sm:py-28">
      <HeroBackground />
      <Container>
        {reducedMotion ? (
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <HeroCopy dict={dict} locale={locale} />
            <div className="w-full lg:max-w-lg lg:justify-self-end">
              <DashboardMockup variant="hero" dashboard={dict.dashboard} />
            </div>
          </div>
        ) : (
          <motion.div
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <HeroCopy dict={dict} locale={locale} />
            </motion.div>
            <motion.div
              className="w-full lg:max-w-lg lg:justify-self-end"
              variants={fadeUp}
            >
              <DashboardMockup variant="hero" dashboard={dict.dashboard} />
            </motion.div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
