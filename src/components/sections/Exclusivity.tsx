import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import { ArrowRight, Lock } from 'lucide-react'

export function Exclusivity() {
  return (
    <section
      id="contato"
      className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Lock className="w-[500px] h-[500px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <FadeIn>
          <Lock className="w-12 h-12 mx-auto mb-8 text-secondary" />
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-white/50 mb-6">
            Condições sob Consulta
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
            Negociação Restrita
          </h3>
          <p className="text-lg md:text-xl text-white/70 font-light mb-16 max-w-2xl mx-auto">
            Este ativo de rara disponibilidade exige qualificação prévia. Solicite o dossiê completo
            para avançar na análise desta oportunidade.
          </p>
        </FadeIn>

        <FadeIn delay={200} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            size="lg"
            className="w-full sm:w-auto h-16 px-8 bg-secondary text-primary hover:bg-secondary/90 rounded-none text-sm md:text-base tracking-wide uppercase font-semibold group"
          >
            Receber dossiê completo e condições
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-16 px-8 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white rounded-none text-sm md:text-base tracking-wide uppercase font-semibold"
          >
            Agendar visita técnica / call privada
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
