import { Container } from '../ui/Container.jsx'
import { siteConfig } from '../../data/site.js'
import { waLink, mapsLink } from '../../lib/wa.js'
import { Instagram, MessageCircle, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-coffee-950 text-cream/70">
      <Container>
        <div className="py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-cream">{siteConfig.name}</p>
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="eyebrow text-cream/50">Kontak</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cream transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cream transition-colors"
                >
                  <Instagram size={16} />@{siteConfig.instagram}
                </a>
              </li>
              <li>
                <a
                  href={mapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 hover:text-cream transition-colors"
                >
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  {siteConfig.address}
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <p className="eyebrow text-cream/50">Jam Buka</p>
            <p className="mt-4 text-sm">{siteConfig.hours}</p>
          </div>
        </div>

        <div className="py-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/40">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Dibuat dengan hangat di Surakarta.</p>
        </div>
      </Container>
    </footer>
  )
}