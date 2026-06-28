import { motion } from 'framer-motion'
import Container from '../../components/layout/container'
import { projects } from '../../data/projects'
import { skillGroups } from '../../data/skills'
export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section
        style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)' }}
        className="relative flex items-center"
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <Container className="pt-24 pb-16">
          <div className="max-w-3xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', letterSpacing: '0.2em' }}
              className="text-xs uppercase mb-6"
            >
              Ogunyeye Damilare — Full Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', lineHeight: 1.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-light mb-6"
            >
              I build things
              <br />
              <span style={{ color: 'var(--color-gold)' }}>that work.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', maxWidth: '520px', lineHeight: 1.8 }}
              className="text-lg mb-10"
            >
             I design systems, build full-stack applications, and ship
products that solve real problems. Clean code. Deliberate decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
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
                  transition: 'opacity 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.opacity = '1')}
              >
                VIEW PROJECTS
              </a>

              <a
                href="/about"
                style={{
                  border: '1px solid rgba(212,175,55,0.4)',
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.15em',
                  fontSize: '0.75rem',
                  padding: '0.875rem 2.5rem',
                  display: 'inline-block',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
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
                ABOUT ME
              </a>
            </motion.div>

          </div>
        </Container>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
          className="flex flex-col items-center gap-2"
        >
          <span style={{ color: 'var(--color-text-muted)', letterSpacing: '0.2em' }} className="text-xs uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ width: '1px', height: '40px', backgroundColor: 'var(--color-gold)', opacity: 0.4 }}
          />
        </motion.div>
      </section>

      {/* STATS */}
      <section
        style={{
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
        }}
      >
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
             { value: '3+', label: 'Projects Deployed' },
{ value: '10+', label: 'Technologies' },
{ value: '5+', label: 'APIs Integrated' },
{ value: '100%', label: 'Ship Rate' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  borderRight: i < 3 ? '1px solid var(--color-border)' : 'none',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-gold)',
                    fontSize: '3rem',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    color: 'var(--color-text-muted)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    marginTop: '0.5rem',
                  }}
                  className="uppercase"
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* SKILLS PREVIEW */}
<section style={{ backgroundColor: 'var(--color-bg-primary)', padding: '6rem 0' }}>
  <Container>

    <div style={{ marginBottom: '3rem' }}>
      <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', letterSpacing: '0.2em', fontSize: '0.75rem' }} className="uppercase mb-3">
        What I Work With
      </p>
      <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '2.5rem', fontWeight: 300 }}>
        Tech Stack
      </h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skillGroups.map((group) => (
        <div
          key={group.category}
          style={{
            backgroundColor: 'var(--color-bg-elevated)',
            border: '1px solid var(--color-border)',
            padding: '2rem',
          }}
        >
          <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', marginBottom: '1.25rem' }} className="uppercase">
            {group.category}
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {group.skills.map((skill) => (
              <li
                key={skill}
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }} />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div style={{ marginTop: '2.5rem', textAlign: 'right' }}>
      <a
        href="/skills"
        style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.15em', borderBottom: '1px solid var(--color-gold)', paddingBottom: '2px' }}
        className="uppercase"
      >
        View All Skills →
      </a>
    </div>

  </Container>
</section>
{/* PROJECTS PREVIEW */}
<section style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '6rem 0' }}>
  <Container>

    <div style={{ marginBottom: '3rem' }}>
      <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', letterSpacing: '0.2em', fontSize: '0.75rem' }} className="uppercase mb-3">
        What I've Built
      </p>
      <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '2.5rem', fontWeight: 300 }}>
        Featured Projects
      </h2>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--color-border)' }}>
      {projects.map(project => (
        <div
          key={project.number}
          style={{
            backgroundColor: 'var(--color-bg-secondary)',
            padding: '2.5rem 0',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '2rem',
            borderBottom: '1px solid var(--color-border)',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-bg-elevated)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)')}
        >
          <span style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.75rem', minWidth: '2rem', paddingTop: '4px' }}>
            {project.number}
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '1.5rem', fontWeight: 400 }}>
                {project.name}
              </h3>
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
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.stack.map((tech: string) => (
                <span key={tech} style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  padding: '3px 10px',
                  backgroundColor: 'var(--color-bg-primary)',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-body)',
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <span style={{ color: 'var(--color-gold)', fontSize: '1.2rem', paddingTop: '4px' }}>→</span>
        </div>
      ))}
    </div>

    <div style={{ marginTop: '2.5rem', textAlign: 'right' }}>
      <a
        href="/projects"
        style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.15em', borderBottom: '1px solid var(--color-gold)', paddingBottom: '2px' }}
        className="uppercase"
      >
        View All Projects →
      </a>
    </div>

  </Container>
</section>

{/* CTA */}
<section
  style={{
    backgroundColor: 'var(--color-bg-primary)',
    padding: '8rem 0',
    borderTop: '1px solid var(--color-border)',
  }}
>
  <Container>
    <div style={{ maxWidth: '600px' }}>
      <p
        style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1.5rem' }}
        className="uppercase"
      >
        Let's Work Together
      </p>
      <h2
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '3rem', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem' }}
      >
        Have a project in mind?
        <br />
        <span style={{ color: 'var(--color-gold)' }}>Let's build it.</span>
      </h2>
      <p
        style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '480px' }}
      >
        I'm currently open to freelance projects, full-time roles, and interesting collaborations. If you have something worth building, reach out.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        
          <a href="/contact"
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
          GET IN TOUCH
        </a>
        
          <a href="/resume"
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
          VIEW RESUME
        </a>
      </div>
    </div>
  </Container>
</section>

    </main>
  )
}