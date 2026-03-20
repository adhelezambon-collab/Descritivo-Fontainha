import { FadeIn } from '@/components/ui/fade-in'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const potentials = [
  {
    title: 'Hotelaria de Luxo',
    bullets: ['Escala para Resorts Premium', 'Topografia privilegiada', 'Acesso aéreo regional'],
  },
  {
    title: 'Condomínio Fechado',
    bullets: ['Privacidade absoluta', 'Lotes pé-na-areia', 'Segurança e isolamento'],
  },
  {
    title: 'Polo Gastronômico',
    bullets: [
      'Integração com a natureza',
      'Demanda reprimida na região',
      'Atração de público high-end',
    ],
  },
]

export function PotentialSection() {
  return (
    <section id="potential" className="py-24 px-6 bg-background">
      <FadeIn>
        <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
          Oportunidade
        </span>
        <h2 className="text-3xl font-serif mb-12">
          A tela em branco para o próximo marco do Ceará.
        </h2>
      </FadeIn>

      <div className="grid gap-6">
        {potentials.map((item, idx) => (
          <FadeIn key={idx} delay={idx * 150}>
            <Card className="border-border/50 shadow-sm hover:shadow-elevation transition-shadow bg-card/50 backdrop-blur">
              <CardHeader className="pb-3">
                <CardTitle className="font-serif text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="text-primary mt-1 text-[10px]">■</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
