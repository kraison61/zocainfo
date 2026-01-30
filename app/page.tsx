import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import Requirements from '@/components/Requirements'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQSection'


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CTASection />
      <HeroSection title="" description="" heading="" headingParagraph="" paragraph="" />
      <HowItWorks />
      <Benefits />
      <Requirements />
      <Testimonials />
      <FAQSection />
      <Footer />
    </main>
  )
}
