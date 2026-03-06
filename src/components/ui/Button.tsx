type Props = {
  children: React.ReactNode
  href: string
  variant?: "primary" | "secondary"
}

export default function Button({ children, href, variant = "primary" }: Props) {
  const primary = {
    background: "#111",
    color: "#fff",
    border: "1px solid #111"
  }

  const secondary = {
    background: "transparent",
    color: "#111",
    border: "1px solid #ccc"
  }

  const style = variant === "primary" ? primary : secondary

  return (
    <a
      href={href}
      style={{
        ...style,
        padding: "12px 22px",
        textDecoration: "none",
        fontSize: "15px",
        borderRadius: "4px",
        fontWeight: 500
      }}
    >
      {children}
    </a>
  )
}