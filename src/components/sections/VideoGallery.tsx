import { FadeIn } from '@/components/ui/fade-in'

export function VideoGallery() {
  const videos = [
  {
    id: '/videos/VIDEO-2026-03-20-08-31-03 (2).mp4',
    title: 'Perspectiva Aérea e Dimensão',
  },
  {
    id: '/videos/VIDEO-2026-03-20-08-31-03 (2).mp4',
    title: 'Extensão da Faixa de Areia',
  },
  {
    id: '/videos/WhatsApp Video 2026-03-20 at 08.31.12 (Copy).mp4',
    title: 'Topografia e Vegetação Nativa',
  },
  {
    id: '/videos/WhatsApp Video 2026-03-20 at 08.31.12 (Copy).mp4',
    title: 'Acessibilidade e Estrutura',
  },
]

  return (
    <section id="videos" className="py-24 md:py-32 bg-zinc-950 text-white border-y border-zinc-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {videos.map((video, i) => (
            <FadeIn key={video.id} delay={i * 150}>
              <div className="flex flex-col group">
                <div className="relative aspect-video bg-zinc-900 overflow-hidden ring-1 ring-white/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0`}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  />
                </div>
                <div className="mt-6 text-center md:text-left">
                  <h4 className="text-xl font-serif text-zinc-100">{video.title}</h4>
                  <div className="w-8 h-px bg-secondary mt-4 mx-auto md:mx-0 transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
