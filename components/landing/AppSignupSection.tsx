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
      className="scroll-mt-20 bg-white py-14 sm:py-16"
      aria-labelledby="app-signup-heading"
    >
      <Container>
        <div className="overflow-hidden rounded-2xl border border-academy-line bg-[color:var(--brand-tint)]/50 shadow-card">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-meta-brand">{dict.eyebrow}</p>
              <h2
                id="app-signup-heading"
                className="text-heading mt-3 text-academy-navy"
              >
                {dict.title}
              </h2>
              <p className="text-lead mt-3 max-w-lg">{dict.description}</p>
              <p className="mt-4">
                <Link
                  href={appLoginUrl(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[color:var(--brand-deep)] link-underline"
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
