import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

export function FAB() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
  size="lg"
  className="group rounded-full border border-white/10 bg-[#c8a646] text-white shadow-[0_12px_35px_rgba(0,0,0,0.28)] hover:bg-[#d6b45a] hover:shadow-[0_20px_45px_rgba(0,0,0,0.4)] h-14 px-6 gap-3 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03]"
  onClick={() =>
    window.open(
      'https://wa.me/5585999815002?text=Olá,%20tenho%20interesse%20no%20imóvel.',
      '_blank'
    )
  }
>
  <Phone className="w-5 h-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
  <span className="font-medium tracking-wide">Falar no WhatsApp</span>
</Button>
