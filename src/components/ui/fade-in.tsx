import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { useFadeIn } from '@/hooks/use-fade-in'

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number
  threshold?: number
}

export function FadeIn({ children, className, delay = 0, threshold = 0.1, ...props }: FadeInProps) {
  const { ref, isVisible } = useFadeIn(threshold)

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 transition-opacity duration-1000',
        isVisible ? 'animate-fade-in-up' : '',
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}
