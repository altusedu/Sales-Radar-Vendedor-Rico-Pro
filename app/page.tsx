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
import { ProCtaSection } from '@/components/pro-cta-section'
import { SiteFooter } from '@/components/site-footer'
import { dadosEstruturados } from '@/lib/dados-estruturados'

// `<` escapado para o texto do JSON nunca fechar a tag <script> por acidente.
const jsonLd = JSON.stringify(dadosEstruturados()).replaceAll('<', '\\u003c')

export default function Page() {
  return (
    <main id="inicio" className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
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
      <ProCtaSection />
      <SiteFooter />
    </main>
  )
}
