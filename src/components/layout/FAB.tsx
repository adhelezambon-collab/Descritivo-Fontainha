import { MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FAB() {
  const handleContact = () => {
    const element = document.getElementById('cta')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 lg:bottom-12 lg:right-1/2 lg:translate-x-[260px]">
      <Button
        onClick={handleContact}
        size="lg"
        className="rounded-full h-14 px-6 shadow-elevation animate-pulse-gold bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
      >
        <MessageSquare className="h-5 w-5" />
        <span className="hidden sm:inline">Solicitar acesso</span>
      </Button>
    </div>
  )
}
