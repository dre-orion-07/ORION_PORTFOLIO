import Container from './container'

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/damilare-emmanuel-ogunyeye-50878a230?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@dare_orion0?_r=1&_t=ZS-97ZW6NW0BLo' },
]

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg-secondary)',
      }}
    >
      <Container className="flex flex-col md:flex-row items-center justify-between py-8 gap-4">

        {/* Left */}
        <p
          style={{
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-body)',
          }}
          className="text-sm tracking-wider"
        >
          © {new Date().getFullYear()} Dre. All rights reserved.
        </p>

        {/* Right */}
        <ul className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-text-muted)' }}
                className="text-sm tracking-wider uppercase hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

      </Container>
    </footer>
  )
}