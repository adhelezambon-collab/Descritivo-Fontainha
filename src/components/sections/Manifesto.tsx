import { FadeIn } from '@/components/ui/fade-in'

export function Manifesto() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif leading-snug text-foreground text-balance">
            "Onde a terra encontra a imensidão, nasce um legado inquestionável. A raridade não é um
            luxo, é um ativo finito."
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-8 text-muted-foreground text-lg md:text-xl font-light">
            Para quem compreende que a localização é a única moeda que nunca desvaloriza. Uma
            oportunidade reservada para investidores de visão e escala.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="w-12 h-px bg-secondary mx-auto mt-12" />
        </FadeIn>
      </div>
    </section>
  )
}
