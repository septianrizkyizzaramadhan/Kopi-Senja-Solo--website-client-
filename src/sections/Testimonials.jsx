import { Container } from '../components/ui/Container.jsx'
import { SectionHeading } from '../components/ui/SectionHeading.jsx'
import { testimonials } from '../data/site.js'
import { Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-coffee-50">
      <Container>
        <SectionHeading
          eyebrow="Testimoni"
          title="Kata mereka tentang Kopi Senja."
          align="center"
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="reveal bg-cream border border-coffee-900/10 rounded-sm p-6 sm:p-7 flex flex-col"
            >
              <Quote size={20} className="text-caramel" />
              <blockquote className="mt-4 text-coffee-900 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-coffee-900/10">
                <p className="font-medium text-coffee-900">{t.name}</p>
                <p className="text-sm text-coffee-800/60">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}