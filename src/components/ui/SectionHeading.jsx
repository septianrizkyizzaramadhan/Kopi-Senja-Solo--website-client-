import { Heading } from './Heading.jsx'
import { cn } from '../../lib/cn.js'

export function SectionHeading({ eyebrow, title, description, align = 'left', className }) {
  return (
    <div className={cn(align === 'center' && 'text-center mx-auto max-w-2xl', className)}>
      {eyebrow && <p className="eyebrow text-caramel">{eyebrow}</p>}
      <Heading level={2} className="mt-3">
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-lg text-coffee-800/70 leading-relaxed">{description}</p>
      )}
    </div>
  )
}