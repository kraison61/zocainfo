"use client";

import { useState, useEffect } from "react";
import { getBenefitIconByIndex } from '@/lib/data'

type ListDetail = {
  title: string;
  description: string;
};

type Props = {
  title: string;
  metaDescription: string;
  heading: string;
  subHeading: string;
  headingParagraph: string;
  howItWork: string;
  subHowItWork: string;
  howItWorkList: ListDetail[];
  benefit: string;
  subBenefit: string;
  benefitList: ListDetail[];
  eligibility: string;
  subEligibility: string;
  eligibilityList: ListDetail[];
  review: string;
  faq: string;
  subFaq: string;
  faqList: ListDetail[];
};



const testimonials = [
  {
    stars: 5,
    text: "\"I was in a huge rush because of a medical emergency and Zoca Loans really saved my skin. Honestly, the zoca loans apply part was a breeze—it took me like 10 minutes tops. I got the 'thumbs up' the same day and $5,000 hit my account the next morning. The interest isn't cheap, but it was way faster than a bank and better than my credit card's crazy fees. If you need cash fast, this is it.",
    name: "John Martinez",
    role: "Super fast approval and money in your pocket by the next day.",
    initial: "J",
  },
  {
    stars: 5,
    text: "Being a freelancer is great until you need a loan. Most banks hate that my income changes every month. But when I checked out zoca loans reviews, I saw they were more flexible. I used the zoca loans login to set up a $8,000 loan to pay off my credit cards. Everything was out in the open—no weird hidden fees. The support team was actually nice and didn't make me feel like just a number.",
    name: "Sarah Johnson",
    role: "They actually listen to freelancers and don't hide extra costs.",
    initial: "S",
  },
  {
    stars: 5,
    text: "This is my third time using them for car repairs and random house stuff. They’re super reliable. That whole '24-hour approval' thing? It’s totally real. I also love that I can use my zoca loans login to pay the loan off early without getting hit with a penalty fee. Their mobile site is easy to use, so I just handle everything from my phone. They're definitely my go-to when I'm in a pinch.",
    name: "Michael Chen",
    role: "No penalties for paying early and a mobile site that actually works.",
    initial: "M",
  },
];

