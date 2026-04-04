import { FadeIn } from '@/components/ui/fade-in'
import { Phone } from 'lucide-react'

export function Contact() {
  return (
    <section
      id="contato"
      className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Phone className="w-[500px] h-[500px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <FadeIn>
          <Phone className="w-12 h-12 mx-auto mb-8 text-secondary" />
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-white/50 mb-6">
            Tratar Direto
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
            Contato com o Proprietário
          </h3>
          <p className="text-lg md:text-xl text-white/70 font-light mb-16 max-w-2xl mx-auto">
            Para avançar na análise desta oportunidade e agendar uma visita técnica ao local, entre
            em contato diretamente de forma ágil e exclusiva.
          </p>
        </FadeIn>

        <FadeIn delay={200} className="flex flex-col items-center justify-center gap-6">
          <a
            href="https://wa.me/5585999815002?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20im%C3%B3vel."
target="_blank"
  rel="noopener noreferrer"          
            className="inline-flex items-center justify-center h-20 px-10 bg-secondary text-primary hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95 text-2xl md:text-4xl font-serif font-medium tracking-wide shadow-2xl"
          >
            <Phone className="w-6 h-6 md:w-8 md:h-8 mr-4" />
            85-99815002
          </a>
          <p className="text-sm text-white/40 font-light mt-4">
            Clique no número acima para ligar agora.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
