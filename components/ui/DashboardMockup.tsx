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
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-brand/10 blur-3xl"
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
    <div className="min-w-0 rounded-2xl border border-academy-line bg-white p-4 shadow-card sm:p-5">
      <p className="text-meta-brand">{dashboard.galleryTitle}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            title={tab.title}
            className={cn(
              "min-h-10 shrink-0 rounded-full border px-3 py-2 text-center text-xs font-semibold leading-tight transition-colors sm:px-4 sm:text-sm",
              activeTab === tab.id
                ? "border-brand-deep bg-brand-deep text-white shadow-md"
                : "border-academy-line bg-white text-academy-navy hover:border-brand/40 hover:bg-brand-tint",
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-academy-slate">
        {active.description}
      </p>

      <div className="mt-4 overflow-hidden rounded-xl border border-academy-line bg-academy-paper-soft">
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
  );
}
