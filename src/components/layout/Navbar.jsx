import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { cn } from '../../lib/cn.js'
import { navLinks, siteConfig } from '../../data/site.js'
import { waLink } from '../../lib/wa.js'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'bg-cream/95 backdrop-blur-md border-b border-coffee-900/10'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 sm:h-20 gap-6">
          <a
            href="#"
            className={cn(
              'font-display text-base sm:text-lg font-semibold tracking-tight transition-colors shrink-0',
              scrolled || open ? 'text-coffee-900' : 'text-cream'
            )}
          >
            {siteConfig.name}
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors whitespace-nowrap',
                    scrolled
                      ? 'text-coffee-800/80 hover:text-coffee-900'
                      : 'text-cream/80 hover:text-cream'
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block shrink-0">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-4 lg:px-5 text-sm font-medium rounded-sm bg-coffee-800 text-cream hover:bg-coffee-700 transition-colors whitespace-nowrap"
            >
              <MessageCircle size={15} />
              <span className="hidden lg:inline">Pesan via WhatsApp</span>
              <span className="lg:hidden">WhatsApp</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className={cn(
              'md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 transition-colors shrink-0',
              scrolled || open ? 'text-coffee-900' : 'text-cream'
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-6">
            <ul className="flex flex-col gap-1 pt-2 border-t border-coffee-900/10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base text-coffee-800 hover:text-coffee-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 w-full text-sm font-medium rounded-sm bg-coffee-800 text-cream hover:bg-coffee-700 transition-colors"
                >
                  <MessageCircle size={16} />
                  Pesan via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  )
}