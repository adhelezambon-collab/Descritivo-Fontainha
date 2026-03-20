export function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a0a] text-white/50 text-center">
      <div className="container mx-auto px-6">
        <p className="font-serif text-xl mb-4 text-white/80">Imóvel Raro</p>
        <p className="text-sm font-light">
          &copy; {new Date().getFullYear()} Todos os direitos reservados. Apresentação estritamente
          confidencial.
        </p>
      </div>
    </footer>
  )
}
