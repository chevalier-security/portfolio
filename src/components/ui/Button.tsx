type Props = {
  children: React.ReactNode
  href: string
  variant?: "primary" | "secondary"
}

export default function Button({ children, href, variant = "primary" }: Props) {
  const primary = {
    background: "var(--accent)",
    color: "#180b13",
    border: "1px solid var(--accent)"
  }

  const secondary = {
    background: "rgba(255, 255, 255, 0.65)",
    color: "var(--ink)",
    border: "1px solid var(--accent)"
  }

  const style = variant === "primary" ? primary : secondary

  const isExternal = href.startsWith("http") || href.startsWith("mailto:")

  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      style={{
        ...style,
        padding: "12px 22px",
        textDecoration: "none",
        fontSize: "15px",
        borderRadius: "4px",
        fontWeight: 600,
        transition: "transform var(--transition), box-shadow var(--transition), background-color var(--transition), color var(--transition)",
        boxShadow: variant === "primary" ? "0 8px 20px rgba(255, 95, 162, 0.35)" : "none"
      }}
    >
      {children}
    </a>
  )
}