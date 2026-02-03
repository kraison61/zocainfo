import { fullData } from "@/lib/data";
import { notFound } from "next/navigation";
import Navigation from '@/components/Navigation'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import { Metadata } from "next";
import slugify from 'slugify';
import FullPage from "@/components/FullPage";

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
  const data =   fullData[cleanSlug];

  return {
    title: data ? `${data.title} | zoca loans` : 'Review Not Found',
    description: data ? data.metaDescription.substring(0, 160) : 'Description not available',
  }
}

export default async function LoanPage({ params }: Props) {
  const { slug } = await params;
  const data =  await fullData[slug];
  if (!data) {
    notFound();
  }
  return (
    <>
    <Navigation />
    <CTASection />
    <FullPage title={data.title} metaDescription={data.metaDescription} heading={ data.heading } subHeading={data.subHeading} headingParagraph={data.headingParagraph} howItWork={data.howItWork} subHowItWork={data.subHowItWork} howItWorkList={data.howItWorkList} benefit={data.benefit} subBenefit={data.subBenefit} benefitList={data.benefitList} eligibility={data.eligibility} subEligibility={data.subEligibility} eligibilityList={data.eligibilityList} review={data.review} faq={data.faq} subFaq={data.subFaq} faqList={data.faqList} />
      <Footer />
    </>
  );
}
