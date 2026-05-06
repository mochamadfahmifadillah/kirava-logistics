export default function Card({ children }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/10">
      {children}
    </div>
  );
}