import { BrandMark } from "@/components/brand/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { appLoginUrl, appSignupUrl } from "@/lib/app-links";
import { siteConfig } from "@/config/site";
import { MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/messages/types";

export function FinalCtaSection({
  dict,
  buttons,
  brandName,
  locale,
}: {
  dict: Dictionary["finalCta"];
  buttons: Dictionary["common"]["buttons"];
  brandName: string;
  locale: Locale;
}) {
  return (
    <section className="bg-academy-paper-soft py-[var(--rhythm-sm)] sm:py-[var(--rhythm-md)]">
      <Container>
        <div className="rounded-2xl bg-[color:var(--brand-deep)] px-6 py-14 text-center shadow-pop sm:px-12 sm:py-16">
          <div className="flex flex-col items-center gap-3">
            <BrandMark
              brandName={brandName}
              size={48}
              appearance="dark"
            />
            <h2 className="text-display text-white">{dict.title}</h2>
          </div>
          <p className="text-lead mx-auto mt-4 max-w-xl text-white/75">
            {dict.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={appSignupUrl(locale, "student")}
              external
              variant="accent"
              size="lg"
            >
              {buttons.signUpStudent}
            </Button>
            <Button
              href={appSignupUrl(locale, "teacher")}
              external
              variant="secondary"
              size="lg"
            >
              {buttons.signUpTeacher}
            </Button>
            <Button
              href={appLoginUrl(locale)}
              external
              variant="outlineLight"
              size="lg"
            >
              {buttons.signIn}
            </Button>
            <Button
              href={siteConfig.links.whatsapp}
              external
              variant="outlineLight"
              size="md"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {buttons.whatsapp}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
