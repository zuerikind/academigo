"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SignUpCtaGroup } from "@/components/layout/SignUpCtaGroup";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DashboardMockup } from "@/components/ui/DashboardMockup";
import { TrustStats } from "@/components/ui/TrustStats";
import { localePath } from "@/lib/i18n/navigation";
import { siteConfig } from "@/config/site";
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
          className="h-px w-6 bg-[color-mix(in_srgb,var(--brand)_50%,transparent)]"
        />
        {hero.eyebrow}
      </p>
      <h1 className="text-hero mt-5 text-academy-navy">{hero.title}</h1>
      <p className="text-lead mt-5">{hero.lead}</p>
      <p className="text-body mt-4">{hero.subjects}</p>
      <p className="text-body mt-2">{hero.location}</p>

      <div className="mt-9 rounded-2xl border-2 border-academy-line bg-white p-5 shadow-card sm:p-6">
        <p className="text-sm font-semibold text-academy-navy">
          {common.heroCtaTitle}
        </p>
        <p className="text-caption mt-1">{common.heroCtaSubtitle}</p>
        <div className="mt-5">
          <SignUpCtaGroup
            locale={locale}
            labels={{
              student: common.buttons.signUpStudent,
              teacher: common.buttons.signUpTeacher,
            }}
            vertical
          />
        </div>
        <div className="mt-4 border-t border-academy-line pt-4">
          <Button
            href={`${localePath(locale)}${siteConfig.links.pricesAnchor}`}
            variant="outline"
            size="md"
            fullWidth
          >
            {common.buttons.viewPricing}
          </Button>
        </div>
      </div>

      <div className="mt-10 border-t border-academy-line pt-8">
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
    <section className="relative isolate overflow-hidden border-b border-academy-line bg-academy-paper-soft">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_55%_at_90%_0%,rgba(43,85,133,0.1),transparent_55%)]"
      />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        {reducedMotion ? (
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <HeroCopy dict={dict} locale={locale} />
            <div className="w-full lg:max-w-[560px] lg:justify-self-end">
              <DashboardMockup
                variant="hero"
                dashboard={dict.dashboard}
                heroImageAlt={dict.meta.heroImageAlt}
              />
            </div>
          </div>
        ) : (
          <motion.div
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <HeroCopy dict={dict} locale={locale} />
            </motion.div>
            <motion.div
              className="w-full lg:max-w-[560px] lg:justify-self-end"
              variants={fadeUp}
            >
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
