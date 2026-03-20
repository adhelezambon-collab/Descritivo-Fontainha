export function Footer() {
  return (
    <footer className="py-12 px-6 bg-foreground text-center border-t border-white/10">
      <div className="font-serif font-bold text-2xl tracking-widest text-white mb-6">
        A<span className="text-primary">.</span>
      </div>
      <p className="text-xs text-white/40 tracking-wider uppercase mb-2">
        Apresentação Confidencial
      </p>
      <p className="text-xs text-white/30">
        &copy; {new Date().getFullYear()} Patrimônio Exclusivo. Todos os direitos reservados.
      </p>
    </footer>
  )
}
