import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SystemSection } from "@/components/landing/SystemSection";
import { SubjectsSection } from "@/components/landing/SubjectsSection";
import { PlatformSection } from "@/components/landing/PlatformSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { VisionSection } from "@/components/landing/VisionSection";
import { AppSignupSection } from "@/components/landing/AppSignupSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const dict = getDictionary(raw);

  return (
    <>
      <Header dict={dict} locale={raw} />
      <main className="flex-1">
        <HeroSection dict={dict} locale={raw} />
        <AppSignupSection dict={dict.appSignup} locale={raw} />
        <ProblemSection dict={dict.problem} />
        <SystemSection dict={dict.system} />
        <SubjectsSection dict={dict.subjects} common={dict.common} />
        <PlatformSection
          dict={dict.platform}
          buttons={dict.common.buttons}
          dashboard={dict.dashboard}
        />
        <ServicesSection dict={dict.services} />
        <PricingSection dict={dict} />
        <ProcessSection dict={dict.process} />
        <TestimonialsSection dict={dict.testimonials} />
        <VisionSection dict={dict.vision} />
        <FinalCtaSection
          dict={dict.finalCta}
          buttons={dict.common.buttons}
          brandName={dict.common.brand}
          locale={raw}
        />
      </main>
      <Footer dict={dict} locale={raw} />
    </>
  );
}
