import Container from "../layout/Container"
import { projects } from "../../data/projects"

export default function ProjectsPreview() {
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
            marginBottom: "60px",
            fontWeight: 600,
            color: "var(--accent-soft)"
          }}
        >
          selected work
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {projects.map((project) => (
            <div key={project.title}>

              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "10px",
                  fontWeight: 600,
                  color: "var(--accent-soft)"
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "var(--text)",
                  marginBottom: "12px",
                  lineHeight: 1.6
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  fontSize: "14px",
                  color: "var(--text)"
                }}
              >
                {project.stack.join(" • ")}
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}