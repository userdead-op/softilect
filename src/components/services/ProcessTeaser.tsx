import { PrimaryButton } from "@/components/ui/Buttons";
import { buildStages } from "@/data/process";
import { NetworkCanvas } from "@/components/ui/NetworkCanvas";

/** Dark mid-page band that points to the full process page. Matches the home "How we build" section. */
export function ProcessTeaser({ title = "Nine phases. No black boxes.", text = "Every project follows the same delivery cycle, so you always know what is happening, what you will receive and what comes next." }: { title?: string; text?: string }) {
  return (
    <section className="sec flowdk pt" data-tone="dark">
      <div className="glow" aria-hidden="true" />
      <NetworkCanvas />
      <div className="wrap">
        <div className="ptw">
          <div>
            <span className="eyebrow">Delivery cycle</span>
            <h2 className="h2">{title}</h2>
            <p className="tlp">{text}</p>
            <div className="ptb"><PrimaryButton href="/process">See the full process</PrimaryButton></div>
          </div>
          <ol className="ptl">
            {buildStages.map((s) => (
              <li key={s.id}>
                <span>{s.id}</span>
                <b>{s.title}</b>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
