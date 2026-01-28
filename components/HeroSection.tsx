"use client";

import { useState } from "react";

type Props = {
  title:string;
  description:string;
  heading: string;
  headingParagraph:string;
  paragraph:string;
}

export default function HeroSection({ heading, headingParagraph, paragraph }: Props) {
  const [loanAmount, setLoanAmount] = useState(2500);
  const [interestRate, setinterestRate] = useState(25);

  const formatCurrency = (amount: number) => {
    return "$" + amount.toLocaleString("en-US");
  };

  const calculateLoan = () => {
    const rate = interestRate / 100; // 25 => 25% flat fee (per loan)
    const interest = loanAmount * rate;
    const total = loanAmount + interest;
  
    return {
      totalInterest: formatCurrency(Math.round(interest)),
      totalPayment: formatCurrency(Math.round(total)),
    };
  };
  
  const { totalInterest, totalPayment } = calculateLoan();

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary-pale via-white to-primary-light">
      {/* Animated Background Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-float -z-10" />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            {/* H1: Main keyword-rich headline */}
            <h1 className="text-5xl font-bold leading-tight text-gray-900 lg:text-6xl font-display animate-fade-in-up">
              {heading ? heading : "Zoca Loans Reviews"}
              <br />
              <span className="text-primary">
                {headingParagraph ? headingParagraph : "Understanding Your Fast Funding Options"}
              </span>
            </h1>

            {/* Paragraph: Supporting description with secondary keywords */}
            <p className="text-xl leading-relaxed text-gray-600 animate-fade-in-up animation-delay-200">

              
              {paragraph ? paragraph : "When you’re facing an unexpected financial hurdle, finding zoca loans reviews that offer a transparent look at the lending process is crucial. Zoca Loans provides a platform for short-term installment loans, often utilized by those who need emergency cash but may not qualify for traditional bank products. While the zoca loans apply process is designed for speed, it is vital to understand the terms, interest rates, and the nature of tribal lending before committing to a contract. This review breaks down the costs, the zoca loans login experience, and what actual borrowers are saying about their services."}
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
                min="0"
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
                <span className="text-2xl font-bold font-display text-primary">{interestRate}%</span>
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
