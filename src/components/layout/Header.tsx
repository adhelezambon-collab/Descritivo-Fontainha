import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Localização', href: '#localizacao' },
    { name: 'Potencial', href: '#potencial' },
    { name: 'Vídeos', href: '#videos' },
    { name: 'Galeria', href: '#galeria' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b' : 'bg-transparent text-white',
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="font-serif text-xl font-bold tracking-widest uppercase cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          Imóvel Raro
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm uppercase tracking-wider hover:text-secondary transition-colors',
                !isScrolled && 'text-white/90 hover:text-white',
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-current"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b shadow-lg p-6 flex flex-col gap-6 text-foreground">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium tracking-wide border-b border-border pb-4 last:border-0 hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
