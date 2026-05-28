import Link from "next/link";
import { SignUpCtaGroup } from "@/components/layout/SignUpCtaGroup";
import { Container } from "@/components/ui/Container";
import { appLoginUrl } from "@/lib/app-links";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/messages/types";

export function AppSignupSection({
  dict,
  locale,
}: {
  dict: Dictionary["appSignup"];
  locale: Locale;
}) {
  return (
    <section
      id="app"
      className="scroll-mt-24 border-y border-academy-line bg-academy-paper-soft py-14 sm:py-16"
      aria-labelledby="app-signup-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-[color:var(--brand)]/15 bg-white shadow-card">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[color:var(--brand-tint)] via-white to-white opacity-90"
          />
          <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-meta-brand">{dict.eyebrow}</p>
              <h2
                id="app-signup-heading"
                className="text-display mt-4 text-academy-navy"
              >
                {dict.title}
              </h2>
              <p className="text-lead mt-4 max-w-lg">{dict.description}</p>
              <p className="mt-5">
                <Link
                  href={appLoginUrl(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[color:var(--brand-deep)] link-underline"
                >
                  {dict.signIn}
                </Link>
              </p>
            </div>
            <SignUpCtaGroup
              locale={locale}
              labels={{
                student: dict.signUpStudent,
                teacher: dict.signUpTeacher,
              }}
              vertical
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
