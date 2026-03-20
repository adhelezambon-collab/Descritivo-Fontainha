import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6">
      <h1 className="text-6xl md:text-8xl font-serif text-primary mb-4">404</h1>
      <h2 className="text-2xl font-light mb-8 text-center">Página não encontrada</h2>
      <p className="text-muted-foreground text-center max-w-md mb-8 leading-relaxed">
        O conteúdo que você está procurando pode ter sido removido ou o endereço está incorreto.
      </p>
      <Button
        asChild
        className="bg-primary text-primary-foreground rounded-none px-8 h-12 uppercase tracking-wider text-sm"
      >
        <Link to="/">Voltar ao Início</Link>
      </Button>
    </div>
  )
}
