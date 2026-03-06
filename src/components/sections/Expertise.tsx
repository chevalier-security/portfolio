import Container from "../layout/Container"

type ExpertiseColumn = {
  title: string
  items: string[]
}

export default function Expertise() {
  const columns: ExpertiseColumn[] = [
    {
      title: "security engineering",
      items: [
        "penetration testing",
        "system hardening",
        "cryptographic workflows",
        "privacy infrastructure"
      ]
    },
    {
      title: "infrastructure",
      items: [
        "network architecture",
        "secure deployments",
        "linux environments",
        "self hosted systems"
      ]
    },
    {
      title: "software development",
      items: [
        "typescript",
        "react",
        "system tooling",
        "automation"
      ]
    }
  ]

  return (
    <section
      style={{
        padding: "100px 0",
        backgroundColor: "#f5e7d0"
      }}
    >
      <Container>

        <h2
          style={{
            fontSize: "28px",
            marginBottom: "60px",
            fontWeight: 600
          }}
        >
          expertise
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px"
          }}
        >
          {columns.map((column) => (
            <div key={column.title}>
              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "16px",
                  fontWeight: 600
                }}
              >
                {column.title}
              </h3>

              <ul
                style={{
                  padding: 0,
                  margin: 0,
                  listStyle: "none",
                  lineHeight: 1.8,
                  color: "#555"
                }}
              >
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}