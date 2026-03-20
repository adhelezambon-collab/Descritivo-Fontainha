import { Outlet } from 'react-router-dom'
import { Header } from './layout/Header'
import { FAB } from './layout/FAB'

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex flex-col min-h-screen relative w-full max-w-[600px] mx-auto bg-background shadow-2xl shadow-black/5">
        <Outlet />
      </main>
      <FAB />
    </div>
  )
}
