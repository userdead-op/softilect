/** Wipe layers for accent buttons: top→bottom, bottom→top, then blend to final. */
export function GreenShadeLayers() {
  return (
    <>
      <span aria-hidden className="btn-shade btn-shade-down" />
      <span aria-hidden className="btn-shade btn-shade-up" />
      <span aria-hidden className="btn-shade btn-shade-blend" />
    </>
  );
}
