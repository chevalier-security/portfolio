import Container from "../layout/Container"
import { projects } from "../../data/projects"

export default function ProjectsPreview() {
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
            marginBottom: "60px",
            fontWeight: 600
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
                  fontWeight: 600
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "#f5e7d0",
                  marginBottom: "12px",
                  lineHeight: 1.6
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  fontSize: "14px",
                  color: "#f5f2e8"
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