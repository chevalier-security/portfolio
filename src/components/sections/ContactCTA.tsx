import Container from "../layout/Container"
import Button from "../ui/Button"

export default function ContactCTA() {
  return (
    <section
      style={{
        padding: "120px 0",
        borderTop: "1px solid #eee",
        textAlign: "center",
        backgroundColor: "#f5e7d0"
      }}
    >
      <Container>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: 600,
            marginBottom: "24px"
          }}
        >
          interested in working together?
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "#555",
            lineHeight: 1.7,
            marginBottom: "40px"
          }}
        >
          i'm available for security engineering, infrastructure development, and system design.
        </p>

        <Button href="/contact">contact</Button>
      </Container>
    </section>
  )
}