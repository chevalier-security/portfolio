import Container from "../layout/Container"
import Button from "../ui/Button"

export default function Hero() {
  return (
    <section
      style={{
        padding: "140px 0 120px 0",
        backgroundColor: "#f5e7d0"
      }}
    >
      <Container>
        <div style={{ maxWidth: "720px" }}>
          
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 600,
              marginBottom: "28px",
              letterSpacing: "-1px"
            }}
          >
            sage taylor
          </h1>

          <div
            style={{
              fontSize: "22px",
              lineHeight: 1.6,
              marginBottom: "28px",
              fontWeight: 500
            }}
          >
            security engineering<br />
            infrastructure systems<br />
            software development
          </div>

          <p
            style={{
              fontSize: "18px",
              color: "#555",
              lineHeight: 1.7,
              marginBottom: "40px"
            }}
          >
            i design secure systems, network infrastructure,
            and modern access control platforms. i just do all of it. which means fewer gaps, and less coordination on your end.
          </p>

          <div style={{ display: "flex", gap: "16px" }}>
            <Button href="/projects">view work</Button>
            <Button href="/contact" variant="secondary">
              contact
            </Button>
          </div>

        </div>
      </Container>
    </section>
  )
}