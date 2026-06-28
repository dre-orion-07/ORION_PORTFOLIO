import Container from '../../components/layout/container'
import type { MouseEvent } from 'react'

export default function NotFound() {
  return (
    <main style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)', display: 'flex', alignItems: 'center' }}>
      <Container>
        <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1rem' }} className="uppercase">
          Error 404
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '6rem', fontWeight: 300, lineHeight: 1, marginBottom: '1.5rem' }}>
          Page not found.
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '400px' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          style={{
            backgroundColor: 'var(--color-gold)',
            color: '#0A0A0A',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.15em',
            fontSize: '0.75rem',
            padding: '0.875rem 2.5rem',
            display: 'inline-block',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.opacity = '0.85' }}
          onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.opacity = '1' }}
        >
          GO HOME
        </a>
      </Container>
    </main>
  )
}