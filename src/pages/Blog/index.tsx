import Container from '../../components/layout/container'

const posts = [
  {
    number: '01',
    title: 'From Blueprints to Bytecode',
    summary: 'What four years in architecture taught me about building software. The parallels are deeper than you think.',
    date: 'June 2026',
    readTime: '4 min read',
    tag: 'Career',
  },
  {
    number: '02',
    title: 'How I Use AI to Learn Faster Without Losing the Learning',
    summary: 'AI is my thinking partner, not my answer machine. Here is how I use it deliberately to go deeper, not shallower.',
    date: 'June 2026',
    readTime: '5 min read',
    tag: 'AI',
  },
  {
    number: '03',
    title: 'Building BakeFlow ERP: Why I Built Software for My Own Bakery',
    summary: 'The problem was real, the data was mine, and the stakes were personal. That is exactly why I built it.',
    date: 'Coming Soon',
    readTime: '6 min read',
    tag: 'Projects',
  },
  {
    number: '04',
    title: 'What Junior Developers Get Wrong About Portfolio Projects',
    summary: 'Most portfolios show what you copied. A great portfolio shows what you solved. Here is the difference.',
    date: 'Coming Soon',
    readTime: '4 min read',
    tag: 'Development',
  },
]

const tagColor: Record<string, string> = {
  Career: 'var(--color-gold)',
  AI: '#7B9FD4',
  Projects: '#8FBF8F',
  Development: 'var(--color-text-secondary)',
}

export default function Blog() {
  return (
    <main style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)' }}>

      {/* Header */}
      <section style={{ padding: '5rem 0 3rem', borderBottom: '1px solid var(--color-border)' }}>
        <Container>
          <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1rem' }} className="uppercase">
            Thoughts & Writing
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '3.5rem', fontWeight: 300, marginBottom: '1rem' }}>
            Blog
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', maxWidth: '480px', lineHeight: 1.8 }}>
            Writing about building in public, career transitions, AI, and what I am learning as I ship real products.
          </p>
        </Container>
      </section>

      {/* Posts */}
      <section style={{ padding: '4rem 0' }}>
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {posts.map((post) => (
              <div
                key={post.number}
                style={{
                  borderBottom: '1px solid var(--color-border)',
                  padding: '2.5rem 0',
                  display: 'flex',
                  gap: '2rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-bg-elevated)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <span style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.75rem', minWidth: '2rem', paddingTop: '4px' }}>
                  {post.number}
                </span>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{ color: tagColor[post.tag], fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.15em' }} className="uppercase">
                      {post.tag}
                    </span>
                    <span style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}>
                      {post.date}
                    </span>
                    <span style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}>
                      {post.readTime}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {post.title}
                  </h2>
                  <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '600px' }}>
                    {post.summary}
                  </p>
                </div>

                <span style={{ color: 'var(--color-gold)', fontSize: '1.2rem', paddingTop: '4px' }}>→</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

    </main>
  )
}