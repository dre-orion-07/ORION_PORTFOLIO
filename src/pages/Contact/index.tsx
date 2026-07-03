import { useState } from 'react'
import Container from '../../components/layout/container'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/xeebpvlb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
      } else {
        setError('Something went wrong. Please try again or email me directly.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyle = {
    width: '100%',
    backgroundColor: 'var(--color-bg-elevated)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    padding: '0.875rem 1.25rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  return (
    <main style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: 'var(--color-bg-primary)' }}>

      {/* Header */}
      <section style={{ padding: '5rem 0 3rem', borderBottom: '1px solid var(--color-border)' }}>
        <Container>
          <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1rem' }} className="uppercase">
            Get In Touch
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '3.5rem', fontWeight: 300 }}>
            Contact
          </h1>
        </Container>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'start' }}>

            {/* Left */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', fontSize: '2rem', fontWeight: 300, lineHeight: 1.4, marginBottom: '1.5rem' }}>
                Let's build something worth building.
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.9, marginBottom: '2.5rem' }}>
                Whether you have a project in mind, a role to fill, or just want to connect — my inbox is open. I respond within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { label: 'Email', value: 'ogunyeyee@gmail.com' },
                  { label: 'LinkedIn', value: 'linkedin.com/in/damilare-emmanuel-ogunyeye-50878a230?' },
                  { label: 'GitHub', value: 'github.com/dre-orion-07' },
                  { label: 'TikTok', value: '@dare_orion0' },
                ].map((contact) => (
                  <div key={contact.label} style={{ borderLeft: '1px solid var(--color-border-gold)', paddingLeft: '1.25rem' }}>
                    <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', marginBottom: '0.25rem' }} className="uppercase">
                      {contact.label}
                    </p>
                    <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
                      {contact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div>
              {sent ? (
                <div style={{ padding: '3rem', border: '1px solid var(--color-border-gold)', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-display)', color: 'var(--color-gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                    Message received.
                  </p>
                  <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
                    I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', display: 'block', marginBottom: '0.5rem' }} className="uppercase">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-gold)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                    />
                  </div>

                  <div>
                    <label style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', display: 'block', marginBottom: '0.5rem' }} className="uppercase">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-gold)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                    />
                  </div>

                  <div>
                    <label style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', display: 'block', marginBottom: '0.5rem' }} className="uppercase">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-gold)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                    />
                  </div>

                  {error && (
                    <p style={{ color: '#ff4444', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: 'var(--color-gold)',
                      color: '#0A0A0A',
                      fontFamily: 'var(--font-body)',
                      letterSpacing: '0.15em',
                      fontSize: '0.75rem',
                      padding: '0.875rem 2.5rem',
                      border: 'none',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      fontWeight: 500,
                      alignSelf: 'flex-start',
                      transition: 'opacity 0.2s ease',
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                    onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.opacity = '0.85' }}
                    onMouseLeave={e => { if (!isSubmitting) e.currentTarget.style.opacity = '1' }}
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </Container>
      </section>

    </main>
  )
}