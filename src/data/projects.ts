export type Project = {
  title: string
  description: string
  stack: string[]
}

export const projects: Project[] = [
  {
    title: "access control management platform",
    description:
      "secure multi-door system with role based access and audit logging",
    stack: ["typescript", "react", "infrastructure", "hardware integration"]
  },
  {
    title: "security research environment",
    description:
      "offensive security tooling workflow built on blackarch",
    stack: ["linux", "security tooling", "penetration testing"]
  },
  {
    title: "pgp privacy infrastructure",
    description:
      "secure communications workflow using pgp and hardened environments",
    stack: ["cryptography", "tailsos", "secure systems"]
  }
]