import { FadeIn } from '@/components/ui/fade-in'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const images = [
  {
    url: 'https://img.usecurling.com/p/800/1000?q=luxury%20beach%20aerial&color=yellow&dpr=2',
    caption: 'Topografia privilegiada: a tela em branco.',
  },
  {
    url: 'https://img.usecurling.com/p/800/1000?q=ocean%20horizon&color=blue&dpr=2',
    caption: 'Privacidade absoluta no litoral cearense.',
  },
  {
    url: 'https://img.usecurling.com/p/800/1000?q=sand%20dunes&color=orange&dpr=2',
    caption: 'Um pôr do sol exclusivo para quem detém a visão.',
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-foreground overflow-hidden relative">
      <div className="px-6 mb-12">
        <FadeIn>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Perspectivas
          </span>
          <h2 className="text-3xl font-serif text-white">A visão do amanhã.</h2>
        </FadeIn>
      </div>

      <FadeIn delay={200}>
        <Carousel opts={{ align: 'start', loop: true }} className="w-full pl-6">
          <CarouselContent className="-ml-4">
            {images.map((img, index) => (
              <CarouselItem key={index} className="pl-4 basis-[85%]">
                <div className="relative group">
                  <div className="overflow-hidden rounded-lg aspect-[4/5]">
                    <img
                      src={img.url}
                      alt={`Gallery view ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                    <p className="text-white font-serif text-lg leading-snug">{img.caption}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 pr-6 mt-6">
            <CarouselPrevious className="static translate-y-0 bg-white/10 text-white border-white/20 hover:bg-white hover:text-black" />
            <CarouselNext className="static translate-y-0 bg-white/10 text-white border-white/20 hover:bg-white hover:text-black" />
          </div>
        </Carousel>
      </FadeIn>
    </section>
  )
}
