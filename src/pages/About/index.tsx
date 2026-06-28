import Container from '../../components/layout/container'

export default function About() {
  return (
    <main style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)' }}>

      {/* Header */}
      <section style={{ padding: '5rem 0 3rem', borderBottom: '1px solid var(--color-border)' }}>
        <Container>
          <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1rem' }} className="uppercase">
            Who I Am
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '3.5rem', fontWeight: 300 }}>
            About
          </h1>
        </Container>
      </section>

      {/* Main Story */}
      {/* Main Story */}
<section style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-border)' }}>
  <Container>
    <div style={{ maxWidth: '720px' }}>

      <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '2.2rem', fontWeight: 300, lineHeight: 1.4, marginBottom: '2rem' }}>
        I'm Damilare, a full-stack developer based in Lagos, Nigeria.
      </h2>

      <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1.5rem' }}>
        Before I wrote my first line of code, I spent four years as a professional architect and interior designer. I planned buildings, managed complex spatial systems, and obsessed over the intersection of structure and human experience. That work taught me something I carry into every project today: good design is not just how something looks. It is how it works.
      </p>

      <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1.5rem' }}>
        My move to software was a natural evolution of that mindset. I realized the same logic used to design physical spaces could be applied to building digital systems, but with the ability to iterate, scale, and solve problems at a speed that construction never allowed. I traded blueprints for logic and code, and I have not looked back.
      </p>

      <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '2rem' }}>
        AI is central to how I build. Not as a shortcut, but as a thinking partner. I use it to pressure-test my logic, explore solutions I might not reach alone, and design systems that are more resilient from the start. In a field moving this fast, working with AI deliberately is not optional. It is the edge.
      </p>

      <div style={{ borderLeft: '2px solid var(--color-gold)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
        <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', marginBottom: '1rem' }} className="uppercase">
          What I'm Building Right Now
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '0.75rem' }}>
          <span style={{ color: 'var(--color-text-primary)' }}>BakeFlow ERP</span> — a full production and business management system built for my own bakery, designed to scale to any food business.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9 }}>
          <span style={{ color: 'var(--color-text-primary)' }}>BookMatch AI</span> — a personalized recommendation engine that learns a reader's preferences and surfaces books they will actually enjoy.
        </p>
      </div>

      <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9 }}>
        Every project I take on is driven by one standard: build something clean, functional, and worth using. I bring the same rigorous attention to a React component or a database schema that I once brought to a structural drawing. The medium is different. The discipline is the same.
      </p>

    </div>
  </Container>
</section>

      {/* Quick Facts */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
            {[
              { label: 'Based In', value: 'Lagos, Nigeria' },
              { label: 'Background', value: 'Architecture & Design' },
              { label: 'Currently', value: 'Open to Opportunities' },
              { label: 'Focus', value: 'Full-Stack & AI Engineering' },
              { label: 'Training', value: 'GoMyCode Ikeja' },
              { label: 'Building', value: 'SaaS for Nigerian Markets' },
            ].map((fact) => (
              <div key={fact.label} style={{ borderLeft: '1px solid var(--color-border-gold)', paddingLeft: '1.5rem' }}>
                <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }} className="uppercase">
                  {fact.label}
                </p>
                <p style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0' }}>
        <Container>
          <div style={{ maxWidth: '500px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '2rem', fontWeight: 300, lineHeight: 1.4, marginBottom: '1.5rem' }}>
              Want to build something together?
            </h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="/projects"
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
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '1')}
              >
                SEE MY WORK
              </a>

              <a
                href="/contact"
                style={{
                  border: '1px solid rgba(212,175,55,0.4)',
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.15em',
                  fontSize: '0.75rem',
                  padding: '0.875rem 2.5rem',
                  display: 'inline-block',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.color = 'var(--color-text-primary)'
                  e.currentTarget.style.borderColor = 'var(--color-gold)'
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)'
                  e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'
                }}
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </Container>
      </section>

    </main>
  )
}