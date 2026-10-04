import { Container } from '../components/ui/Container.jsx'
import { SectionHeading } from '../components/ui/SectionHeading.jsx'
import { advantages } from '../data/site.js'
import { Coffee, Home, MapPin, Wallet } from 'lucide-react'

const icons = [Home, Coffee, MapPin, Wallet]

export function Advantages() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-cream">
      <Container>
        <SectionHeading
          eyebrow="Keunggulan"
          title="Kenapa memilih Kopi Senja?"
        />
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8">
          {advantages.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div key={item.title} className="reveal">
                <div className="w-12 h-12 rounded-sm bg-coffee-100 flex items-center justify-center text-coffee-800">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl text-coffee-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-coffee-800/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}