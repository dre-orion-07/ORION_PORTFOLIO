import type { MouseEvent } from 'react'
import Container from '../../components/layout/container'

export default function CineMax() {
  return (
    <main style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)' }}>

      {/* Hero */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}>
        <Container>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1rem' }} className="uppercase">
                Case Study — 02
              </p>
              <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '3.5rem', fontWeight: 300, marginBottom: '1rem' }}>
                CineMax
              </h1>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '560px' }}>
                A production-grade movie and TV discovery platform with AI-powered recommendations, real-time TMDB data, and support for Hollywood, Anime, and Nollywood content.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '200px' }}>
              {[
                { label: 'Status', value: 'Live' },
                { label: 'Type', value: 'Full-Stack Web App' },
                { label: 'Stack', value: 'React 19, TypeScript, Vite, Tailwind CSS' },
                { label: 'AI', value: 'Groq LLaMA 3.3 + TMDB RAG' },
              ].map((item) => (
                <div key={item.label}>
                  <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', marginBottom: '0.25rem' }} className="uppercase">
                    {item.label}
                  </p>
                  <p style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
                    {item.value}
                  </p>
                </div>
              ))}
              
              <a
                href="https://cine-max-xi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'var(--color-gold)',
                  color: '#0A0A0A',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.15em',
                  fontSize: '0.75rem',
                  padding: '0.75rem 1.5rem',
                  display: 'inline-block',
                  fontWeight: 500,
                  textDecoration: 'none',
                  marginTop: '0.5rem',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '1')}
              >
                LIVE DEMO →
              </a>
              
              <a
                href="https://github.com/dre-orion-07/CineMax"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.15em',
                  fontSize: '0.75rem',
                  padding: '0.75rem 1.5rem',
                  display: 'inline-block',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '1')}
              >
                GITHUB →
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
            <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em' }} className="uppercase">
              The Problem
            </p>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '2rem', fontWeight: 300, lineHeight: 1.4, marginBottom: '1.5rem' }}>
                Most movie apps show you data. None of them help you decide.
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1rem' }}>
                Existing platforms like IMDb and Letterboxd are great for research but overwhelming for discovery. You either drown in information or get served algorithmic recommendations you did not ask for. There is no natural language interface — you cannot just ask what should I watch tonight if I loved Interstellar.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                I also wanted a platform that treated African content specifically Nollywood as a first-class category alongside Hollywood and Anime, not an afterthought buried in search filters.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
            <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em' }} className="uppercase">
              Features
            </p>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '2rem', fontWeight: 300, lineHeight: 1.4, marginBottom: '2rem' }}>
                Discovery, curation, and conversation in one platform.
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {[
                  { title: 'AI Movie Assistant', description: 'Natural language recommendations powered by Groq LLaMA 3.3 with live TMDB data injected as context — true RAG architecture.' },
                  { title: 'Multi-Content Tabs', description: 'Dedicated sections for Movies, TV Shows, Anime, and Nollywood — each with its own hero, carousels, and discovery flow.' },
                  { title: 'Universal Search', description: 'A single search bar that queries movies and TV shows simultaneously using the TMDB multi-search endpoint.' },
                  { title: 'Netflix-Style Hero', description: 'Auto-rotating full-screen hero banner with backdrop images, ratings, and smooth Framer Motion transitions.' },
                  { title: 'Favorites and Watchlist', description: 'Persistent client-side storage via Zustand with localStorage — add, remove, and manage your personal library.' },
                  { title: 'Trailer Playback', description: 'YouTube trailer modal that launches directly from the movie details page with keyboard and click-outside close.' },
                  { title: 'Infinite Scroll', description: 'IntersectionObserver-based infinite scroll on Genres, Trending, Top Rated, Anime, and Nollywood pages.' },
                  { title: 'Dark and Light Theme', description: 'Full theme toggle with CSS variable swap across the entire design system — preference persisted to localStorage.' },
                ].map((feature) => (
                  <div key={feature.title} style={{ borderLeft: '1px solid var(--color-border-gold)', paddingLeft: '1.25rem' }}>
                    <p style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                      {feature.title}
                    </p>
                    <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Tech Stack */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
            <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em' }} className="uppercase">
              Tech Stack
            </p>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '2rem', fontWeight: 300, lineHeight: 1.4, marginBottom: '1.5rem' }}>
                Senior-level stack, deliberately chosen.
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '2rem' }}>
                Every technology in this stack was chosen for a specific reason not because it was trending, but because it solved a real engineering problem in the cleanest way possible.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {[
                  { tech: 'React 19', reason: 'Latest concurrent features' },
                  { tech: 'TypeScript', reason: 'Strict type safety throughout' },
                  { tech: 'Vite', reason: 'Fast builds and HMR' },
                  { tech: 'Tailwind CSS v4', reason: 'Utility-first styling' },
                  { tech: 'TanStack Query', reason: 'Server state, caching, retries' },
                  { tech: 'Zustand', reason: 'Lightweight global state' },
                  { tech: 'Framer Motion', reason: 'Production-grade animations' },
                  { tech: 'React Router v7', reason: 'File-based routing' },
                  { tech: 'Axios', reason: 'Centralized API layer' },
                  { tech: 'Groq API', reason: 'LLaMA 3.3 AI inference' },
                  { tech: 'TMDB API', reason: 'Real-time movie data' },
                  { tech: 'Vercel', reason: 'Edge deployment and serverless' },
                ].map((item) => (
                  <div key={item.tech} style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', padding: '1rem 1.25rem', minWidth: '160px' }}>
                    <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                      {item.tech}
                    </p>
                    <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}>
                      {item.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How I Built It */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
            <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em' }} className="uppercase">
              How I Built It
            </p>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '2rem', fontWeight: 300, lineHeight: 1.4, marginBottom: '1.5rem' }}>
                Phase-by-phase, one approval at a time.
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1rem' }}>
                CineMax was built using a strict phase-based engineering workflow no phase started until the previous one was reviewed, tested, and approved. Each phase covered analysis, implementation, review, testing, optimization, and documentation before a git commit was made.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1rem' }}>
                The AI assistant went through three iterations first plain Claude API which had no credits, then Groq SDK which had a module resolution failure, then Groq REST API which was clean with zero dependencies. Each failure was a real engineering problem solved with deliberate debugging, not trial and error.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                A key architectural fix was discovering that a raw CSS reset sitting outside Tailwind cascade layers was silently overriding all utility spacing classes. Wrapping it in @layer base fixed every layout issue across the entire app in one line.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What's Next */}
      <section style={{ padding: '5rem 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
            <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em' }} className="uppercase">
              What's Next
            </p>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '2rem', fontWeight: 300, lineHeight: 1.4, marginBottom: '1.5rem' }}>
                Authentication, social features, and a Nollywood partnership.
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1rem' }}>
                The next version of CineMax will add user authentication via Supabase, enabling cloud-synced favorites and watchlists across devices. Social features ratings, reviews, and shared watchlists — will follow.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                The long-term vision is to build a dedicated Nollywood discovery layer one that goes beyond TMDB's limited Nigerian content coverage by partnering with local distributors and streaming platforms to surface African content that global platforms ignore.
              </p>
            </div>
          </div>
        </Container>
      </section>

    </main>
  )
}