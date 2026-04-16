import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Franchise from './pages/Franchise'
import Home from './pages/Home'
import Menu from './pages/Menu'
import ScrollToTop from './components/ScrollToTop'
import LoaderScreen from './components/LoaderScreen'

export default function App() {
  return (
    <>
      <LoaderScreen />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}
