
function Card({ children, className = "" }) {
  return (
    <article className={`reusable-card ${className}`}>
      {children}
    </article>
  );
}

export default Card;
