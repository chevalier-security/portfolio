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
        borderTop: "1px solid #eee",
        borderBottom: "1px solid #eee",
        backgroundColor: "#94856a"
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
                color: "#f5e7d0",
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