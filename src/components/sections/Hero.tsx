import Container from "../layout/Container"
import Button from "../ui/Button"

export default function Hero() {
  return (
    <section
      style={{
        padding: "140px 0 120px 0",
        backgroundColor: "var(--bg)"
      }}
    >
      <Container>
        <div style={{ maxWidth: "720px" }}>
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              fontWeight: 600,
              marginBottom: "28px",
              letterSpacing: "0.2px",
              lineHeight: 1,
              fontFamily: '"Cormorant Garamond", serif',
              color: "var(--accent-soft)",
              textTransform: "capitalize"
            }}
          >
            sage taylor
          </h1>

          <div
            style={{
              fontSize: "22px",
              lineHeight: 1.6,
              marginBottom: "28px",
              fontWeight: 500,
              color: "var(--accent)"
            }}
          >
            security engineering<br />
            corporate intelligence<br />
            software development
          </div>

          <p
            style={{
              fontSize: "18px",
              color: "var(--muted)",
              lineHeight: 1.7,
              marginBottom: "40px"
            }}
          >
            i design secure systems, network infrastructure,
            and modern access control platforms. i just do all of it. which means fewer gaps, and less coordination on your end.
          </p>

          <div style={{ display: "flex", gap: "16px" }}>
            <Button href="#/projects">view work</Button>
            <Button href="#/contact" variant="secondary">
              contact
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}