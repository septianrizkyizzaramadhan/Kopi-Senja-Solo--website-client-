import { Container } from '../components/ui/Container.jsx'
import { SectionHeading } from '../components/ui/SectionHeading.jsx'
import { menuItems } from '../data/site.js'
import { MessageCircle } from 'lucide-react'
import { waLink } from '../lib/wa.js'

export function Menu() {
  return (
    <section id="menu" className="py-20 sm:py-28 lg:py-32 bg-coffee-50 scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="Menu Unggulan"
          title="Pilihan favorit di Kopi Senja."
          description="Beberapa menu yang paling sering dipesan pelanggan kami. Untuk menu lengkap, silakan tanya langsung lewat WhatsApp."
          align="center"
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {menuItems.map((item) => (
            <article
              key={item.name}
              className="reveal group bg-cream border border-coffee-900/10 rounded-sm p-5 sm:p-6 flex flex-col hover:border-coffee-900/25 transition-colors"
            >
              <span className="eyebrow text-caramel">{item.category}</span>
              <h3 className="mt-3 font-display text-2xl text-coffee-900">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-coffee-800/70 leading-relaxed flex-1">
                {item.desc}
              </p>
              <p className="mt-6 font-display text-xl text-coffee-900">
                {item.price}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 sm:mt-14 text-center px-4">
          <a
            href={waLink('Halo, saya mau lihat menu lengkap Kopi Senja Solo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 sm:px-7 text-sm sm:text-base font-medium rounded-sm bg-coffee-800 text-cream hover:bg-coffee-700 transition-colors w-full sm:w-auto"
          >
            <MessageCircle size={18} />
            Tanya Menu Lengkap
          </a>
        </div>
      </Container>
    </section>
  )
}