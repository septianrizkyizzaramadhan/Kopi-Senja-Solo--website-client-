import { ArrowUpRight, Clock, MapPin } from 'lucide-react'
import { Container } from '../components/ui/Container.jsx'
import { siteConfig } from '../data/site.js'
import { waLink, mapsLink } from '../lib/wa.js'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-coffee-950 text-cream">
      {/* Full-bleed background photo */}
      <img
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=2000&q=80"
        alt="Suasana kedai Kopi Senja Solo"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />

      {/* Layered overlays — bikin teks kebaca tanpa foto ketutup total */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/75 to-coffee-950/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-coffee-950/60 via-transparent to-transparent"
      />

      <Container className="relative z-10 pb-12 sm:pb-16 lg:pb-20 pt-32">
        {/* Top meta strip */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="h-px w-8 sm:w-12 bg-caramel" />
          <p className="eyebrow text-caramel">
            Kedai Kopi — Surakarta
          </p>
        </div>

        {/* Headline — asymmetric, editorial */}
        <div className="max-w-4xl">
          <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.98] tracking-tight text-cream">
            Setiap senja
            <br />
            <span className="italic font-normal text-caramel">
              punya cerita.
            </span>
          </h1>

          <div className="mt-8 sm:mt-10 max-w-xl">
            <p className="text-base sm:text-lg text-cream/75 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>
        </div>

        {/* Bottom row — CTA + meta */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-cream/15 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-4 h-12 pl-6 pr-4 text-sm sm:text-base font-medium rounded-sm bg-cream text-coffee-950 hover:bg-caramel transition-colors"
            >
              Pesan via WhatsApp
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={mapsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 text-sm sm:text-base font-medium rounded-sm border border-cream/25 text-cream hover:bg-cream hover:text-coffee-950 transition-colors"
            >
              <MapPin size={17} />
              Lihat Lokasi
            </a>
          </div>

          {/* Meta info — right aligned on desktop */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-6 lg:gap-2 text-sm text-cream/60 lg:text-right">
            <span className="inline-flex items-center gap-2 lg:justify-end">
              <Clock size={15} className="text-caramel shrink-0" />
              {siteConfig.hours}
            </span>
            <span className="inline-flex items-center gap-2 lg:justify-end">
              <MapPin size={15} className="text-caramel shrink-0" />
              {siteConfig.address}
            </span>
          </div>
        </div>
      </Container>

      {/* Scroll hint */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <span className="block h-16 w-px bg-gradient-to-b from-transparent to-caramel/40" />
      </div>
    </section>
  )
}