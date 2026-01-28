import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import Requirements from '@/components/Requirements'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import type { Metadata } from "next";

export const metadata: Metadata = {
  
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <Requirements />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
