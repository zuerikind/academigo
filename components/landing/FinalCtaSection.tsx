import { BrandMark } from "@/components/brand/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { MessageCircle } from "lucide-react";
import type { Dictionary } from "@/messages/types";

export function FinalCtaSection({
  dict,
  buttons,
  brandName,
}: {
  dict: Dictionary["finalCta"];
  buttons: Dictionary["common"]["buttons"];
  brandName: string;
}) {
  return (
    <section className="bg-academy-mist py-20 sm:py-28">
      <Container>
        <div className="rounded-3xl bg-academy-navy px-6 py-14 text-center shadow-2xl shadow-academy-navy/30 sm:px-12 sm:py-16">
          <div className="flex flex-col items-center gap-3">
            <BrandMark
              brandName={brandName}
              size={48}
              appearance="dark"
            />
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {dict.title}
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            {dict.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button href={siteConfig.links.whatsapp} external variant="accent">
              <MessageCircle className="h-4 w-4" aria-hidden />
              {buttons.whatsapp}
            </Button>
            <Button href={siteConfig.links.consultation} external variant="outline">
              {buttons.freeConsultation}
            </Button>
            <Button
              href={siteConfig.links.platform}
              external
              variant="secondary"
              className="border-0"
            >
              {buttons.viewPlatform}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
