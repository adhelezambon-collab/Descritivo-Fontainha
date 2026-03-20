import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrollProgress } from '@/hooks/use-scroll-progress'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'

const navItems = [
  { label: 'Visão Geral', id: 'hero' },
  { label: 'O Ativo', id: 'highlights' },
  { label: 'Localização', id: 'location' },
  { label: 'Potencial', id: 'potential' },
  { label: 'Mídia', id: 'media' },
  { label: 'Galeria', id: 'gallery' },
  { label: 'Condições', id: 'exclusivity' },
]

export function Header() {
  const progress = useScrollProgress()
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    setOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Progress Bar */}
      <div className="h-1 w-full bg-transparent">
        <div
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Header */}
      <div className="glass-header px-6 py-4 flex items-center justify-between mx-auto max-w-[600px]">
        <div className="font-serif font-bold text-xl tracking-widest text-foreground">
          A<span className="text-primary">.</span>
        </div>

        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="font-sans text-sm tracking-wide uppercase hover:bg-transparent hover:text-primary transition-colors"
            >
              Sumário <Menu className="ml-2 h-4 w-4" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="max-w-[600px] mx-auto rounded-t-2xl">
            <DrawerHeader className="border-b pb-6">
              <div className="flex justify-between items-center">
                <DrawerTitle className="font-serif text-2xl font-normal">
                  Sumário Executivo
                </DrawerTitle>
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <X className="h-5 w-5" />
                  </Button>
                </DrawerClose>
              </div>
            </DrawerHeader>
            <div className="p-6 flex flex-col gap-6">
              {navItems.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left font-sans text-lg text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-300 flex items-center gap-4"
                >
                  <span className="text-xs text-primary/50 font-mono w-4">0{i + 1}</span>
                  {item.label}
                </button>
              ))}
            </div>
            <div className="p-6 pt-0 mt-auto">
              <Button
                onClick={() => scrollTo('cta')}
                className="w-full h-12 text-md tracking-wide uppercase bg-foreground text-background hover:bg-foreground/90"
              >
                Acessar Dossiê
              </Button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  )
}
