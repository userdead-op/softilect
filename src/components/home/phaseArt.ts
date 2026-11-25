/* One drawn scene per delivery phase. Static, trusted markup rendered with dangerouslySetInnerHTML.
   Elements with class "t" move from --t (rest) to --a (built) when the scene gets the "play" class. */
const MT = "#2ec4a0";
const EM = "#e4572e";
const sv = (inner: string) => `<svg viewBox="0 0 300 300" fill="none" aria-hidden="true">${inner}</svg>`;
const st = (o: Record<string, string | number>) => ` style="${Object.entries(o).map(([k, v]) => `--${k}:${v}`).join(";")}"`;

export const phaseArt: string[] = [
  // Discovery: a lens finds the core and the threads light up
  sv(
    [[70, 88], [224, 70], [242, 206], [86, 224]]
      .map(([x, y], k) => `<path class="t dr"${st({ len: 130, d: `${0.3 + k * 0.1}s` })} d="M${x} ${y}L150 150" stroke="${MT}" stroke-opacity=".6" stroke-width="1.6"/><circle cx="${x}" cy="${y}" r="7" fill="#0e1820" stroke="${MT}" stroke-width="2"/>`)
      .join("") +
      `<circle cx="150" cy="150" r="10" fill="${MT}"/><circle cx="246" cy="128" r="3.5" fill="${EM}"/><circle cx="58" cy="160" r="3" fill="#fff" fill-opacity=".5"/>` +
      `<g class="t"${st({ t: "translate(-58px,-62px)", a: "translate(0,0)" })}><circle cx="150" cy="150" r="44" stroke="#fff" stroke-opacity=".9" stroke-width="3"/><path d="M182 182l32 32" stroke="#fff" stroke-width="7" stroke-linecap="round"/></g>`,
  ),
  // Design: loose blocks snap into a clean layout, the cursor lands
  sv(
    `<rect x="46" y="56" width="208" height="186" rx="14" stroke="#fff" stroke-opacity=".2"/><circle cx="62" cy="70" r="3" fill="#fff" fill-opacity=".3"/><circle cx="74" cy="70" r="3" fill="#fff" fill-opacity=".3"/>` +
      ([[62, 86, 176, 20, "translate(30px,-34px) rotate(-9deg)"], [62, 116, 60, 112, "translate(-38px,14px) rotate(11deg)"], [132, 116, 106, 50, "translate(34px,24px) rotate(13deg)"], [132, 176, 106, 52, "translate(-8px,44px) rotate(-15deg)"]] as const)
        .map(([x, y, w, h, t], k) => `<rect class="t" x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="rgba(46,196,160,.14)" stroke="${MT}" stroke-width="1.5"${st({ t, d: `${k * 0.08}s` })}/>`)
        .join("") +
      `<path class="t" d="M206 196v34l9-9 8 17 7-3-8-17 13-1z" fill="${EM}"${st({ t: "translate(56px,58px)", d: ".45s" })}/>`,
  ),
  // Architecture: three layers lift apart to show the stack
  sv(
    ([[190, "translateY(36px)", "#13202a", "rgba(46,196,160,.45)"], [150, "none", "#16252f", "rgba(46,196,160,.65)"], [110, "translateY(-36px)", "rgba(46,196,160,.22)", MT]] as const)
      .map(([y, a, fill, stroke]) => `<g class="t"${st({ a })}><path d="M78 ${y}L150 ${y + 32}V${y + 44}L78 ${y + 12}z" fill="#0d171e" stroke="${stroke}"/><path d="M222 ${y}L150 ${y + 32}V${y + 44}L222 ${y + 12}z" fill="#0d171e" stroke="${stroke}"/><path d="M150 ${y - 32}L222 ${y}L150 ${y + 32}L78 ${y}z" fill="${fill}" stroke="${stroke}" stroke-width="1.6"/></g>`)
      .join("") +
      `<path class="t" d="M78 86V230M222 86V230" stroke="${MT}" stroke-dasharray="3 6" stroke-opacity=".55"${st({ o: 0, d: ".4s" })}/>`,
  ),
  // Engineering: brackets open and code types itself in
  sv(
    `<path class="t" d="M86 92L44 150l42 58" stroke="${MT}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"${st({ t: "translateX(30px)" })}/><path class="t" d="M214 92l42 58-42 58" stroke="${MT}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"${st({ t: "translateX(-30px)" })}/>` +
      ([[82, MT], [58, "rgba(255,255,255,.55)"], [92, "rgba(255,255,255,.3)"], [46, EM], [72, MT]] as const)
        .map(([w, c], k) => `<rect class="t ln" x="104" y="${112 + k * 20}" width="${w}" height="8" rx="4" fill="${c}"${st({ t: "scaleX(0)", d: `${0.25 + k * 0.12}s` })}/>`)
        .join(""),
  ),
  // Quality assurance: every row gets its check
  sv(
    [96, 150, 204]
      .map((y, k) => `<rect x="70" y="${y - 15}" width="30" height="30" rx="8" stroke="#fff" stroke-opacity=".4" stroke-width="1.5"/><rect x="118" y="${y - 5}" width="112" height="10" rx="5" fill="#fff" fill-opacity=".14"/><rect class="t ln" x="118" y="${y - 5}" width="112" height="10" rx="5" fill="${MT}" fill-opacity=".55"${st({ t: "scaleX(0)", d: `${0.2 + k * 0.25}s` })}/><path class="t dr" d="M78 ${y}l7 7 14-15" stroke="${MT}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"${st({ len: 40, d: `${0.35 + k * 0.25}s` })}/>`)
      .join(""),
  ),
  // Reviews and retros: two voices meet inside a turning loop
  sv(
    `<g class="ring"><path d="M150 36a114 114 0 1 1-80 33" stroke="${EM}" stroke-width="2" stroke-dasharray="4 9"/><path d="M62 58l8 14 15-4" stroke="${EM}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></g>` +
      `<g class="t"${st({ t: "translate(-36px,12px)", o: 0 })}><rect x="58" y="82" width="122" height="64" rx="16" fill="rgba(46,196,160,.16)" stroke="${MT}"/><path d="M84 146l-8 18 22-18" fill="#12303a" stroke="${MT}"/><rect x="76" y="102" width="72" height="7" rx="3.5" fill="${MT}"/><rect x="76" y="118" width="46" height="7" rx="3.5" fill="#fff" fill-opacity=".4"/></g>` +
      `<g class="t"${st({ t: "translate(36px,-12px)", o: 0, d: ".2s" })}><rect x="122" y="160" width="122" height="64" rx="16" fill="rgba(255,255,255,.06)" stroke="#fff" stroke-opacity=".5"/><path d="M218 224l8 18-22-18" fill="#1a242c" stroke="#fff" stroke-opacity=".5"/><rect x="140" y="180" width="80" height="7" rx="3.5" fill="#fff" fill-opacity=".6"/><rect x="140" y="196" width="50" height="7" rx="3.5" fill="${EM}"/></g>`,
  ),
  // Change management: dials slide to new, agreed positions
  sv(
    ([[96, "translateX(-72px)", "translateX(44px)", MT], [150, "translateX(64px)", "translateX(-34px)", EM], [204, "translateX(-24px)", "translateX(72px)", MT]] as const)
      .map(([y, t, a, c], k) => `<path d="M58 ${y}H242" stroke="#fff" stroke-opacity=".18" stroke-width="3" stroke-linecap="round"/><circle class="t" cx="150" cy="${y}" r="13" fill="#0e1820" stroke="${c}" stroke-width="3"${st({ t, a, d: `${k * 0.12}s` })}/>`)
      .join(""),
  ),
  // Deployment: the build climbs and ships
  sv(
    `<path d="M76 252h148" stroke="#fff" stroke-opacity=".25" stroke-width="2" stroke-linecap="round"/><path class="t dr" d="M150 236V96" stroke="${EM}" stroke-width="2"${st({ len: 140, d: ".2s" })}/>` +
      ([[214, 0.3], [174, 0.6], [134, 1]] as const)
        .map(([y, o], k) => `<path class="t" d="M108 ${y}l42-34 42 34" stroke="${MT}" stroke-opacity="${o}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"${st({ o: 0, t: "translateY(20px)", d: `${0.15 + k * 0.15}s` })}/>`)
        .join("") +
      `<path class="t" d="M150 36l18 24-18 24-18-24z" fill="${MT}"${st({ t: "translateY(150px)", o: ".2", d: ".55s" })}/>`,
  ),
  // Maintenance: the pulse keeps running, the gear keeps turning
  sv(
    `<rect x="48" y="70" width="204" height="134" rx="14" stroke="#fff" stroke-opacity=".28"/><path d="M118 236h64M150 204v32" stroke="#fff" stroke-opacity=".28" stroke-width="2" stroke-linecap="round"/>` +
      `<path class="t dr" d="M64 140h40l12-32 18 62 16-52 10 22h76" stroke="${MT}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"${st({ len: 320 })}/>` +
      `<g class="ring"><circle cx="220" cy="98" r="14" stroke="${EM}" stroke-width="6" stroke-dasharray="4 4"/></g><circle cx="220" cy="98" r="5" fill="${EM}"/>`,
  ),
];
