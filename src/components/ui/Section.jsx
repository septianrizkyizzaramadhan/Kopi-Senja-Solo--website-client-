import { cn } from '../../lib/cn.js'

export function Section({ id, className, children, ...props }) {
  return (
    <section
      id={id}
      className={cn('py-16 sm:py-24 lg:py-32', className)}
      {...props}
    >
      {children}
    </section>
  )
}