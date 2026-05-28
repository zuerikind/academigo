"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DashboardMockup } from "@/components/ui/DashboardMockup";
import { TrustStats } from "@/components/ui/TrustStats";
import { appSignupUrl } from "@/lib/app-links";
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
      <p className="text-meta-brand inline-flex items-center gap-2.5">
        <span
          aria-hidden
          className="h-px w-6 bg-[color:var(--brand)]/45"
        />
        {hero.eyebrow}
      </p>
      <h1 className="text-hero mt-7 text-academy-navy">
        {hero.title}
      </h1>
      <p className="text-lead mt-6">{hero.lead}</p>
      <p className="text-body mt-4">{hero.subjects}</p>
      <p className="text-body mt-2">{hero.location}</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          href={appSignupUrl(locale, "student")}
          external
          variant="accent"
          size="lg"
        >
          {common.buttons.signUpStudent}
        </Button>
        <Button
          href={appSignupUrl(locale, "teacher")}
          external
          variant="secondary"
          size="lg"
        >
          {common.buttons.signUpTeacher}
        </Button>
        <Button
          href={`${localePath(locale)}${siteConfig.links.pricesAnchor}`}
          variant="outline"
          size="lg"
        >
          {common.buttons.viewPricing}
        </Button>
      </div>
      <div className="mt-12 border-t border-academy-line pt-8">
        <TrustStats items={hero.trust} />
      </div>
    </div>
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
    <section className="relative isolate overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_60%_at_85%_-10%,rgba(43,85,133,0.07),transparent_60%)]"
      />
      <Container className="relative py-16 sm:py-24 lg:py-28">
        {reducedMotion ? (
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <HeroCopy dict={dict} locale={locale} />
            <div className="w-full lg:justify-self-end">
              <DashboardMockup
                variant="hero"
                dashboard={dict.dashboard}
                heroImageAlt={dict.meta.heroImageAlt}
              />
            </div>
          </div>
        ) : (
          <motion.div
            className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <HeroCopy dict={dict} locale={locale} />
            </motion.div>
            <motion.div className="w-full lg:justify-self-end" variants={fadeUp}>
              <DashboardMockup
                variant="hero"
                dashboard={dict.dashboard}
                heroImageAlt={dict.meta.heroImageAlt}
              />
            </motion.div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
