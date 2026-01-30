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
import { Metadata } from "next";
import slugify from 'slugify';
import FAQSection from "@/components/FAQSection";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // อ่านค่า slug จาก URL
  const {slug} = await params;

  const cleanSlug = slugify(slug,{lower:true})
  
  // ค้นหาข้อมูลจาก lib/data.ts
  // const data =  await loanData[slug];
  const data =   loanData[cleanSlug];

  return {
    title: data ? `${data.title} | zoca loans` : 'Review Not Found',
    description: data ? data.description.substring(0, 160) : 'Description not available',
  }
}

export default async function LoanPage({ params }: Props) {
  const { slug } = await params;
  const data =  await loanData[slug];
  if (!data) {
    notFound();
  }
  return (
    <>
    <Navigation />
    <CTASection />
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
      <FAQSection />
      <Footer />
    </>
  );
}
