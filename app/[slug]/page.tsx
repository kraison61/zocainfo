import { loanData } from "@/lib/data";
import { notFound } from "next/navigation";
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import Requirements from '@/components/Requirements'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

type Props = {
  params: {
    slug: string;
  };
};

export default async function LoanPage({ params }: Props) {
  const { slug } = await params;
  const data =  await loanData[slug];
  if (!data) {
    notFound();
  }
  return (
    <>
    <Navigation />
      <HeroSection
        title={data.title}
        description={data.description}
        heading={data.heading}
        headingParagraph={data.headingParagrahp}
        paragraph={data.paragraph}
      />
      <HowItWorks />
      <Benefits />
      <Requirements />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}
