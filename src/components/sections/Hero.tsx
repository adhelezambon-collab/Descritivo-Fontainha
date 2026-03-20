import { FadeIn } from '@/components/ui/fade-in'
import heroImage from '@/assets/photo-2026-03-20-08-31-25-72064.jpg'

export function Hero() {
  return (
    <section className="relative h-[100svh] w-full flex items-end pb-24 md:pb-32 overflow-hidden bg-zinc-900">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Praia da Fontainha, Aracati"
          className="w-full h-full object-cover object-center animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <FadeIn delay={200}>
          <div className="inline-block px-3 py-1 border border-white/30 text-white/90 text-xs font-semibold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
            Apresentação Confidencial
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 text-balance">
            Ouro Branco: 850m de <br className="hidden md:block" /> Frente Mar Absoluta
          </h1>
        </FadeIn>

        <FadeIn delay={600}>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed">
            Imóvel 3 — Praia da Fontainha, Aracati/CE. <br className="hidden md:block" />
            Um ativo de rara disponibilidade reservado para investidores de visão e escala.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
