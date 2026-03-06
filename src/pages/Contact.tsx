import Container from "../components/layout/Container"
import Button from "../components/ui/Button"

export default function Contact() {
  return (
    <>
     
      <section style={{ padding: "100px 0", backgroundColor: "#f5e7d0" }}>
        <Container>
          <header style={{ textAlign: "center", marginBottom: "60px" }}>
            <h1
              style={{
                fontSize: "38px",
                fontWeight: 600,
                marginBottom: "14px"
              }}
            >
              contact
            </h1>

            <p
              style={{
                maxWidth: "740px",
                margin: "0 auto",
                fontSize: "17px",
                color: "#555",
                lineHeight: 1.7
              }}
            >
              i’m always happy to chat about security engineering, infrastructure, and building reliable systems. pick a channel below and let’s connect.
            </p>
          </header>
        </Container>
      </section>

      <section style={{ padding: "80px 0", backgroundColor: "#94856a" }}>
        <Container>
          <div
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              padding: "40px",
              borderRadius: "12px",
              background: "#f5e7d0"
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                marginBottom: "16px",
                fontWeight: 600
              }}
            >
              github
            </h2>

            <p style={{ color: "#555", marginBottom: "24px", lineHeight: 1.6 }}>
              see code samples, tooling, and side projects.
            </p>

            <Button href="https://github.com/your-username" variant="secondary">
              https://github.com/chevalier-security
            </Button>
          </div>
        </Container>
      </section>

      <section style={{ padding: "80px 0", backgroundColor: "#f5e7d0" }}>
        <Container>
          <div
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              padding: "40px",
              borderRadius: "12px",
              background: "#e0d2b8"
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                marginBottom: "16px",
                fontWeight: 600
              }}
            >
              linkedin
            </h2>

            <p style={{ color: "#555", marginBottom: "24px", lineHeight: 1.6 }}>
              professional profile, experience, and recommendations.
            </p>

            <Button href="https://linkedin.com/in/your-username" variant="secondary">
              linkedin.com/in/sage-taylor-270546347/
            </Button>
          </div>
        </Container>
      </section>

      <section style={{ padding: "80px 0", backgroundColor: "#94856a" }}>
        <Container>
          <div
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              padding: "40px",
              borderRadius: "12px",
              background: "#f5e7d0"
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                marginBottom: "16px",
                fontWeight: 600
              }}
            >
              business site
            </h2>

            <p style={{ color: "#555", marginBottom: "24px", lineHeight: 1.6 }}>
              consulting site
            </p>

            <Button href="https://your-business-site.com" variant="secondary">
              https://chevaliersecurity.org/
            </Button>
          </div>
        </Container>
      </section>

      <section style={{ padding: "80px 0", backgroundColor: "#f5e7d0" }}>
        <Container>
          <div
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              padding: "40px",
              borderRadius: "12px",
              background: "#e0d2b8"
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                marginBottom: "16px",
                fontWeight: 600
              }}
            >
              email
            </h2>

            <p style={{ color: "#555", marginBottom: "24px", lineHeight: 1.6 }}>
              send a message with questions, collaboration, or availability.
            </p>

            <Button href="mailto:hello@yourdomain.com" variant="secondary">
              info.chevalier@proton.me
            </Button>
          </div>
        </Container>
      </section>

       <section style={{ padding: "20px 0", backgroundColor: "#94856a" }}>
        <Container>
          <Button href="/" variant="secondary">
            back to home
          </Button>
        </Container>
      </section>

    </>
  )
}
