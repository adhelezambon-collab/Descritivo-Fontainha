import { FadeIn } from '@/components/ui/fade-in'
import { Hotel, Utensils, Home } from 'lucide-react'

export function Potential() {
  const vocations = [
    {
      icon: <Hotel className="w-6 h-6" />,
      title: 'Hotelaria Premium',
      desc: 'Ideal para resorts de alto padrão e bandeiras hoteleiras internacionais buscando exclusividade e contato direto com a natureza.',
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Condomínio Fechado',
      desc: 'Viabilidade para vilas exclusivas de altíssimo padrão, oferecendo lotes amplos com vista definitiva e acesso direto ao mar.',
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: 'Polo Gastronômico',
      desc: 'Potencial para desenvolver um hub gastronômico beira-mar, atendendo a um público exigente e agregando valor único ao destino.',
    },
  ]

  return (
    <section id="potencial" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-white/50 mb-4">
              Vocação do Ativo
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif leading-tight">
              Desenvolvimento de Alto Impacto
            </h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {vocations.map((item, i) => (
            <FadeIn
              key={i}
              delay={i * 200}
              className="border border-white/10 p-8 hover:bg-white/5 transition-colors"
            >
              <div className="bg-secondary text-primary w-12 h-12 flex items-center justify-center rounded-sm mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-serif font-medium mb-4">{item.title}</h4>
              <p className="text-white/70 font-light leading-relaxed">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
