import { cn } from '../../lib/cn.js'

const sizes = {
  1: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.05]',
  2: 'text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1]',
  3: 'text-2xl sm:text-3xl lg:text-4xl leading-tight',
  4: 'text-xl sm:text-2xl',
}

export function Heading({ level = 2, className, children, ...props }) {
  const Tag = `h${level}`
  return (
    <Tag
      className={cn(
        'font-display font-semibold text-charcoal',
        sizes[level],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}