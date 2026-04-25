import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import StatsBanner from '@/components/sections/StatsBanner'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBanner />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
