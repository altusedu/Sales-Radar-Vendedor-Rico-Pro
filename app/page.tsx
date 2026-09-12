import { AnnouncementBar } from '@/components/announcement-bar'
import { HeroSection } from '@/components/hero-section'
import { PainSection } from '@/components/pain-section'
import { MechanismSection } from '@/components/mechanism-section'
import { CommandmentsSection } from '@/components/commandments-section'
import { AuthoritySection } from '@/components/authority-section'
import { AudienceFitSection } from '@/components/audience-fit-section'
import { OfferSection } from '@/components/offer-section'
import { GuaranteeSection } from '@/components/guarantee-section'
import { FaqSection } from '@/components/faq-section'
import { StickyMobileBar } from '@/components/sticky-mobile-bar'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="bg-offwhite">
      <AnnouncementBar />
      <HeroSection />
      <PainSection />
      <MechanismSection />
      <CommandmentsSection />
      <AuthoritySection />
      <AudienceFitSection />
      <OfferSection />
      <GuaranteeSection />
      <FaqSection />
      <SiteFooter />
      <StickyMobileBar />
    </main>
  )
}
