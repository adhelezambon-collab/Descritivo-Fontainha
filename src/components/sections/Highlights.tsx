import { FadeIn } from '@/components/ui/fade-in'

const stats = [
  { value: '97', unit: 'Hectares', desc: 'Escala para projetos que definem a região.' },
  { value: '850', unit: 'Metros', desc: 'De fronteira linear entre o investimento e o oceano.' },
  { value: '1', unit: 'Único', desc: 'Ativo beira-mar com esta magnitude disponível.' },
]

export function HighlightsSection() {
  return (
    <section id="highlights" className="py-24 px-6 bg-secondary/10">
      <FadeIn>
        <div className="mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 block">
            Números do Ativo
          </span>
          <h2 className="text-3xl font-serif">A dimensão da exclusividade.</h2>
        </div>
      </FadeIn>

      <div className="grid gap-12">
        {stats.map((stat, idx) => (
          <FadeIn key={idx} delay={idx * 150} className="border-l border-primary/20 pl-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-light font-serif tracking-tighter text-foreground">
                {stat.value}
              </span>
              <span className="text-lg font-medium text-muted-foreground">{stat.unit}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-xs">{stat.desc}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
