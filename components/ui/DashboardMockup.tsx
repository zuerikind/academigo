"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Dictionary } from "@/messages/types";

type Variant = "hero" | "platform";

export function DashboardMockup({
  variant = "hero",
  dashboard,
}: {
  variant?: Variant;
  dashboard: Dictionary["dashboard"];
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative w-full"
      animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
      transition={
        reducedMotion
          ? undefined
          : { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl shadow-academy-navy/25">
        <div className="flex items-center gap-2 border-b border-academy-mist-dark bg-academy-mist px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs text-academy-slate">
            platform.academigo.xyz
          </span>
        </div>
        <div className="flex min-h-[280px] sm:min-h-[320px]">
          <aside className="hidden w-36 shrink-0 border-r border-academy-mist-dark bg-academy-mist p-4 sm:block">
            <p className="text-xs font-semibold uppercase tracking-wide text-academy-slate">
              {dashboard.subjectsLabel}
            </p>
            <ul className="mt-3 space-y-2">
              {dashboard.subjectList.map((s, i) => (
                <li
                  key={s}
                  className={`rounded-lg px-2 py-1.5 text-xs font-medium ${
                    i === 0
                      ? "bg-academy-navy text-white"
                      : "text-academy-slate"
                  }`}
                >
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-white p-2 shadow-sm">
              <p className="text-[10px] text-academy-slate">
                {dashboard.progressLabel}
              </p>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-academy-mist-dark">
                <div className="h-full w-3/4 rounded-full bg-academy-gold" />
              </div>
            </div>
          </aside>
          <main className="flex-1 p-4 sm:p-6">
            {variant === "platform" ? (
              <PlatformContent dashboard={dashboard} />
            ) : (
              <HeroContent dashboard={dashboard} />
            )}
          </main>
        </div>
      </div>
      <div
        className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-academy-gold/20 blur-3xl"
        aria-hidden
      />
    </motion.div>
  );
}

function HeroContent({
  dashboard,
}: {
  dashboard: Dictionary["dashboard"];
}) {
  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-academy-navy">
          {dashboard.welcomeBack}
        </h3>
        <span className="rounded-full bg-academy-gold/20 px-2 py-0.5 text-xs font-medium text-academy-navy">
          +120 XP
        </span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {dashboard.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-academy-mist-dark bg-academy-mist p-3"
          >
            <p className="text-[10px] text-academy-slate">{stat.label}</p>
            <p className="text-lg font-bold text-academy-navy">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-academy-mist-dark bg-white p-4 shadow-sm">
        <p className="text-xs font-medium text-academy-slate">
          {dashboard.nextQuiz}
        </p>
        <p className="mt-1 font-semibold text-academy-navy">
          {dashboard.nextQuizTopic}
        </p>
        <div className="mt-3 flex gap-2">
          <span className="rounded-lg bg-academy-navy px-3 py-1 text-xs text-white">
            {dashboard.start}
          </span>
          <span className="rounded-lg bg-academy-mist px-3 py-1 text-xs text-academy-slate">
            {dashboard.overview}
          </span>
        </div>
      </div>
    </>
  );
}

function PlatformContent({
  dashboard,
}: {
  dashboard: Dictionary["dashboard"];
}) {
  return (
    <>
      <p className="text-xs font-medium text-academy-slate">
        {dashboard.errorAnalysis}
      </p>
      <div className="mt-2 space-y-2">
        {dashboard.topics.map((row) => (
          <div key={row.topic}>
            <div className="flex justify-between text-xs">
              <span className="text-academy-navy">{row.topic}</span>
              <span className="text-academy-slate">{row.pct}%</span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-academy-mist-dark">
              <div
                className="h-full rounded-full bg-academy-gold"
                style={{ width: `${row.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border-2 border-academy-gold/30 bg-academy-gold/5 p-4">
        <p className="text-xs font-semibold text-academy-gold">
          {dashboard.feedbackTitle}
        </p>
        <p className="mt-1 text-sm text-academy-navy">{dashboard.feedbackBody}</p>
      </div>
    </>
  );
}