export default function FullPage({
  heading,
  subHeading,
  headingParagraph,
  howItWork,
  subHowItWork,
  howItWorkList,
  benefit,
  subBenefit,
  benefitList,
  eligibility,
  subEligibility,
  eligibilityList,
  review,
  faq,
  subFaq,
  faqList,
}: Props) {
  const [loanAmount, setLoanAmount] = useState(2500);
  const [interestRate, setinterestRate] = useState(25);

  const formatCurrency = (amount: number) => {
    return "$" + amount.toLocaleString("en-US");
  };

  const calculateLoan = () => {
    const rate = interestRate / 100;
    const interest = loanAmount * rate;
    const total = loanAmount + interest;

    return {
      totalInterest: formatCurrency(Math.round(interest)),
      totalPayment: formatCurrency(Math.round(total)),
    };
  };
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const { totalInterest, totalPayment } = calculateLoan();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary-pale via-white to-primary-light">
      {/* Animated Background Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-float -z-10" />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            {/* H1: Main keyword-rich headline */}
            <h1 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl font-display animate-fade-in-up">
              {heading ? heading : "Zoca Loans Reviews"}
              <br />
              <span className="text-2xl text-primary lg:text-3xl">
                {subHeading
                  ? subHeading
                  : "Understanding Your Fast Funding Options"}
              </span>
            </h1>

            {/* Paragraph: Supporting description with secondary keywords */}
            <p className="text-xl leading-relaxed text-gray-600 animate-fade-in-up animation-delay-200">
              {headingParagraph
                ? headingParagraph
                : "When you’re facing an unexpected financial hurdle, finding zoca loans reviews that offer a transparent look at the lending process is crucial. Zoca Loans provides a platform for short-term installment loans, often utilized by those who need emergency cash but may not qualify for traditional bank products. While the zoca loans apply process is designed for speed, it is vital to understand the terms, interest rates, and the nature of tribal lending before committing to a contract. This review breaks down the costs, the zoca loans login experience, and what actual borrowers are saying about their services."}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 animate-fade-in-up animation-delay-400">
              <div>
                <div className="text-4xl font-bold font-display text-primary">
                  50K+
                </div>
                <div className="text-gray-600">Trusted Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold font-display text-primary">
                  4.8/5
                </div>
                <div className="text-gray-600">Customer Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold font-display text-primary">
                  24 Hrs
                </div>
                <div className="text-gray-600">Fast Approval</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
              <a href="#apply" className="btn-large btn-green">
                Apply for a Loan Now
              </a>
              <a href="#calculator" className="btn-large btn-outline">
                Calculate Loan
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 animate-fade-in-up animation-delay-800">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Licensed Lender
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                100% Secure
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Quality Guaranteed
              </div>
            </div>
          </div>

          {/* Right - Calculator Card */}
          <div
            className="p-8 bg-white border-2 shadow-2xl rounded-3xl shadow-primary/15 border-primary-light animate-fade-in-up animation-delay-400"
            id="calculator"
          >
            {/* H2: Feature-specific heading */}
            <h2 className="mb-8 text-3xl font-bold text-gray-900 font-display">
              Payday Loan Calculator – Amount Due on Payday
            </h2>

            {/* Loan Amount Slider */}
            <div className="mb-8">
              <label className="block mb-3 font-medium text-gray-700">
                Loan Amount
              </label>
              <input
                type="range"
                min="200"
                max="5000"
                step="500"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="slider"
              />
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>$1,000</span>
                <span className="text-2xl font-bold font-display text-primary">
                  {formatCurrency(loanAmount)}
                </span>
                <span>$50,000</span>
              </div>
            </div>

            {/* InterestRate */}
            <div className="mb-8">
              <label className="block mb-3 font-medium text-gray-700">
                Loan Fee (Flat Rate)
              </label>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={interestRate}
                onChange={(e) => setinterestRate(Number(e.target.value))}
                className="slider"
              />
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>10%</span>
                <span className="text-2xl font-bold font-display text-primary">
                  {interestRate}%
                </span>
                <span>70%</span>
              </div>
            </div>

            {/* Results */}
            <div className="p-6 space-y-4 border-2 bg-primary-pale rounded-2xl border-primary-light">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Interest</span>
                <span className="text-lg font-semibold text-gray-900">
                  {totalInterest}
                </span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t-2 border-primary-light">
                <span className="text-gray-600">Total Payment</span>
                <span className="text-2xl font-bold font-display text-primary">
                  {totalPayment}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white" id="how">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-semibold tracking-wide uppercase text-primary">
              HOW IT WORKS
            </div>
            {/* H2: Main section heading with keywords */}
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl font-display">
              {howItWork
                ? howItWork
                : "How to Navigate the Zoca Loans Application Process"}
            </h2>
            {/* Paragraph: Process description with long-tail keywords */}
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
              {subHowItWork
                ? subHowItWork
                : " The zoca loans platform is built on a streamlined digital infrastructure, allowing users to move from inquiry to a decision quickly. Unlike traditional lenders that may require days of paperwork, this process is automated to handle high-interest, short-term credit products. However, because these are installment loans with high APRs, the speed of the zoca loans apply system should be met with careful financial consideration."}
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howItWorkList.map((item, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 border-2 bg-primary-pale rounded-2xl border-primary-light hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary group"
              >
                {/* Step Number */}
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-3xl font-bold text-white transition-transform rounded-full shadow-lg bg-gradient-to-br from-primary to-primary-dark font-display shadow-primary/30 group-hover:scale-110">
                  {index + 1}
                </div>

                {/* H3: Step-specific heading */}
                <h3 className="mb-4 text-xl font-bold text-center text-gray-900 font-display">
                  {item.title}
                </h3>

                {/* Paragraph: Step description */}
                <p className="leading-relaxed text-center text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 bg-gradient-to-b from-white to-primary-pale"
        id="benefits"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-semibold tracking-wide uppercase text-primary">
              OUR BENEFITS
            </div>
            {/* H2: Main section heading with value proposition */}
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl font-display">
              {benefit ? benefit : "Why Borrowers Consider Zoca Loans"}
            </h2>
            {/* Paragraph: Overview with trust signals */}
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
              {subBenefit
                ? subBenefit
                : 'Borrowers often turn to zoca loans when they have been turned away by mainstream financial institutions. As a tribal lender, Zoca operates under the jurisdiction of the Rosebud Sioux Tribe, which allows them to offer credit products to those with "less-than-perfect" credit scores. While this provides accessibility, it comes with a significantly higher cost of capital compared to credit union loans.'}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefitList.map((benefit, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 bg-white border-2 border-transparent shadow-lg rounded-2xl shadow-gray-200 hover:border-primary hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-20 h-20 mb-6 text-5xl bg-primary-light rounded-2xl">
                  {/* {benefit.icon} */}
                    {getBenefitIconByIndex(index)}
                </div>

                {/* H3: Benefit-specific heading */}
                <h3 className="mb-4 text-2xl font-bold text-gray-900 font-display">
                  {benefit.title}
                </h3>

                {/* Paragraph: Benefit description with keywords */}
                <p className="leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="requirements">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-semibold tracking-wide uppercase text-primary">
              REQUIREMENTS
            </div>
            {/* H2: Main section heading with keywords */}
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl font-display">
              {eligibility
                ? eligibility
                : " Zoca Loans Eligibility: What You Need to Qualify"}
            </h2>
            {/* Paragraph: Requirements overview with qualification keywords */}
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
              {subEligibility
                ? subEligibility
                : "Before you attempt a zoca loans login to start an application, ensure you meet the minimum criteria. Tribal lenders have specific requirements that differ from state-licensed lenders, primarily focusing on your current ability to service the debt rather than your past credit mistakes."}
            </p>
          </div>

          {/* Requirements Content */}
          <div className="max-w-4xl mx-auto">
            <div className="p-8 border-2 bg-primary-pale rounded-3xl md:p-12 border-primary-light">
              <div className="grid gap-6 md:grid-cols-2">
                {eligibilityList.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 transition-all duration-300 bg-white border rounded-xl border-primary-light hover:shadow-lg hover:shadow-primary/10 hover:scale-105"
                  >
                    {/* Check Icon */}
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 font-bold text-white rounded-full bg-primary">
                      ✓
                    </div>

                    {/* Requirement Text */}
                    <span className="font-medium leading-relaxed text-gray-800">
                      {item.title} : {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary-pale" id="testimonials">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-semibold tracking-wide uppercase text-primary">
              CUSTOMER REVIEWS
            </div>
            {/* H2: Main section heading with social proof keywords */}
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl font-display">
              Real Stories: Zoca Loans Reviews from People Like You
            </h2>
            {/* Paragraph: Social proof with statistics */}
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
              {review
                ? review
                : "Before you jump in, it’s always smart to see what other folks have gone through. We’ve looked at a bunch of zoca loans reviews to see how they actually handle things when life gets messy. Whether it's a broken car or a surprise bill, people usually talk about how fast the zoca loans apply process is. Here’s a quick look at three real-life stories from people who used Zoca to get out of a tight spot."}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 bg-white border-2 shadow-lg rounded-2xl shadow-gray-200 border-primary-light hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              >
                {/* Stars */}
                <div className="mb-4 text-3xl text-accent-gold">
                  {"★".repeat(testimonial.stars)}
                </div>

                {/* Paragraph: Customer testimonial with natural language */}
                <p className="mb-6 italic leading-relaxed text-gray-700">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 text-xl font-bold rounded-full w-14 h-14 bg-primary-light text-primary">
                    {testimonial.initial}
                  </div>
                  <div>
                    {/* H4: Customer name */}
                    <h4 className="font-semibold text-gray-900 font-display">
                      {testimonial.name}
                    </h4>
                    {/* Paragraph: Customer details */}
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 bg-gradient-to-b from-primary-pale to-white"
        id="faq"
      >
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-semibold tracking-wide uppercase text-primary">
              FREQUENTLY ASKED QUESTIONS
            </div>
            {/* H2: Main section heading */}
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl font-display">
              {faq ? faq : "Got Questions? We Have Answers"}
            </h2>
            {/* Paragraph: FAQ intro */}
            <p className="text-xl leading-relaxed text-gray-600">
              {subFaq
                ? subFaq
                : "Find answers to the most common questions about personal loans, our application process, and what to expect when you apply with QuickCash."}
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqList.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-gray-200 hover:border-primary-light"
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full gap-4 px-6 py-5 text-left group"
                  aria-expanded={openIndex === index}
                >
                  {/* H3: Question heading */}
                  <h3
                    className={`text-lg font-display font-semibold transition-colors ${
                      openIndex === index
                        ? "text-primary"
                        : "text-gray-900 group-hover:text-primary"
                    }`}
                  >
                    {faq.title}
                  </h3>

                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? "bg-primary text-white rotate-180"
                        : "bg-gray-100 text-gray-600 group-hover:bg-primary-light group-hover:text-primary"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Collapse */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t-2 border-gray-100">
                      {/* Paragraph: Answer */}
                      <p className="pt-4 leading-relaxed text-gray-600">
                        {faq.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="mb-6 text-gray-600">
              Still have questions? Our customer support team is here to help!
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:1-800-784-2522"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold transition-all duration-300 bg-white border-2 rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call: 1-800-QUICK-CASH
              </a>
              <a
                href="mailto:support@quickcash.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-primary hover:bg-primary-dark shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .btn-large {
          @apply px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 inline-block;
        }
        .btn-green {
          @apply bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/30 hover:scale-105 hover:shadow-xl hover:shadow-primary/40;
        }
        .btn-outline {
          @apply bg-white text-primary border-2 border-primary hover:bg-primary-light;
        }
        .slider {
          @apply w-full h-2 bg-primary-light rounded-full appearance-none cursor-pointer;
        }
        .slider::-webkit-slider-thumb {
          @apply appearance-none w-6 h-6 bg-primary rounded-full cursor-pointer shadow-lg shadow-primary/40;
        }
        .slider::-moz-range-thumb {
          @apply w-6 h-6 bg-primary rounded-full cursor-pointer border-0 shadow-lg shadow-primary/40;
        }
      `}</style>
    </section>
  );
}
