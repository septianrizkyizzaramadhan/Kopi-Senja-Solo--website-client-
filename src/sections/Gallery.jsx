import { Container } from '../components/ui/Container.jsx'
import { SectionHeading } from '../components/ui/SectionHeading.jsx'
import { gallery } from '../data/site.js'

export function Gallery() {
  return (
    <section id="galeri" className="py-20 sm:py-28 lg:py-32 bg-coffee-950 scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="Galeri"
          title="Suasana di Kopi Senja."
          align="center"
          className="[&_h2]:text-cream [&_p]:text-cream/70"
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
          {gallery.map((src, i) => (
            <div
              key={src}
              className={`reveal overflow-hidden rounded-sm ${
                i === 0
                  ? 'col-span-2 md:col-span-2 md:row-span-2 aspect-square md:aspect-auto'
                  : 'aspect-square'
              }`}
            >
              <img
                src={src}
                alt={`Galeri Kopi Senja ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}