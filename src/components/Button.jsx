export default function Button({ children, ...props }) {
  return (
    <button
      style={{
        background: "#2563EB",
        color: "#fff",
        padding: "10px 16px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
      }}
      {...props}
    >
      {children}
    </button>
  );
}