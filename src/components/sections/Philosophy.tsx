import Container from "../layout/Container"

export default function Philosophy() {
  return (
    <section
      style={{
        padding: "100px 0",
        borderTop: "1px solid #eee",
        backgroundColor: "#94856a"
      }}
    >
      <Container>
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "40px",
            fontWeight: 600
          }}
        >
          philosophy
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#f5e7d0",
            maxWidth: "700px"
          }}
        >
          i believe security systems should be understandable, auditable at a glance, and resilient. good infrastructure is quiet. reliable. you should forget it's there.
        </p>
      </Container>
    </section>
  )
}