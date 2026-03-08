import Container from "../layout/Container"
import { techStack } from "../../data/techstack"

export default function TechStack() {
  return (
    <section
      style={{
        padding: "80px 0",
        borderTop: "1px solid var(--border-subtle)",
        backgroundColor: "var(--bg-soft-alt)",
        color: "var(--ink)"
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
          technical stack
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px"
          }}
        >
          {techStack.map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 16px",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                fontSize: "14px",
                color: "var(--ink-muted)",
                backgroundColor: "rgba(231, 102, 158, 0.08)"
              }}
            >
              {tech}
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}