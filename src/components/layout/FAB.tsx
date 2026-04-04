import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

export function FAB() {
  return (
  <div className="fixed bottom-6 right-6 z-40 animate-[float_3s_ease-in-out_infinite]">
     <Button
  size="lg"
  className="group relative overflow-hidden rounded-full border border-white/15 bg-[linear-gradient(135deg,#e0c15d_0%,#c8a646_38%,#a8841f_100%)] text-[#111] shadow-[0_14px_30px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,0,0,0.12)] hover:scale-[1.04] hover:shadow-[0_20px_45px_rgba(0,0,0,0.35),0_0_20px_rgba(200,166,70,0.22)] h-14 px-6 gap-3 transition-all duration-500"
  onClick={() =>
    window.open(
      'https://wa.me/5585999815002?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20im%C3%B3vel.',
      '_blank'
    )
  }
>
  <Phone className="w-5 h-5 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6" />
  <span className="font-semibold tracking-[0.03em]">Falar no WhatsApp</span>
</Button>
    </div>
)
}
