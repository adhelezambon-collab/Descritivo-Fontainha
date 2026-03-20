import { Lock } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'

export function ExclusivitySection() {
  return (
    <section id="exclusivity" className="py-24 px-6 bg-background">
      <FadeIn>
        <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mb-8">
          <Lock className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-3xl font-serif mb-6">Modelo de Negociação Privada</h2>
        <div className="space-y-4 text-muted-foreground font-light leading-relaxed mb-12">
          <p>
            A natureza deste ativo exige discrição. As condições comerciais, documentação legal e
            análises topográficas detalhadas são reservadas exclusivamente a investidores
            pré-qualificados.
          </p>
          <p>
            Não atuamos com "venda aberta". Nosso modelo baseia-se no alinhamento de visão de longo
            prazo com o futuro proprietário.
          </p>
        </div>
      </FadeIn>

      <FadeIn
        delay={200}
        id="cta"
        className="space-y-4 p-8 bg-card border border-border/50 rounded-xl shadow-subtle text-center"
      >
        <h3 className="font-serif text-xl mb-6">Acesse as Informações Confidenciais</h3>
        <Button className="w-full h-14 text-base font-medium tracking-wide shadow-elevation transition-all hover:scale-[1.02]">
          Receber Dossiê Completo
        </Button>
        <Button
          variant="outline"
          className="w-full h-14 text-base font-medium tracking-wide bg-transparent border-foreground/20 hover:bg-foreground/5"
        >
          Agendar Call Privada
        </Button>
      </FadeIn>
    </section>
  )
}
