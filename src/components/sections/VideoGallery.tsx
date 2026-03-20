import { FadeIn } from '@/components/ui/fade-in'

export function VideoGallery() {
  const videos = [
    {
      id: 1,
      title: 'Aérea e Proximidade',
      src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    },
    {
      id: 2,
      title: 'Faixa de Areia',
      src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    },
    {
      id: 3,
      title: 'Topografia e Vegetação',
      src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-zinc-950 text-white border-y border-zinc-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-500 mb-4">
              Acervo de Vídeos
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-zinc-100">Imersão no Terreno</h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {videos.map((video, i) => (
            <FadeIn key={video.id} delay={i * 200}>
              <div className="flex flex-col group">
                <div className="relative aspect-video bg-zinc-900 overflow-hidden ring-1 ring-white/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                    poster={`https://img.usecurling.com/p/800/450?q=ocean%20coastline&color=black&seed=${video.id}`}
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
