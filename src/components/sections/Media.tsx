import { FadeIn } from '@/components/ui/fade-in'
import { Play } from 'lucide-react'

export function Media() {
  const videos = [
    {
      title: 'Voo de Drone',
      caption: 'A imensidão dos 97 hectares a partir do oceano.',
      duration: '1:20',
      img: 'https://img.usecurling.com/p/800/400?q=ocean%20drone%20view&color=blue',
    },
    {
      title: 'Acesso e Estrutura',
      caption: 'A viabilidade técnica para grandes empreendimentos.',
      duration: '0:30',
      img: 'https://img.usecurling.com/p/400/300?q=coastal%20road&color=gray',
    },
    {
      title: 'Visão do Investidor',
      caption: 'A escala do terreno e potencial de valorização.',
      duration: '0:15',
      img: 'https://img.usecurling.com/p/400/300?q=luxury%20beach%20estate',
    },
  ]

  return (
    <section id="videos" className="py-24 md:py-32 bg-zinc-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Apresentação Visual
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-primary">O Ativo em Movimento</h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Video */}
          <FadeIn className="md:col-span-2">
            <div className="group relative aspect-video bg-muted overflow-hidden cursor-pointer">
              <img
                src={videos[0].img}
                alt={videos[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/30">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 text-white ml-2" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <span className="text-xs font-bold tracking-widest uppercase mb-2 block text-secondary">
                  {videos[0].duration}
                </span>
                <h4 className="text-2xl font-serif mb-2">{videos[0].title}</h4>
                <p className="text-white/80 font-light text-sm md:text-base">{videos[0].caption}</p>
              </div>
            </div>
          </FadeIn>

          {/* Secondary Videos */}
          {videos.slice(1).map((video, i) => (
            <FadeIn key={i} delay={i * 200}>
              <div className="group relative aspect-video bg-muted overflow-hidden cursor-pointer">
                <img
                  src={video.img}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/30">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 text-white ml-1.5" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <span className="text-xs font-bold tracking-widest uppercase mb-2 block text-secondary">
                    {video.duration}
                  </span>
                  <h4 className="text-xl font-serif mb-1">{video.title}</h4>
                  <p className="text-white/80 font-light text-sm">{video.caption}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
