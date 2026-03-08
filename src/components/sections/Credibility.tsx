import Container from "../layout/Container"

export default function Credibility() {
  const items = [
    "7+ years security systems experience",
    "penetration testing & security research",
    "access control engineering",
    "network infrastructure",
    "privacy focused systems"
  ]

  return (
    <section
      style={{
        padding: "60px 0",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        backgroundColor: "var(--bg-alt)"
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "28px",
            justifyContent: "space-between"
          }}
        >
          {items.map((item) => (
            <div
              key={item}
              style={{
                fontSize: "14px",
                color: "var(--accent-soft)",
                letterSpacing: "0.4px"
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}