import { Play } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const videos = [
  {
    id: 1,
    title: 'A Visão Geral',
    caption: 'Drone e percurso de 97 hectares.',
    img: 'https://img.usecurling.com/p/800/450?q=beachfront%20drone&color=blue&dpr=2',
    ratio: 16 / 9,
    main: true,
  },
  {
    id: 2,
    title: 'Acessibilidade',
    caption: 'Do aeroporto ao terreno.',
    img: 'https://img.usecurling.com/p/400/400?q=road%20trip&color=gray&dpr=2',
    ratio: 1,
    main: false,
  },
  {
    id: 3,
    title: 'O Pé na Areia',
    caption: '850m de frente mar.',
    img: 'https://img.usecurling.com/p/400/400?q=sand%20beach&color=yellow&dpr=2',
    ratio: 1,
    main: false,
  },
]

function VideoThumbnail({ video }: { video: (typeof videos)[0] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group cursor-pointer space-y-3">
          <div className="relative overflow-hidden rounded-lg shadow-sm">
            <AspectRatio ratio={video.ratio}>
              <img
                src={video.img}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-primary transition-all">
                  <Play className="w-5 h-5 fill-current ml-1" />
                </div>
              </div>
            </AspectRatio>
          </div>
          <div>
            <h4 className="font-serif text-lg leading-tight">{video.title}</h4>
            <p className="text-sm text-muted-foreground">{video.caption}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0 bg-black border-none overflow-hidden">
        <AspectRatio
          ratio={16 / 9}
          className="bg-muted flex items-center justify-center text-muted-foreground"
        >
          {/* Mock Video Player */}
          <div className="text-center">
            <Play className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Demonstração do Vídeo Confidencial</p>
          </div>
        </AspectRatio>
      </DialogContent>
    </Dialog>
  )
}

export function MediaSection() {
  const mainVideo = videos.find((v) => v.main)!
  const subVideos = videos.filter((v) => !v.main)

  return (
    <section id="media" className="py-24 px-6 bg-secondary/20">
      <FadeIn>
        <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
          Experiência Imersiva
        </span>
        <h2 className="text-3xl font-serif mb-12">Conheça a dimensão da oportunidade.</h2>
      </FadeIn>

      <div className="space-y-8">
        <FadeIn>
          <VideoThumbnail video={mainVideo} />
        </FadeIn>

        <div className="grid grid-cols-2 gap-4">
          {subVideos.map((video, idx) => (
            <FadeIn key={video.id} delay={idx * 150}>
              <VideoThumbnail video={video} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
