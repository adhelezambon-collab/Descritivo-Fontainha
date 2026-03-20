import { HeroSection } from '@/components/sections/Hero'
import { ManifestoSection } from '@/components/sections/Manifesto'
import { HighlightsSection } from '@/components/sections/Highlights'
import { LocationSection } from '@/components/sections/Location'
import { PotentialSection } from '@/components/sections/Potential'
import { MediaSection } from '@/components/sections/Media'
import { GallerySection } from '@/components/sections/Gallery'
import { ExclusivitySection } from '@/components/sections/Exclusivity'
import { Footer } from '@/components/sections/Footer'

const Index = () => {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <HighlightsSection />
      <LocationSection />
      <PotentialSection />
      <MediaSection />
      <GallerySection />
      <ExclusivitySection />
      <Footer />
    </>
  )
}

export default Index
