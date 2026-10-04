import { Container } from '../components/ui/Container.jsx'
import { SectionHeading } from '../components/ui/SectionHeading.jsx'
import { siteConfig } from '../data/site.js'
import { mapsEmbed, mapsLink, waLink } from '../lib/wa.js'
import { Clock, MapPin, MessageCircle } from 'lucide-react'

export function Location() {
  return (
    <section id="lokasi" className="py-20 sm:py-28 lg:py-32 bg-cream scroll-mt-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="reveal">
            <SectionHeading
              eyebrow="Lokasi & Jam Buka"
              title="Mampir yuk ke Kopi Senja."
              description="Kami berada di Jalan Slamet Riyadi, Surakarta — mudah dijangkau dari mana saja di Solo."
            />
            <dl className="mt-8 sm:mt-10 space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-coffee-700 shrink-0 mt-1" size={20} />
                <div>
                  <dt className="eyebrow text-coffee-600">Alamat</dt>
                  <dd className="mt-1 text-coffee-900">{siteConfig.address}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-coffee-700 shrink-0 mt-1" size={20} />
                <div>
                  <dt className="eyebrow text-coffee-600">Jam Buka</dt>
                  <dd className="mt-1 text-coffee-900">{siteConfig.hours}</dd>
                </div>
              </div>
            </dl>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={mapsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium rounded-sm border border-coffee-800/30 text-coffee-800 hover:bg-coffee-800 hover:text-cream transition-colors"
              >
                <MapPin size={16} />
                Buka di Google Maps
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium rounded-sm bg-coffee-800 text-cream hover:bg-coffee-700 transition-colors"
              >
                <MessageCircle size={16} />
                Tanya via WhatsApp
              </a>
            </div>
          </div>

          <div className="reveal">
            <div className="aspect-[4/5] sm:aspect-square rounded-sm overflow-hidden border border-coffee-900/10">
              <iframe
                title="Peta lokasi Kopi Senja Solo"
                src={mapsEmbed()}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}