import Container from '../../components/layout/container'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <main style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)' }}>

      {/* Header */}
      <section style={{ padding: '5rem 0 3rem', borderBottom: '1px solid var(--color-border)' }}>
        <Container>
          <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1rem' }} className="uppercase">
            My Work
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '3.5rem', fontWeight: 300 }}>
            Projects
          </h1>
        </Container>
      </section>

      {/* Projects List */}
      <section style={{ padding: '4rem 0' }}>
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {projects.map((project) => (
              <div
                key={project.id}
                style={{
                  borderBottom: '1px solid var(--color-border)',
                  padding: '2.5rem 0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '2rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-bg-elevated)')}
                onClick={() => { if (project.caseStudy) window.location.href = `#${project.caseStudy}` }}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <span style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.75rem', minWidth: '2rem', paddingTop: '4px' }}>
                  {project.number}
                </span>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '1.75rem', fontWeight: 400 }}>
                      {project.name}
                    </h2>
                    <span style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      padding: '2px 10px',
                      border: `1px solid ${project.status === 'Live' ? 'rgba(212,175,55,0.4)' : 'var(--color-border)'}`,
                      color: project.status === 'Live' ? 'var(--color-gold)' : 'var(--color-text-muted)',
                      fontFamily: 'var(--font-body)',
                    }}>
                      {project.status.toUpperCase()}
                    </span>
                  </div>

                  <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem', maxWidth: '600px' }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    {project.stack.map(tech => (
                      <span key={tech} style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.1em',
                        padding: '3px 10px',
                        backgroundColor: 'var(--color-bg-elevated)',
                        color: 'var(--color-text-muted)',
                        fontFamily: 'var(--font-body)',
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.15em', borderBottom: '1px solid var(--color-gold)', paddingBottom: '2px', textDecoration: 'none' }}
                        className="uppercase"
                      >
                        Live Demo →
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.15em', borderBottom: '1px solid var(--color-border)', paddingBottom: '2px', textDecoration: 'none' }}
                        className="uppercase"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>

                {project.caseStudy ? (
                  <a
                    href={`#${project.caseStudy}`}
                    style={{ color: 'var(--color-gold)', fontSize: '1.2rem', paddingTop: '4px', textDecoration: 'none' }}
                  >
                    →
                  </a>
                ) : (
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', paddingTop: '4px' }}>→</span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

    </main>
  )
}