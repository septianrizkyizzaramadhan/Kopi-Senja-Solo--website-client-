import { cn } from '../../lib/cn.js'

const variants = {
  primary: 'bg-coffee-800 text-cream hover:bg-coffee-700',
  outline:
    'border border-coffee-800/30 text-coffee-800 hover:bg-coffee-800 hover:text-cream hover:border-coffee-800',
  ghost: 'text-coffee-800 hover:bg-coffee-100',
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-8 text-base',
}

export function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-wide',
        'transition-colors duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee-400 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}