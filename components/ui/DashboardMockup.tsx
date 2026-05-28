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
      className="relative w-full"
      animate={
        reducedMotion
          ? undefined
          : variant === "hero"
            ? { y: [0, -10, 0], scale: [1, 1.02, 1] }
            : { y: [0, -4, 0] }
      }
      transition={{
        duration: variant === "hero" ? 7 : 6,
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
        className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-[color:var(--brand)]/15 blur-3xl"
        aria-hidden
      />
    </motion.div>
  );
}

function HeroScreenshot({ alt }: { alt: string }) {
  return (
    <div className="overflow-hidden rounded-3xl shadow-2xl shadow-academy-navy/30">
      <Image
        src="/screenshots/student-dashboard-overview.png"
        alt={alt}
        width={1024}
        height={787}
        className="h-auto w-full"
        priority
        loading="eager"
        fetchPriority="high"
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
    <div className="rounded-3xl border border-academy-mist-dark/80 bg-white p-4 shadow-xl shadow-academy-navy/15 sm:p-6">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-academy-slate">
          {dashboard.galleryTitle}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "rounded-xl border px-3 py-2 text-sm font-semibold transition-all",
                activeTab === tab.id
                  ? "border-academy-navy bg-academy-navy text-white shadow-md shadow-academy-navy/20"
                  : "border-academy-mist-dark bg-academy-mist/40 text-academy-navy hover:bg-academy-mist",
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-3 text-sm text-academy-slate">{active.description}</p>

      <div className="overflow-hidden rounded-2xl border border-academy-mist-dark/80 shadow-lg shadow-academy-navy/10">
        <Image
          src={screenshotMap[active.id]}
          alt={active.imageAlt}
          width={active.id === "quiz" ? 988 : 1024}
          height={active.id === "quiz" ? 908 : 970}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
