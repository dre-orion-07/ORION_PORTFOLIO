import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from './container'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav
      style={{
        backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid #2A2A2A' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <Container className="flex items-center justify-between h-16">

        <Link
          to="/"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-gold)', minWidth: '80px' }}
          className="text-xl font-semibold tracking-widest uppercase"
        >
          Dre
        </Link>

        <ul className="hidden md:flex items-center gap-9 flex-1 justify-end">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                style={{
                  color: location.pathname === link.path ? 'var(--color-gold)' : 'var(--color-text-secondary)',
                  transition: 'color 0.2s ease',
                }}
                className="text-sm tracking-wider uppercase hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block" style={{ minWidth: '80px' }} />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: 'var(--color-text-secondary)', marginLeft: 'auto' }}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span style={{ backgroundColor: 'currentColor' }} className={`block h-px w-6 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span style={{ backgroundColor: 'currentColor' }} className={`block h-px w-6 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span style={{ backgroundColor: 'currentColor' }} className={`block h-px w-6 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </Container>

      {menuOpen && (
        <div style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }} className="md:hidden">
          <Container>
            <ul className="flex flex-col py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{ color: location.pathname === link.path ? 'var(--color-gold)' : 'var(--color-text-secondary)' }}
                    className="text-sm tracking-wider uppercase"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </nav>
  )
}