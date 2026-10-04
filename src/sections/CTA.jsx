import { Container } from '../components/ui/Container.jsx'
import { siteConfig } from '../data/site.js'
import { waLink, mapsLink } from '../lib/wa.js'
import { MessageCircle, MapPin } from 'lucide-react'

export function CTA() {
  return (
    <section className="bg-coffee-900 text-cream">
      <Container>
        <div className="py-20 sm:py-24 text-center max-w-3xl mx-auto">
          <p className="eyebrow text-caramel">Mampir atau Pesan</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
            Sudah siap ngopi di Kopi Senja?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-cream/70 max-w-xl mx-auto">
            Pesan langsung via WhatsApp, atau datang langsung ke kedai kami di{' '}
            {siteConfig.address}.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 px-4 sm:px-0">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 sm:px-7 text-sm sm:text-base font-medium rounded-sm bg-caramel text-coffee-950 hover:bg-cream transition-colors w-full sm:w-auto"
            >
              <MessageCircle size={18} />
              Pesan via WhatsApp
            </a>
            <a
              href={mapsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 sm:px-7 text-sm sm:text-base font-medium rounded-sm border border-cream/30 text-cream hover:bg-cream hover:text-coffee-950 transition-colors w-full sm:w-auto"
            >
              <MapPin size={18} />
              Lihat Lokasi
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}