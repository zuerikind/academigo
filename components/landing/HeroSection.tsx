"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SignUpCtaGroup } from "@/components/layout/SignUpCtaGroup";
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
          className="h-px w-6 bg-[color:var(--brand)]/45"
        />
        {hero.eyebrow}
      </p>
      <h1 className="text-hero mt-6 text-academy-navy">{hero.title}</h1>
      <p className="text-lead mt-5">{hero.lead}</p>
      <p className="text-body mt-4">{hero.subjects}</p>
      <p className="text-body mt-2">{hero.location}</p>

      <div className="mt-9">
        <SignUpCtaGroup
          locale={locale}
          labels={{
            student: common.buttons.signUpStudent,
            teacher: common.buttons.signUpTeacher,
          }}
        />
        <p className="mt-4">
          <Link
            href={`${localePath(locale)}${siteConfig.links.pricesAnchor}`}
            className="text-sm font-medium text-[color:var(--brand-deep)] link-underline"
          >
            {common.buttons.viewPricing}
          </Link>
        </p>
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
        className="pointer-events-none absolute inset-0 [background:radial-gradient(75%_55%_at_90%_0%,rgba(43,85,133,0.08),transparent_55%)]"
      />
      <Container className="relative py-14 sm:py-20 lg:py-24">
        {reducedMotion ? (
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <HeroCopy dict={dict} locale={locale} />
            <div className="w-full lg:max-w-[540px] lg:justify-self-end">
              <DashboardMockup
                variant="hero"
                dashboard={dict.dashboard}
                heroImageAlt={dict.meta.heroImageAlt}
              />
            </div>
          </div>
        ) : (
          <motion.div
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <HeroCopy dict={dict} locale={locale} />
            </motion.div>
            <motion.div
              className="w-full lg:max-w-[540px] lg:justify-self-end"
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
