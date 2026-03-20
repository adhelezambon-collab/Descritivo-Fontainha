import { FadeIn } from '@/components/ui/fade-in'
import img1 from '@/assets/photo-2026-03-20-08-31-13-bdf5f.jpg'
import imgHero from '@/assets/photo-2026-03-20-08-31-25-72064.jpg'

export function Gallery() {
  const photos = [
    {
      src: img1,
      caption: 'A escala monumental da Praia da Fontainha.',
    },
    {
      src: imgHero,
      caption: '850 metros de conexão direta com o Atlântico.',
    },
    {
      src: 'https://img.usecurling.com/p/800/800?q=tropical%20beach%20landscape',
      caption: 'Topografia privilegiada para projetos de alto impacto.',
    },
    {
      src: 'https://img.usecurling.com/p/800/800?q=sand%20dunes%20blue%20sky',
      caption: 'Beleza natural preservada: o cenário do seu próximo resort.',
    },
  ]

  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Galeria Exclusiva
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-primary">Perspectivas do Ativo</h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {photos.map((photo, i) => (
            <FadeIn
              key={i}
              delay={i * 100}
              className="group relative aspect-square overflow-hidden bg-muted"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
                <p className="text-white font-light text-base md:text-lg">{photo.caption}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
