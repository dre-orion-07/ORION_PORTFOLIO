import type { MouseEvent } from 'react'
import Container from '../../components/layout/container'

export default function BakeFlow() {
  return (
    <main style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)' }}>

      {/* Hero */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}>
        <Container>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1rem' }} className="uppercase">
                Case Study — 01
              </p>
              <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '3.5rem', fontWeight: 300, marginBottom: '1rem' }}>
                BakeFlow ERP
              </h1>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '560px' }}>
                A production and business management system built to give a real commercial bakery full visibility into its operations, costs, and profitability.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '200px' }}>
              {[
                { label: 'Status', value: 'Live' },
                { label: 'Type', value: 'ERP System' },
                { label: 'Stack', value: 'React, TypeScript, Vite' },
                { label: 'Storage', value: 'localStorage' },
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
                href="https://dre-orion-07.github.io/Production-and-Business-Managment-system/"
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
                Running a bakery without visibility is running blind.
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1rem' }}>
                As the founder of 4A's Bread, a commercial bakery in Ikorodu, Lagos, I had a real operational problem. Money was coming in and going out, raw materials were being used, production was happening daily — but I had no clear picture of what any of it actually meant financially.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                I could not easily answer basic questions: How much did this batch actually cost to produce? What is my real profit margin after materials and expenses? Where exactly is money going? I needed a system that tracked everything — income, spending, material usage, cost of production, and profit — in one place, without having to think hard to reconstruct what happened.
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
                Everything the business needs in one system.
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {[
                  { title: 'Stock Keeping', description: 'Track raw material inventory — what came in, what was used, and what remains after every production run.' },
                  { title: 'Spending Tracker', description: 'Log every expense with category and date. See exactly where money is going without reconstructing it from memory.' },
                  { title: 'Cost of Production', description: 'Calculate the true cost of producing each batch — materials, overhead, and labor — automatically.' },
                  { title: 'Profit Margin Analysis', description: 'See real profit margins per product and per period. Know whether the business is actually profitable.' },
                  { title: 'Debt Analysis', description: 'Track outstanding debts — money owed to suppliers or by customers — so nothing slips through.' },
                  { title: 'Income Recording', description: 'Log sales and income with detail. Compare revenue against expenditure across any time period.' },
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
                Built lean and deployed fast.
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '2rem' }}>
                The stack was chosen deliberately for speed of development and zero infrastructure cost. This is a tool I use in my own business, so it needed to be live and usable quickly.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {[
                  { tech: 'React', reason: 'Component-based UI' },
                  { tech: 'TypeScript', reason: 'Type safety across all data models' },
                  { tech: 'Vite', reason: 'Fast builds and dev server' },
                  { tech: 'localStorage', reason: 'Zero backend, instant persistence' },
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
                AI-assisted engineering with deliberate problem solving.
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1rem' }}>
                I built BakeFlow using a disciplined AI-assisted workflow. Rather than copying solutions, I used AI as a thinking partner — prompting it to help me structure data models, reason through UI logic, and debug systematically. Every bug fix followed the same loop: identify the problem, form a hypothesis, prompt with context, verify the fix, and understand why it worked.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                This approach meant I understood every line of code I shipped. The system is not a tutorial project — it is a live tool running in a real business, and the engineering decisions behind it reflect that.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Lessons */}
      <section style={{ padding: '5rem 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
            <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em' }} className="uppercase">
              What's Next
            </p>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '2rem', fontWeight: 300, lineHeight: 1.4, marginBottom: '1.5rem' }}>
                Moving from localStorage to a real backend.
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1rem' }}>
                The current version uses localStorage for persistence — which works well for a single-user tool but has clear limitations. The next version of BakeFlow will be backed by a Node.js API and PostgreSQL database, enabling multi-user access, data backup, and the ability to scale to multiple bakery branches.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9 }}>
                The business logic is already solid. The next phase is infrastructure.
              </p>
            </div>
          </div>
        </Container>
      </section>

    </main>
  )
}