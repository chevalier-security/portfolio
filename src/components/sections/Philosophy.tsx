import Container from "../layout/Container"

export default function Philosophy() {
  return (
    <section
      style={{
        padding: "100px 0",
        borderTop: "1px solid var(--border-subtle)",
        backgroundColor: "var(--bg-alt)"
      }}
    >
      <Container>
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "40px",
            fontWeight: 600,
            color: "var(--accent-soft)"
          }}
        >
          philosophy
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.8,
            color: "var(--text)",
            maxWidth: "700px"
          }}
        >
          i believe security systems should be understandable, auditable at a glance, and resilient. good infrastructure is quiet. reliable. you should forget it's there.
        </p>
      </Container>
    </section>
  )
}