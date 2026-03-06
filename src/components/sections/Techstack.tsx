import Container from "../layout/Container"
import { techStack } from "../../data/techstack"

export default function TechStack() {
  return (
    <section
      style={{
        padding: "80px 0",
        borderTop: "1px solid #eee",
        backgroundColor: "#f5e7d0"
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
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
                color: "#555"
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