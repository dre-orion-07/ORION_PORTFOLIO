import Container from '../../components/layout/container'

export default function Resume() {
  return (
    <main style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)' }}>

      {/* Header */}
      <section style={{ padding: '5rem 0 3rem', borderBottom: '1px solid var(--color-border)' }}>
        <Container>
          <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1rem' }} className="uppercase">
            My Background
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '3.5rem', fontWeight: 300, marginBottom: '1.5rem' }}>
            Resume
          </h1>
          <a
            href="/resume.pdf"
            download
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
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            DOWNLOAD PDF
          </a>
        </Container>
      </section>

      {/* Experience */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
            <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em' }} className="uppercase">
              Experience
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {[
                {
                  role: 'Founder & Developer',
                  company: '4A\'s Bread',
                  period: '2021 — Present',
                  description: 'Founded and operate a commercial bakery in Ikorodu, Lagos. Building BakeFlow ERP — a full production and business management system — to automate operations and model a scalable bakery business.',
                },
                {
                  role: 'Architect & Interior Designer',
                  company: 'Independent Practice',
                  period: '2019 — 2023',
                  description: 'Four years of professional architectural and interior design practice. Managed projects from concept to delivery, developed spatial planning systems, and led client-facing design processes.',
                },
              ].map((item) => (
                <div key={item.role} style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '1.25rem', fontWeight: 400 }}>
                        {item.role}
                      </h3>
                      <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                        {item.company}
                      </p>
                    </div>
                    <span style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}>
                      {item.period}
                    </span>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.8, marginTop: '0.75rem' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Education */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
            <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em' }} className="uppercase">
              Education
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {[
                {
                  degree: 'Full-Stack Web Development',
                  school: 'GoMyCode Ikeja, Lagos',
                  period: '2025 — Present',
                  description: 'Intensive full-stack training covering JavaScript, React, TypeScript, Node.js, databases, and software engineering fundamentals.',
                },
                {
                  degree: 'Architecture',
                  school: 'University (Nigeria)',
                  period: 'Completed 2019',
                  description: 'Undergraduate degree in Architecture. Developed strong foundations in systems thinking, spatial design, project management, and technical documentation.',
                },
              ].map((item) => (
                <div key={item.degree} style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '1.25rem', fontWeight: 400 }}>
                        {item.degree}
                      </h3>
                      <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                        {item.school}
                      </p>
                    </div>
                    <span style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}>
                      {item.period}
                    </span>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.8, marginTop: '0.75rem' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Tech Stack */}
      <section style={{ padding: '5rem 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
            <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em' }} className="uppercase">
              Tech Stack
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {['React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'Git & GitHub', 'Vite', 'Figma', 'OpenAI API', 'Prompt Engineering'].map((tech) => (
                <span
                  key={tech}
                  style={{
                    backgroundColor: 'var(--color-bg-elevated)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    padding: '0.4rem 1rem',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

    </main>
  )
}