import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      style={{
        maxWidth: '1152px',
        margin: '0 auto',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      }}
      className={className}
    >
      {children}
    </div>
  )
}