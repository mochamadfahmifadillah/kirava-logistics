export default function Button({ children, variant = "primary" }) {
  const base = "px-6 py-3 rounded-lg";

  const styles = {
    primary: "bg-blue-600 text-white",
    outline: "border border-gray-500 text-white",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}