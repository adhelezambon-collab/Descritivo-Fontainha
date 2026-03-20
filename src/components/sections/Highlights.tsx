import { FadeIn } from '@/components/ui/fade-in'
import { Card, CardContent } from '@/components/ui/card'
import { Map, Maximize, Waves } from 'lucide-react'

export function Highlights() {
  const stats = [
    {
      icon: <Maximize className="w-8 h-8 stroke-[1.5] mb-4 text-secondary" />,
      title: '97 Hectares',
      desc: 'Área total beira-mar com topografia privilegiada para projetos de alto impacto.',
    },
    {
      icon: <Waves className="w-8 h-8 stroke-[1.5] mb-4 text-secondary" />,
      title: '850 Metros de Frente Mar',
      desc: 'Extensão linear monumental, garantindo exclusividade absoluta em frente ao Atlântico.',
    },
    {
      icon: <Map className="w-8 h-8 stroke-[1.5] mb-4 text-secondary" />,
      title: 'Localização Estratégica',
      desc: 'Acesso facilitado no coração do corredor turístico internacional do Ceará.',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mt-8 md:mt-16 mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-primary font-medium tracking-wide">
              Descritivo
            </h2>
            <div className="w-12 h-[2px] bg-secondary mx-auto mt-6 opacity-80" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 200}>
              <Card className="bg-transparent border-0 shadow-none text-center h-full">
                <CardContent className="pt-6 flex flex-col items-center">
                  {stat.icon}
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                    {stat.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{stat.desc}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
