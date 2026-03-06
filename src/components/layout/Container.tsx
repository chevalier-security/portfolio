type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px"
      }}
    >
      {children}
    </div>
  )
}