import Container from "../components/layout/Container"
import Button from "../components/ui/Button"

export default function Projects() {
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
              projects
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
              a selection of work showcasing security engineering, infrastructure, and tooling.
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
              project name
            </h2>
            <p
              style={{
                color: "#555",
                marginBottom: "24px",
                lineHeight: 1.6
              }}
            >
              brief description of the project, what tools were used, and what value it delivered.
            </p>
            <Button href="/" variant="secondary">
              view details
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
              another project
            </h2>
            <p
              style={{
                color: "#555",
                marginBottom: "24px",
                lineHeight: 1.6
              }}
            >
              short description about what problem this project solves and how it was built.
            </p>
            <Button href="/" variant="secondary">
              view details
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