import CTA from "@/components/home/CTA";
import CreditCard from "@/components/home/CreditCard";
import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import SocialProof from "@/components/home/SocialProof";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function LangHome({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // const langName = (lang && lang[0]) || defaultLocale;
  let langName =
    lang && lang[0] && lang[0] !== "index" ? lang[0] : defaultLocale;

  const dict = await getDictionary(langName);

  return (
    <>
      {/* Hero Section */}
      <Hero locale={dict.Hero} CTALocale={dict.CTAButton} />
      <SocialProof locale={dict.SocialProof} />
      {/* display technology stack, partners, project honors, etc. */}
      {/* <ScrollingLogos /> */}

      <CreditCard id="CreditCard" locale={dict.CreditCard} />
      {/* USP (Unique Selling Proposition) */}
      <Feature id="Features" locale={dict.Feature} langName={langName} />

      {/* Pricing */}
      {/* <Pricing id="Pricing" locale={dict.Pricing} langName={langName} /> */}

      {/* Testimonials / Wall of Love */}
      {/* <WallOfLove id="WallOfLove" locale={dict.WallOfLove} /> */}

      {/* FAQ (Frequently Asked Questions) */}
      <FAQ id="FAQ" locale={dict.FAQ} langName={langName} />

      {/* CTA (Call to Action) */}
      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
    </>
  );
}
