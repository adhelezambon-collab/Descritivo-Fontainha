import { Header } from '@/components/layout/Header'
import { FAB } from '@/components/layout/FAB'
import { Hero } from '@/components/sections/Hero'
import { Manifesto } from '@/components/sections/Manifesto'
import { Highlights } from '@/components/sections/Highlights'
import { Location } from '@/components/sections/Location'
import { Potential } from '@/components/sections/Potential'
import { Media } from '@/components/sections/Media'
import { Gallery } from '@/components/sections/Gallery'
import { Exclusivity } from '@/components/sections/Exclusivity'
import { Footer } from '@/components/sections/Footer'
import { useScrollProgress } from '@/hooks/use-scroll-progress'

export default function Index() {
  const progress = useScrollProgress()

  return (
    <div className="min-h-screen bg-background relative selection:bg-secondary selection:text-primary">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-secondary z-[60] transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />

      <Header />

      <main>
        <Hero />
        <Manifesto />
        <Highlights />
        <Location />
        <Potential />
        <Media />
        <Gallery />
        <Exclusivity />
      </main>

      <Footer />
      <FAB />
    </div>
  )
}
