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
            className="card"
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              padding: "40px",
              display: "flex",
              flexWrap: "wrap",
              gap: "32px"
            }}
          >
            <div style={{ flex: 1, minWidth: "260px" }}>
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
            </div>

            <div
              style={{
                minWidth: "240px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                justifyContent: "space-between",
                borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
                paddingLeft: "24px"
              }}
            >
              <div style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.4 }}>
                best for quick code references and issue history.
              </div>

              <Button href="https://github.com/chevalier-security" variant="primary">
                https://github.com/chevalier-security
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section style={{ padding: "80px 0", backgroundColor: "#f5e7d0" }}>
        <Container>
          <div
            className="card"
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              padding: "40px",
              display: "flex",
              flexWrap: "wrap",
              gap: "32px"
            }}
          >
            <div style={{ flex: 1, minWidth: "260px" }}>
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
            </div>

            <div
              style={{
                minWidth: "240px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                justifyContent: "space-between",
                borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
                paddingLeft: "24px"
              }}
            >
              <div style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.4 }}>
                good for connection requests and professional context.
              </div>

              <Button href="https://linkedin.com/in/sage-taylor-270546347/" variant="primary">
                linkedin.com/in/sage-taylor-270546347/
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section style={{ padding: "80px 0", backgroundColor: "#94856a" }}>
        <Container>
          <div
            className="card"
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              padding: "40px",
              display: "flex",
              flexWrap: "wrap",
              gap: "32px"
            }}
          >
            <div style={{ flex: 1, minWidth: "260px" }}>
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
            </div>

            <div
              style={{
                minWidth: "240px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                justifyContent: "space-between",
                borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
                paddingLeft: "24px"
              }}
            >
              <div style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.4 }}>
                landing page for services + contact details.
              </div>

              <Button href="https://chevaliersecurity.org/" variant="primary">
                https://chevaliersecurity.org/
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section style={{ padding: "80px 0", backgroundColor: "#f5e7d0" }}>
        <Container>
          <div
            className="card"
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              padding: "40px",
              display: "flex",
              flexWrap: "wrap",
              gap: "32px"
            }}
          >
            <div style={{ flex: 1, minWidth: "260px" }}>
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
            </div>

            <div
              style={{
                minWidth: "240px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                justifyContent: "space-between",
                borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
                paddingLeft: "24px"
              }}
            >
              <div style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.4 }}>
                fastest response via encrypted email.
              </div>

              <Button href="mailto:info.chevalier@proton.me" variant="primary">
                info.chevalier@proton.me
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section style={{ padding: "20px 0", backgroundColor: "#94856a" }}>
        <Container>
          <Button href="#/" variant="secondary">
            back to home
          </Button>
        </Container>
      </section>

    </>
  )
}
