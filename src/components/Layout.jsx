import { Outlet } from 'react-router-dom'
import CallFab from './CallFab'
import Footer from './Footer'
import Navbar from './Navbar'
import Preloader from './Preloader'

export default function Layout() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Preloader />
      <Navbar />
      <main className="overflow-x-hidden pt-20">
        <Outlet />
      </main>
      <Footer />
      <CallFab />
    </div>
  )
}
