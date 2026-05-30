import { BrandMark } from "@/components/brand/BrandLogo";
import { SignUpCtaGroup } from "@/components/layout/SignUpCtaGroup";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { appLoginUrl } from "@/lib/app-links";
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
    <section className="border-t border-academy-line bg-academy-paper-soft py-14 sm:py-20">
      <Container>
        <div className="rounded-2xl bg-[color:var(--brand-deep)] px-6 py-12 text-center shadow-pop sm:px-10 sm:py-14">
          <BrandMark brandName={brandName} size={48} appearance="dark" />
          <h2 className="text-display mt-6 text-white">{dict.title}</h2>
          <p className="text-lead-on-dark mx-auto mt-4 max-w-lg sm:text-lg">
            {dict.description}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <SignUpCtaGroup
              locale={locale}
              tone="dark"
              labels={{
                student: buttons.signUpStudent,
                teacher: buttons.signUpTeacher,
              }}
              className="justify-center"
            />
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button
                href={appLoginUrl(locale)}
                external
                variant="outlineLight"
                size="md"
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
        </div>
      </Container>
    </section>
  );
}
