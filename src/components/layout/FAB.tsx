import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

export function FAB() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        size="lg"
        className="rounded-full shadow-2xl bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-6 gap-3 group"
        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="font-medium tracking-wide">Entrar em contato</span>
      </Button>
    </div>
  )
}
