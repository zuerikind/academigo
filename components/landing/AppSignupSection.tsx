import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { appLoginUrl, appSignupUrl } from "@/lib/app-links";
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
      className="border-y border-academy-line bg-[color:var(--brand-tint)]"
      aria-labelledby="app-signup-heading"
    >
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 py-12 sm:flex-row sm:items-center sm:py-14">
          <div className="max-w-xl">
            <p className="text-meta-brand">{dict.eyebrow}</p>
            <h2
              id="app-signup-heading"
              className="text-heading mt-3 text-academy-navy"
            >
              {dict.title}
            </h2>
            <p className="text-lead mt-3">{dict.description}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[280px]">
            <Button
              href={appSignupUrl(locale, "student")}
              external
              variant="accent"
              size="lg"
              fullWidth
            >
              {dict.signUpStudent}
            </Button>
            <Button
              href={appSignupUrl(locale, "teacher")}
              external
              variant="secondary"
              size="lg"
              fullWidth
            >
              {dict.signUpTeacher}
            </Button>
            <Button
              href={appLoginUrl(locale)}
              external
              variant="ghost"
              size="sm"
              fullWidth
              className="text-[color:var(--brand-deep)]"
            >
              {dict.signIn}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
