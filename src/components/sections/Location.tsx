import { FadeIn } from '@/components/ui/fade-in'
import locationImage from '@/assets/photo-2026-03-20-08-31-14-21c68.jpg'

export function Location() {
  const distances = [
    { label: 'Fortaleza', value: '150 km' },
    { label: 'Aeroporto de Aracati', value: '15 km' },
    { label: 'Praia de Canoa Quebrada', value: '12 km' },
  ]

  return (
    <section id="localizacao" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          <div className="flex-1 w-full">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Posicionamento Estratégico
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif text-primary mb-8 leading-tight">
                Acessibilidade global, <br />
                isolamento preservado.
              </h3>
              <p className="text-lg text-muted-foreground font-light mb-10 leading-relaxed">
                Situado estrategicamente no litoral leste cearense, o terreno oferece a
                tranquilidade de um refúgio exclusivo com a conveniência de infraestrutura
                aeroportuária e rodoviária a poucos minutos de distância.
              </p>

              <ul className="space-y-6">
                {distances.map((dist, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between border-b border-border pb-4"
                  >
                    <span className="text-lg font-light text-foreground">{dist.label}</span>
                    <span className="text-xl font-serif font-medium text-secondary">
                      {dist.value}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="flex-1 w-full">
            <FadeIn direction="left">
              <div className="relative aspect-[4/5] md:aspect-square overflow-hidden bg-muted">
                <img
                  src={locationImage}
                  alt="Mapa de Localização - Aracati Fontainha"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
              </div>
              <p className="text-sm text-muted-foreground font-light mt-4 text-center italic">
                Um ativo estratégico no corredor turístico internacional do Ceará.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
