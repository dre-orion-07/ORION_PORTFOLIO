import Container from '../../components/layout/container'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'Intermediate' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Intermediate' },
      { name: 'Framer Motion', level: 'Beginner' },
      { name: 'HTML & CSS', level: 'Confident' },
      { name: 'Vite', level: 'Intermediate' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Beginner' },
      { name: 'Express', level: 'Beginner' },
      { name: 'REST APIs', level: 'Intermediate' },
      { name: 'PostgreSQL', level: 'Beginner' },
    ],
  },
  {
    category: 'AI & Data',
    skills: [
      { name: 'OpenAI API', level: 'Beginner' },
      { name: 'RAG Architecture', level: 'Beginner' },
      { name: 'Prompt Engineering', level: 'Intermediate' },
      { name: 'Vector Databases', level: 'Beginner' },
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'Git & GitHub', level: 'Intermediate' },
      { name: 'VS Code', level: 'Confident' },
      { name: 'Figma', level: 'Intermediate' },
      { name: 'pnpm', level: 'Intermediate' },
    ],
  },
]

const levelColor: Record<string, string> = {
  Beginner: 'var(--color-text-muted)',
  Intermediate: 'var(--color-text-secondary)',
  Confident: 'var(--color-gold)',
}

export default function Skills() {
  return (
    <main style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)' }}>

      {/* Header */}
      <section style={{ padding: '5rem 0 3rem', borderBottom: '1px solid var(--color-border)' }}>
        <Container>
          <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1rem' }} className="uppercase">
            What I Know
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '3.5rem', fontWeight: 300, marginBottom: '1rem' }}>
            Skills
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', maxWidth: '480px', lineHeight: 1.8 }}>
            I'm honest about where I am. Every skill listed here is something I have used in a real project — not just read about.
          </p>
        </Container>
      </section>

      {/* Skills Grid */}
      <section style={{ padding: '5rem 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', backgroundColor: 'var(--color-border)' }}>
            {skillCategories.map((group) => (
              <div
                key={group.category}
                style={{ backgroundColor: 'var(--color-bg-primary)', padding: '3rem' }}
              >
                <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', marginBottom: '2rem' }} className="uppercase">
                  {group.category}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {group.skills.map((skill) => (
                    <div key={skill.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <p style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
                        {skill.name}
                      </p>
                      <span style={{ color: levelColor[skill.level], fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.15em' }} className="uppercase">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Learning note */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}>
        <Container>
          <div style={{ maxWidth: '600px' }}>
            <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', marginBottom: '1rem' }} className="uppercase">
              Always Learning
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9 }}>
              I am currently deepening my knowledge of backend architecture, database design, and AI engineering. The stack I work with is not fixed — it grows with every project I ship.
            </p>
          </div>
        </Container>
      </section>

    </main>
  )
}