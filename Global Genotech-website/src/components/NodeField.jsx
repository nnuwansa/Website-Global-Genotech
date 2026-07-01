const DOTS = [
  { top: "18%", left: "8%", size: 6, delay: "0s" },
  { top: "62%", left: "4%", size: 4, delay: "1.2s" },
  { top: "30%", left: "92%", size: 5, delay: "0.6s" },
  { top: "78%", left: "88%", size: 7, delay: "2s" },
  { top: "8%", left: "48%", size: 4, delay: "1.6s" },
  { top: "85%", left: "55%", size: 5, delay: "0.3s" },
  { top: "48%", left: "20%", size: 3, delay: "2.4s" },
  { top: "55%", left: "78%", size: 4, delay: "0.9s" },
];

export default function NodeField({ className = "" }) {
  return (
    <div className={`node-field ${className}`} aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full opacity-[0.35]" preserveAspectRatio="none">
        <line x1="8%" y1="18%" x2="48%" y2="8%" stroke="#3B82F6" strokeWidth="1" />
        <line x1="48%" y1="8%" x2="92%" y2="30%" stroke="#3B82F6" strokeWidth="1" />
        <line x1="4%" y1="62%" x2="20%" y2="48%" stroke="#3B82F6" strokeWidth="1" />
        <line x1="20%" y1="48%" x2="55%" y2="85%" stroke="#3B82F6" strokeWidth="1" />
        <line x1="55%" y1="85%" x2="88%" y2="78%" stroke="#3B82F6" strokeWidth="1" />
        <line x1="78%" y1="55%" x2="92%" y2="30%" stroke="#3B82F6" strokeWidth="1" />
      </svg>
      {DOTS.map((dot, i) => (
        <span
          key={i}
          className="node-dot"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}
