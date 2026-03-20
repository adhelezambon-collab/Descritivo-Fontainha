import { MapPin, Navigation, Plane } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'

const points = [
  { icon: Navigation, dist: '150 km', label: 'de Fortaleza (Capital)' },
  { icon: Plane, dist: '15 km', label: 'do Aeroporto de Aracati' },
  { icon: MapPin, dist: '12 km', label: 'de Canoa Quebrada' },
]

export function LocationSection() {
  return (
    <section id="location" className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Decorative Map Background */}
      <div className="absolute right-0 top-0 opacity-5 pointer-events-none w-full h-full">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full fill-current"
        >
          <path d="M0,0 Q50,100 100,0 V100 H0 Z" />
        </svg>
      </div>

      <div className="relative z-10 px-6">
        <FadeIn>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Eixo Logístico
          </span>
          <h2 className="text-3xl font-serif mb-6 text-white">Localização Estratégica.</h2>
          <p className="text-white/60 mb-12 max-w-sm font-light">
            O isolamento que o investidor busca, com a infraestrutura que o alto padrão exige.
            Acesso facilitado para o mundo.
          </p>
        </FadeIn>

        <div className="space-y-6">
          {points.map((point, idx) => {
            const Icon = point.icon
            return (
              <FadeIn key={idx} delay={idx * 100} className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-serif text-white">{point.dist}</div>
                  <div className="text-sm text-white/50">{point.label}</div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
