import { Container } from '../components/ui/Container.jsx'
import { SectionHeading } from '../components/ui/SectionHeading.jsx'
import { siteConfig } from '../data/site.js'

export function About() {
  return (
    <section id="tentang" className="py-20 sm:py-28 lg:py-32 bg-cream scroll-mt-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="reveal order-2 lg:order-1">
            <SectionHeading
              eyebrow="Tentang Kami"
              title="Tempat di mana kopi dan senja bertemu."
              description="Kopi Senja Solo hadir di jantung Surakarta sebagai ruang untuk pelajar, mahasiswa, pekerja, dan keluarga muda. Kami percaya bahwa kopi bukan cuma minuman — tapi alasan untuk berhenti sejenak, ngobrol, dan menikmati senja."
            />
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <dt className="eyebrow text-coffee-600">Jam Buka</dt>
                <dd className="mt-2 text-coffee-900 font-medium">
                  {siteConfig.hours}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-coffee-600">Lokasi</dt>
                <dd className="mt-2 text-coffee-900 font-medium">
                  {siteConfig.address}
                </dd>
              </div>
            </dl>
          </div>

          <div className="reveal order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80"
                alt="Interior kedai"
                className="aspect-[3/4] object-cover rounded-sm w-full"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80"
                alt="Barista menuang kopi"
                className="aspect-[3/4] object-cover rounded-sm w-full mt-8 sm:mt-10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}