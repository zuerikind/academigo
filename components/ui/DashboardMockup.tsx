"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { Dictionary } from "@/messages/types";
import { cn } from "@/lib/utils";

type Variant = "hero" | "platform";
type TabId = "overview" | "quiz" | "aufgaben" | "leaderboard";

const screenshotMap: Record<TabId, string> = {
  overview: "/screenshots/student-dashboard-overview.png",
  quiz: "/screenshots/student-dashboard-quiz.png",
  aufgaben: "/screenshots/student-dashboard-aufgaben.png",
  leaderboard: "/screenshots/student-dashboard-bestenliste-abzeichen.png",
};

export function DashboardMockup({
  variant = "hero",
  dashboard,
  heroImageAlt,
}: {
  variant?: Variant;
  dashboard: Dictionary["dashboard"];
  heroImageAlt?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative w-full min-w-0"
      animate={
        reducedMotion
          ? undefined
          : variant === "hero"
            ? { y: [0, -8, 0] }
            : undefined
      }
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {variant === "platform" ? (
        <PlatformScreenshots dashboard={dashboard} />
      ) : (
        <HeroScreenshot alt={heroImageAlt ?? dashboard.galleryTitle} />
      )}
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[color-mix(in_srgb,var(--brand)_10%,transparent)] blur-3xl"
        aria-hidden
      />
    </motion.div>
  );
}

function HeroScreenshot({ alt }: { alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-academy-line bg-white shadow-card">
      <Image
        src="/screenshots/student-dashboard-overview.png"
        alt={alt}
        width={1024}
        height={787}
        className="h-auto w-full"
        priority
        loading="eager"
        fetchPriority="high"
        sizes="(max-width: 1024px) 100vw, 560px"
      />
    </div>
  );
}

function PlatformScreenshots({ dashboard }: { dashboard: Dictionary["dashboard"] }) {
  const tabs = dashboard.tabs as readonly {
    id: TabId;
    title: string;
    description: string;
    imageAlt: string;
  }[];
  const [activeTab, setActiveTab] = useState<TabId>(tabs[0].id);

  const active = useMemo(
    () => tabs.find((tab) => tab.id === activeTab) ?? tabs[0],
    [activeTab, tabs],
  );

  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-academy-line bg-white shadow-card">
      <div className="flex items-center gap-2 border-b border-academy-line bg-academy-mist/60 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </span>
        <span className="mx-auto min-w-0 truncate rounded-md border border-academy-line/80 bg-white px-3 py-1 text-center text-[11px] font-medium text-academy-slate-muted">
          platform.mathetogo.xyz
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-meta-brand">{dashboard.galleryTitle}</p>

        <div
          className="mt-3 inline-flex max-w-full flex-wrap gap-1 rounded-full border border-academy-line bg-academy-mist/50 p-1"
          role="tablist"
          aria-label={dashboard.galleryTitle}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "min-h-9 shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold leading-tight transition-all sm:px-4 sm:text-sm",
                activeTab === tab.id
                  ? "bg-fill-brand-deep text-on-brand shadow-sm"
                  : "text-academy-slate hover:bg-white hover:text-academy-navy",
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <p className="mt-3 rounded-lg bg-fill-brand-tint px-3 py-2 text-sm leading-relaxed text-academy-slate">
          {active.description}
        </p>

        <div
          className="mt-4 overflow-hidden rounded-xl border border-academy-line bg-academy-paper-soft ring-1 ring-black/[0.03]"
          role="tabpanel"
        >
          <Image
            src={screenshotMap[active.id]}
            alt={active.imageAlt}
            width={active.id === "quiz" ? 988 : 1024}
            height={active.id === "quiz" ? 908 : 970}
            className="h-auto w-full"
            sizes="(max-width: 1280px) 100vw, 720px"
          />
        </div>
      </div>
    </div>
  );
}
