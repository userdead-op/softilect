export function Ribbon({ items, outline }: { items: string[]; outline?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="mrow">
      <div className={`mtrack${outline ? " rev out" : ""}`}>
        {doubled.map((t, i) => (
          <span className="mi" key={`${t}-${i}`} aria-hidden={i >= items.length}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
