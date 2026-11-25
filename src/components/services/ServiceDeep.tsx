import type { DeepService } from "@/data/serviceDeep";
import { Reveal } from "@/components/ui/Reveal";
import { toolIcons } from "@/data/toolIcons";

const icons = [
  "M3 5h18v11H3zM8 20h8M12 16v4",
  "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  "M3 4h3l2 11h10l2-8H7M10 20h.01M17 20h.01",
  "M4 20l4-1 11-11-3-3L5 16zM14 6l3 3",
  "M9 3v5M15 3v5M6 8h12v3a6 6 0 01-12 0zM12 17v4",
  "M4 17a8 8 0 1116 0M12 17l4-5",
];

export function BuildRows({ title, rows }: { title: string; rows: DeepService["build"] }) {
  return (
    <section className="sec tint" data-tone="light">
      <div className="wrap">
        <span className="eyebrow">What we build</span>
        <h2 className="h2">{title}</h2>
        <div className="rows">
          {rows.map((r, i) => (
            <Reveal as="article" className="rw" index={i % 3} key={r.title}>
              <span className="ri" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icons[i % icons.length]} />
                </svg>
              </span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              {r.items.length > 0 && <ul>{r.items.map((it) => <li key={it}>{it}</li>)}</ul>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Approach({ title, items }: { title: string; items: DeepService["approach"] }) {
  return (
    <section className="sec pure" data-tone="light">
      <div className="wrap">
        <span className="eyebrow">Why Softilect</span>
        <h2 className="h2">{title}</h2>
        <div className="apg">
          {items.map((a, i) => (
            <Reveal className="ap" index={i % 2} key={a.title}>
              <span className="ai">{String(i + 1).padStart(2, "0")}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolMark({ name }: { name: string }) {
  const ic = toolIcons[name];
  return (
    <i aria-hidden="true">
      {ic ? (
        ic.stroke ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={ic.d} /></svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor"><path d={ic.d} /></svg>
        )
      ) : (
        <b>{name.charAt(0)}</b>
      )}
    </i>
  );
}

export function ToolStack({ stack, name }: { stack: DeepService["stack"]; name: string }) {
  return (
    <section className="sec pure" data-tone="light">
      <div className="wrap">
        <span className="eyebrow">Tools we use</span>
        <h2 className="h2">The stack behind your {name.toLowerCase()} project.</h2>
        <div className="tools">
          {stack.map((g, gi) => (
            <Reveal className="tg" index={gi} key={g.label}>
              <h3>{g.label}</h3>
              <ul>
                {g.items.map((t) => (
                  <li key={t}>
                    <ToolMark name={t} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="note">We pick tools to suit your product. If you already use a different stack, we will work with it.</p>
      </div>
    </section>
  );
}
