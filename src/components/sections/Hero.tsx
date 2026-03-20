import { ChevronDown } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[100svh] w-full overflow-hidden bg-black flex flex-col justify-end pb-24 px-6"
    >
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://img.usecurling.com/p/800/1200?q=ocean%20waves%20aerial&color=black&dpr=2"
          alt="Aerial view of beachfront property"
          className="w-full h-full object-cover opacity-60 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start gap-6 animate-fade-in-up">
        <Badge
          variant="outline"
          className="border-primary/50 text-primary uppercase tracking-widest text-xs px-3 py-1 bg-black/20 backdrop-blur-sm"
        >
          Apresentação Confidencial
        </Badge>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-[1.1] tracking-tight">
            Patrimônio Beira-Mar:
            <br />
            <span className="text-white/80 font-normal italic">Exclusividade em Aracati.</span>
          </h1>
          <p className="text-lg text-white/70 font-light max-w-[280px]">
            O último grande ativo da região. Reserva de valor e escala na Praia da Fontainha.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  )
}
