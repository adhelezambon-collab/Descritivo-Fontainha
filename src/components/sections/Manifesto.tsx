import { FadeIn } from '@/components/ui/fade-in'

export function ManifestoSection() {
  return (
    <section className="py-32 px-8 flex items-center justify-center bg-background text-center">
      <FadeIn className="max-w-md mx-auto">
        <h2 className="text-2xl sm:text-3xl font-serif text-foreground leading-relaxed">
          "Onde a <span className="text-primary italic">escassez de terra</span> encontra a
          imensidão do mar."
        </h2>
        <div className="w-12 h-[1px] bg-primary/30 mx-auto mt-10" />
      </FadeIn>
    </section>
  )
}
