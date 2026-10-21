// Es Bildli (SVG, viewBox 0 0 100 100) für jedes Gwürz und jedes Tierli.
// Jede Iitrag isch nume dä Inhalt; bild() packt en is <svg>.

const DUNKEL = "#3a2414";

// Äugli mit emene chliine Glanzpünktli
function auge(x, y, r = 4) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${DUNKEL}" stroke="none"/>` +
    `<circle cx="${x + r * 0.35}" cy="${y - r * 0.35}" r="${r * 0.35}" fill="#fff" stroke="none"/>`;
}

function bäckli(x, y, rx = 5) {
  return `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${rx * 0.6}" fill="#f28b8b" stroke="none" opacity=".55"/>`;
}

function müli(x, y, b = 4) {
  return `<path d="M${x - b} ${y} q${b} ${b} ${b * 2} 0" fill="none" stroke-width="2.5"/>`;
}

// Ganzes Gsichtli: d = halbe Augeabstand
function gsicht(x, y, d = 8, r = 3.5) {
  return auge(x - d, y, r) + auge(x + d, y, r) +
    bäckli(x - d - 4, y + r + 3, r * 1.3) + bäckli(x + d + 4, y + r + 3, r * 1.3) +
    müli(x, y + r + 2, r * 0.9);
}

const BILDER = {
  // ---------- Gwürz ----------
  Zimt: `
    <g transform="rotate(-18 50 50)">
      <rect x="22" y="16" width="18" height="70" rx="6" fill="#9a5a30"/>
      <path d="M27 20 q4 -3 8 0 q-3 3 -5 1" fill="none" stroke-width="2"/>
    </g>
    <g transform="rotate(12 50 50)">
      <rect x="48" y="14" width="22" height="74" rx="7" fill="#b86e3c"/>
      <path d="M53 19 q6 -4 12 0 q-5 4 -8 1" fill="none" stroke-width="2"/>
      <path d="M52 34 h14 M52 72 h14" stroke="#8a4a22" stroke-width="2"/>
      ${gsicht(59, 52, 5, 2.8)}
    </g>`,

  Kardamom: `
    <ellipse cx="38" cy="56" rx="15" ry="24" transform="rotate(-25 38 56)" fill="#8fbf5f"/>
    <path d="M28 36 q8 20 20 40" fill="none" stroke="#5f8f3a" stroke-width="2"/>
    <ellipse cx="62" cy="50" rx="17" ry="27" transform="rotate(18 62 50)" fill="#a6d176"/>
    <path d="M66 22 l-2 -6" fill="none"/>
    ${gsicht(62, 52, 6, 3)}`,

  Honig: `
    <path d="M70 18 L52 52" stroke-width="4"/>
    <ellipse cx="72" cy="16" rx="6" ry="4" fill="#e8a33d" transform="rotate(-60 72 16)"/>
    <path d="M24 44 Q18 86 50 88 Q82 86 76 44 Z" fill="#f0b847"/>
    <rect x="20" y="36" width="60" height="12" rx="6" fill="#e8a33d"/>
    <path d="M30 48 q2 10 5 0 q3 14 7 0" fill="#e8a33d" stroke="none"/>
    ${gsicht(50, 64, 9, 3.5)}`,

  Zucker: `
    <path d="M18 46 L40 36 L62 46 L40 56 Z" fill="#ffffff"/>
    <path d="M18 46 L18 70 L40 80 L40 56 Z" fill="#ece4da"/>
    <path d="M40 56 L40 80 L62 70 L62 46 Z" fill="#f7f2ec"/>
    <path d="M52 30 L68 22 L84 30 L68 38 Z" fill="#ffffff"/>
    <path d="M52 30 L52 46 L68 54 L68 38 Z" fill="#ece4da"/>
    <path d="M68 38 L68 54 L84 46 L84 30 Z" fill="#f7f2ec"/>
    ${gsicht(51, 64, 5, 2.6)}`,

  Pfäffer: `
    <rect x="30" y="22" width="40" height="62" rx="16" fill="#8a5a3a"/>
    <path d="M30 44 h40" stroke="#5e3a22" stroke-width="2.5"/>
    <rect x="44" y="12" width="12" height="12" rx="3" fill="#5e3a22"/>
    <circle cx="50" cy="10" r="4" fill="#5e3a22"/>
    ${gsicht(50, 60, 8, 3.5)}
    <circle cx="18" cy="84" r="4" fill="${DUNKEL}"/>
    <circle cx="82" cy="80" r="4" fill="${DUNKEL}"/>
    <circle cx="86" cy="90" r="3" fill="${DUNKEL}"/>`,

  Ahornsirup: `
    <path d="M42 12 h16 v14 q16 8 16 26 v30 q0 8 -8 8 h-32 q-8 0 -8 -8 v-30 q0 -18 16 -26 Z" fill="#c9752e"/>
    <rect x="40" y="8" width="20" height="8" rx="3" fill="#7a4a2a"/>
    <path d="M50 46 l3 6 l6 -2 l-2 6 l5 3 l-7 3 l1 5 l-6 -3 l-6 3 l1 -5 l-7 -3 l5 -3 l-2 -6 l6 2 Z" fill="#e0483a" stroke-width="2"/>
    ${gsicht(50, 76, 7, 2.8)}`,

  Muskatnuss: `
    <ellipse cx="50" cy="54" rx="28" ry="32" fill="#a0673a"/>
    <path d="M30 40 q20 -8 40 0 M26 56 q24 -6 48 0 M30 72 q20 -6 40 0" fill="none" stroke="#c98e5c" stroke-width="2.5"/>
    <path d="M40 24 q-6 30 0 60 M60 24 q6 30 0 60" fill="none" stroke="#c98e5c" stroke-width="2.5"/>
    <ellipse cx="50" cy="56" rx="16" ry="11" fill="#a0673a" stroke="none"/>
    ${gsicht(50, 53, 8, 3.3)}`,

  Änis: `
    <rect x="22" y="30" width="56" height="44" rx="12" fill="#fff4e0"/>
    <path d="M22 62 v4 q0 8 12 8 h32 q12 0 12 -8 v-4" fill="#e9b97a"/>
    <path d="M50 38 v12 M44 44 h12" stroke="#d8b98c" stroke-width="2.5"/>
    ${gsicht(50, 56, 9, 3.3)}
    <ellipse cx="18" cy="20" rx="3" ry="6" transform="rotate(-30 18 20)" fill="#b89a5c" stroke-width="2"/>
    <ellipse cx="82" cy="84" rx="3" ry="6" transform="rotate(30 82 84)" fill="#b89a5c" stroke-width="2"/>
    <ellipse cx="86" cy="22" rx="3" ry="6" transform="rotate(20 86 22)" fill="#b89a5c" stroke-width="2"/>`,

  Kurkuma: `
    <path d="M14 58 q-2 -16 14 -16 q6 -14 20 -8 q14 -6 22 6 q16 0 16 16 q0 14 -16 14 q-8 10 -22 6 q-12 8 -22 -2 q-12 0 -12 -16 Z" fill="#c8894a"/>
    <path d="M30 50 q10 4 20 0 M56 62 q8 4 16 0" fill="none" stroke="#9a6430" stroke-width="2"/>
    <circle cx="68" cy="26" r="13" fill="#f6a21a"/>
    <circle cx="68" cy="26" r="7" fill="#ffc34d" stroke="none"/>
    ${gsicht(46, 60, 7, 3)}`,

  Negeli: `
    <g transform="rotate(-20 36 50)">
      <path d="M33 38 L36 86 L39 38" fill="#7a3f22"/>
      <circle cx="36" cy="28" r="7" fill="#9b5530"/>
      <path d="M26 36 q10 -4 20 0" fill="none"/>
    </g>
    <g transform="rotate(15 64 50)">
      <path d="M60 44 L64 92 L68 44" fill="#7a3f22"/>
      <path d="M50 42 q14 8 28 0 l-4 -6 q-10 4 -20 0 Z" fill="#8a4a28"/>
      <circle cx="64" cy="28" r="10" fill="#9b5530"/>
      ${gsicht(64, 28, 4, 2)}
    </g>`,

  Vanille: `
    <path d="M18 86 Q40 70 52 40 Q60 22 82 14" fill="none" stroke="${DUNKEL}" stroke-width="9"/>
    <path d="M18 86 Q40 70 52 40 Q60 22 82 14" fill="none" stroke="#5a3520" stroke-width="5"/>
    <g transform="translate(62 64)">
      <ellipse cx="0" cy="-14" rx="7" ry="12" fill="#fff3c4"/>
      <ellipse cx="0" cy="-14" rx="7" ry="12" fill="#fff3c4" transform="rotate(72)"/>
      <ellipse cx="0" cy="-14" rx="7" ry="12" fill="#fff3c4" transform="rotate(144)"/>
      <ellipse cx="0" cy="-14" rx="7" ry="12" fill="#fff3c4" transform="rotate(216)"/>
      <ellipse cx="0" cy="-14" rx="7" ry="12" fill="#fff3c4" transform="rotate(288)"/>
      <circle cx="0" cy="0" r="9" fill="#ffd95a"/>
      ${gsicht(0, -1, 3.5, 1.8)}
    </g>`,

  Ingwer: `
    <path d="M16 62 q-4 -14 10 -16 q-2 -14 12 -14 q8 0 8 10 q6 -6 14 -2 q2 -14 14 -12 q10 2 6 16 q14 4 8 16 q-4 10 -18 8 q-8 10 -24 6 q-12 4 -20 -2 q-10 -2 -10 -10 Z" fill="#e2c08a"/>
    <path d="M30 70 q10 3 18 0 M62 66 q6 2 12 -2 M40 42 q4 3 8 0" fill="none" stroke="#b8935a" stroke-width="2"/>
    ${gsicht(52, 54, 8, 3.2)}`,

  Stärnanis: `
    <path d="M50 10 L57 37 L78 22 L63 43 L90 50 L63 57 L78 78 L57 63 L50 90 L43 63 L22 78 L37 57 L10 50 L37 43 L22 22 L43 37 Z" fill="#9a4e2a"/>
    <ellipse cx="50" cy="22" rx="3" ry="5" fill="#d9a066" stroke="none"/>
    <ellipse cx="50" cy="78" rx="3" ry="5" fill="#d9a066" stroke="none"/>
    <ellipse cx="22" cy="50" rx="5" ry="3" fill="#d9a066" stroke="none"/>
    <ellipse cx="78" cy="50" rx="5" ry="3" fill="#d9a066" stroke="none"/>
    <circle cx="50" cy="50" r="13" fill="#b8643a"/>
    ${gsicht(50, 48, 5, 2.6)}`,

  Karamell: `
    <path d="M28 50 L10 34 L14 50 L10 66 Z" fill="#f2d28c"/>
    <path d="M72 50 L90 34 L86 50 L90 66 Z" fill="#f2d28c"/>
    <rect x="26" y="30" width="48" height="40" rx="10" fill="#d48a3a"/>
    <path d="M32 36 q6 -2 10 0" fill="none" stroke="#f2b46a" stroke-width="3"/>
    ${gsicht(50, 50, 9, 3.3)}`,

  Schoggi: `
    <rect x="24" y="12" width="52" height="76" rx="6" fill="#6b3a22"/>
    <path d="M24 31 h52 M24 50 h52 M50 12 v38" stroke="#4a2614" stroke-width="2.5"/>
    <path d="M24 50 h52 v32 q0 6 -6 6 h-40 q-6 0 -6 -6 Z" fill="#e05a5a"/>
    <path d="M24 58 h52" stroke="#f6e0b0" stroke-width="3"/>
    ${gsicht(50, 70, 9, 3.3)}`,

  Mandle: `
    <path d="M50 12 Q22 40 26 66 Q30 88 50 88 Q70 88 74 66 Q78 40 50 12 Z" fill="#c98a54"/>
    <path d="M40 36 q-4 10 -4 20 M60 36 q4 10 4 20 M50 24 v6" fill="none" stroke="#a66a3a" stroke-width="2"/>
    ${gsicht(50, 62, 8, 3.3)}`,

  Marzipan: `
    <path d="M34 14 q4 12 10 18 M50 10 q0 12 4 20 M66 14 q-6 10 -8 18" fill="none" stroke="#4f9a3a" stroke-width="5"/>
    <path d="M30 34 Q50 24 70 34 Q66 66 50 90 Q34 66 30 34 Z" fill="#f2903a"/>
    <path d="M36 48 h8 M56 60 h8 M42 72 h6" stroke="#d06e22" stroke-width="2.5"/>
    ${gsicht(50, 46, 7, 3)}`,

  Haselnuss: `
    <path d="M24 56 Q24 86 50 88 Q76 86 76 56 Z" fill="#b8753e"/>
    <path d="M20 58 Q20 34 50 30 Q80 34 80 58 Q66 50 50 58 Q34 50 20 58 Z" fill="#d6b06a"/>
    <path d="M50 30 q-2 -10 4 -16" fill="none" stroke-width="3.5"/>
    <path d="M30 44 l4 6 M42 38 l2 7 M58 38 l-2 7 M70 44 l-4 6" stroke="#a88a4a" stroke-width="2"/>
    ${gsicht(50, 70, 8, 3.2)}`,

  // ---------- Tierli ----------
  Schnäggli: `
    <path d="M24 57 L18 38 M30 56 L33 37" fill="none"/>
    <circle cx="18" cy="36" r="3.5" fill="#f3d9a4"/>
    <circle cx="33" cy="35" r="3.5" fill="#f3d9a4"/>
    <path d="M12 84 Q8 58 26 55 Q38 55 38 72 L38 76 L86 76 Q94 82 86 86 L18 86 Q12 86 12 84 Z" fill="#f3d9a4"/>
    <circle cx="62" cy="54" r="24" fill="#e9a86b"/>
    <path d="M62 54 m-3 0 a3 3 0 1 1 6 0 a6.5 6.5 0 1 1 -13 0 a10.5 10.5 0 1 1 21 0 a14.5 14.5 0 1 1 -29 0" fill="none" stroke="#a8622e" stroke-width="3"/>
    ${gsicht(24, 68, 5, 2.8)}`,

  Rössli: `
    <path d="M30 34 L32 12 L44 28 Z M70 34 L68 12 L56 28 Z" fill="#c98b5a"/>
    <ellipse cx="50" cy="54" rx="24" ry="30" fill="#c98b5a"/>
    <path d="M38 26 Q50 10 62 26 Q56 34 50 28 Q44 34 38 26 Z" fill="#6b3f22"/>
    <ellipse cx="50" cy="72" rx="17" ry="12" fill="#e8bf98"/>
    <circle cx="44" cy="72" r="2" fill="${DUNKEL}" stroke="none"/>
    <circle cx="56" cy="72" r="2" fill="${DUNKEL}" stroke="none"/>
    ${auge(40, 50)}${auge(60, 50)}${bäckli(32, 60)}${bäckli(68, 60)}
    ${müli(50, 79, 4)}`,

  Chäferli: `
    <path d="M26 50 L14 44 M24 64 L12 66 M28 78 L18 86 M74 50 L86 44 M76 64 L88 66 M72 78 L82 86" fill="none"/>
    <path d="M42 22 L36 10 M58 22 L64 10" fill="none"/>
    <ellipse cx="50" cy="62" rx="26" ry="28" fill="#5b8bd6"/>
    <path d="M50 38 V90" fill="none" stroke-width="2.5"/>
    <path d="M34 50 q6 -6 10 0" fill="none" stroke="#9cc0f0" stroke-width="3"/>
    <circle cx="50" cy="32" r="15" fill="#f3d9a4"/>
    ${gsicht(50, 31, 6, 3)}`,

  Himugüegi: `
    <path d="M40 22 L34 10 M60 22 L66 10" fill="none"/>
    <circle cx="34" cy="10" r="2.5" fill="${DUNKEL}"/>
    <circle cx="66" cy="10" r="2.5" fill="${DUNKEL}"/>
    <circle cx="50" cy="60" r="30" fill="#e04b3a"/>
    <path d="M50 34 V90" fill="none"/>
    <circle cx="35" cy="56" r="5" fill="${DUNKEL}" stroke="none"/>
    <circle cx="65" cy="56" r="5" fill="${DUNKEL}" stroke="none"/>
    <circle cx="38" cy="76" r="4" fill="${DUNKEL}" stroke="none"/>
    <circle cx="62" cy="76" r="4" fill="${DUNKEL}" stroke="none"/>
    <path d="M30 38 A20 20 0 0 1 70 38 Q50 46 30 38 Z" fill="${DUNKEL}"/>
    <circle cx="43" cy="32" r="5" fill="#fff" stroke="none"/>
    <circle cx="57" cy="32" r="5" fill="#fff" stroke="none"/>
    <circle cx="44" cy="33" r="2.5" fill="${DUNKEL}" stroke="none"/>
    <circle cx="58" cy="33" r="2.5" fill="${DUNKEL}" stroke="none"/>`,

  Bärli: `
    <circle cx="28" cy="32" r="11" fill="#b07a4f"/>
    <circle cx="72" cy="32" r="11" fill="#b07a4f"/>
    <circle cx="28" cy="32" r="5" fill="#e8bf98" stroke="none"/>
    <circle cx="72" cy="32" r="5" fill="#e8bf98" stroke="none"/>
    <circle cx="50" cy="56" r="28" fill="#b07a4f"/>
    <ellipse cx="50" cy="66" rx="13" ry="10" fill="#e8bf98"/>
    <ellipse cx="50" cy="62" rx="4.5" ry="3" fill="${DUNKEL}"/>
    ${auge(39, 50)}${auge(61, 50)}${bäckli(30, 60)}${bäckli(70, 60)}
    <path d="M50 65 v3 M46 70 q4 3 8 0" fill="none" stroke-width="2.5"/>`,

  Nashörnli: `
    <ellipse cx="30" cy="34" rx="6" ry="10" fill="#a9b0b8" transform="rotate(-25 30 34)"/>
    <ellipse cx="70" cy="34" rx="6" ry="10" fill="#a9b0b8" transform="rotate(25 70 34)"/>
    <ellipse cx="50" cy="56" rx="28" ry="26" fill="#a9b0b8"/>
    <ellipse cx="50" cy="72" rx="18" ry="12" fill="#c4cad0"/>
    <path d="M43 66 L50 40 L57 66 Z" fill="#f3e6cf"/>
    <circle cx="44" cy="76" r="2" fill="${DUNKEL}" stroke="none"/>
    <circle cx="56" cy="76" r="2" fill="${DUNKEL}" stroke="none"/>
    ${auge(34, 52)}${auge(66, 52)}${bäckli(28, 62)}${bäckli(72, 62)}`,

  Eichhörnli: `
    <path d="M62 86 C94 84 98 48 82 34 C70 24 54 32 62 46 C70 56 74 70 62 86 Z" fill="#d9853f"/>
    <path d="M70 40 q8 4 10 14" fill="none" stroke="#f0b06a" stroke-width="3"/>
    <ellipse cx="44" cy="70" rx="18" ry="17" fill="#e0954f"/>
    <ellipse cx="40" cy="74" rx="9" ry="11" fill="#f6dcb8"/>
    <path d="M28 32 L28 16 L38 28 Z M44 28 L52 16 L54 32 Z" fill="#e0954f"/>
    <circle cx="41" cy="42" r="16" fill="#e0954f"/>
    ${gsicht(41, 42, 6, 3)}
    <ellipse cx="40" cy="62" rx="5" ry="6" fill="#a0673a"/>`,

  Schildchrötli: `
    <rect x="30" y="64" width="12" height="16" rx="6" fill="#b9d98f"/>
    <rect x="66" y="64" width="12" height="16" rx="6" fill="#b9d98f"/>
    <path d="M86 66 l8 2 l-8 4 Z" fill="#b9d98f"/>
    <circle cx="20" cy="58" r="14" fill="#b9d98f"/>
    <path d="M26 72 Q28 34 57 34 Q86 34 88 72 Z" fill="#7fb069"/>
    <path d="M42 72 L46 52 L57 46 L68 52 L72 72 M46 52 L33 50 M68 52 L81 52 M57 46 L57 35" fill="none" stroke="#4f8040" stroke-width="2.5"/>
    ${gsicht(19, 56, 5, 2.8)}`,

  Müüsli: `
    <circle cx="26" cy="36" r="16" fill="#c7c2bd"/>
    <circle cx="74" cy="36" r="16" fill="#c7c2bd"/>
    <circle cx="26" cy="36" r="9" fill="#f4b6b6" stroke="none"/>
    <circle cx="74" cy="36" r="9" fill="#f4b6b6" stroke="none"/>
    <ellipse cx="50" cy="60" rx="25" ry="23" fill="#c7c2bd"/>
    <path d="M36 70 L18 66 M36 74 L18 78 M64 70 L82 66 M64 74 L82 78" fill="none" stroke-width="2"/>
    <circle cx="50" cy="68" r="4" fill="#f28ba0"/>
    ${auge(41, 56)}${auge(59, 56)}
    ${müli(50, 73, 3.5)}`,

  Giräffli: `
    <path d="M42 100 L44 56 L60 56 L62 100 Z" fill="#f2c35b"/>
    <circle cx="50" cy="74" r="4" fill="#c27a3a" stroke="none"/>
    <circle cx="56" cy="88" r="5" fill="#c27a3a" stroke="none"/>
    <path d="M44 28 L41 14 M60 28 L63 14" fill="none"/>
    <circle cx="41" cy="13" r="4.5" fill="#a0622e"/>
    <circle cx="63" cy="13" r="4.5" fill="#a0622e"/>
    <ellipse cx="30" cy="34" rx="8" ry="4.5" fill="#f2c35b" transform="rotate(-20 30 34)"/>
    <ellipse cx="74" cy="34" rx="8" ry="4.5" fill="#f2c35b" transform="rotate(20 74 34)"/>
    <ellipse cx="52" cy="42" rx="20" ry="17" fill="#f2c35b"/>
    <circle cx="66" cy="30" r="3" fill="#c27a3a" stroke="none"/>
    <ellipse cx="52" cy="52" rx="13" ry="8" fill="#f6dcb0"/>
    <circle cx="47" cy="51" r="1.8" fill="${DUNKEL}" stroke="none"/>
    <circle cx="57" cy="51" r="1.8" fill="${DUNKEL}" stroke="none"/>
    ${auge(44, 39, 3.5)}${auge(60, 39, 3.5)}${bäckli(37, 47, 4)}${bäckli(67, 47, 4)}`,

  Äffli: `
    <circle cx="22" cy="52" r="10" fill="#9b6a43"/>
    <circle cx="78" cy="52" r="10" fill="#9b6a43"/>
    <circle cx="22" cy="52" r="5" fill="#e8c39e" stroke="none"/>
    <circle cx="78" cy="52" r="5" fill="#e8c39e" stroke="none"/>
    <circle cx="50" cy="52" r="27" fill="#9b6a43"/>
    <circle cx="41" cy="48" r="11" fill="#e8c39e" stroke="none"/>
    <circle cx="59" cy="48" r="11" fill="#e8c39e" stroke="none"/>
    <ellipse cx="50" cy="64" rx="18" ry="12" fill="#e8c39e" stroke="none"/>
    <path d="M42 28 q4 -8 10 -4" fill="none"/>
    <circle cx="47" cy="59" r="1.6" fill="${DUNKEL}" stroke="none"/>
    <circle cx="53" cy="59" r="1.6" fill="${DUNKEL}" stroke="none"/>
    ${auge(42, 48)}${auge(58, 48)}${bäckli(36, 60, 4)}${bäckli(64, 60, 4)}
    <path d="M42 66 q8 7 16 0" fill="none" stroke-width="2.5"/>`,

  Löi: `
    ${Array.from({ length: 12 }, (_, i) => {
      const w = (i / 12) * Math.PI * 2;
      return `<circle cx="${(50 + 28 * Math.cos(w)).toFixed(1)}" cy="${(52 + 28 * Math.sin(w)).toFixed(1)}" r="11" fill="#c96b2c"/>`;
    }).join("")}
    <circle cx="50" cy="52" r="30" fill="#c96b2c" stroke="none"/>
    <circle cx="34" cy="32" r="6" fill="#f2b65a"/>
    <circle cx="66" cy="32" r="6" fill="#f2b65a"/>
    <circle cx="50" cy="52" r="22" fill="#f2b65a"/>
    <ellipse cx="50" cy="62" rx="11" ry="8" fill="#f8dca8"/>
    <path d="M46 57 h8 l-4 4 Z" fill="${DUNKEL}" stroke-width="2"/>
    ${auge(42, 49, 3.5)}${auge(58, 49, 3.5)}${bäckli(35, 58, 3.5)}${bäckli(65, 58, 3.5)}
    <path d="M50 61 v3 M46 66 q4 3 8 0" fill="none" stroke-width="2"/>`,

  Seelöi: `
    <circle cx="66" cy="16" r="10" fill="#4da3e0"/>
    <path d="M57 13 q9 6 18 0" fill="none" stroke="#fff" stroke-width="3"/>
    <path d="M28 92 Q22 62 38 46 Q46 38 54 40 Q64 46 62 62 Q60 78 78 92 Z" fill="#8c7a6b"/>
    <path d="M36 70 q-14 4 -18 14 q10 0 20 -6" fill="#7a6858"/>
    <circle cx="52" cy="36" r="14" fill="#8c7a6b"/>
    <ellipse cx="62" cy="40" rx="8" ry="6" fill="#b8a594"/>
    <circle cx="67" cy="37" r="2.5" fill="${DUNKEL}" stroke="none"/>
    <path d="M60 44 L74 46 M60 44 L72 50" fill="none" stroke-width="1.5"/>
    ${auge(51, 31, 3.5)}${bäckli(50, 41, 3.5)}`,

  Igeli: `
    <path d="M22 76 L18 60 L26 62 L26 46 L34 54 L38 36 L46 50 L52 32 L58 48 L66 36 L70 52 L78 44 L80 58 L90 58 L86 70 L88 78 Z" fill="#7a5236"/>
    <path d="M6 76 Q8 54 30 56 Q42 60 42 78 Z" fill="#e8c39e"/>
    <circle cx="7" cy="73" r="3.5" fill="${DUNKEL}"/>
    <path d="M6 78 H88" fill="none"/>
    <ellipse cx="34" cy="80" rx="6" ry="3" fill="#e8c39e"/>
    <ellipse cx="72" cy="80" rx="6" ry="3" fill="#e8c39e"/>
    ${auge(24, 65, 3.5)}${bäckli(27, 72, 3.5)}`,

  Häsli: `
    <ellipse cx="40" cy="28" rx="8" ry="22" fill="#f4efe9" transform="rotate(-10 40 28)"/>
    <ellipse cx="60" cy="28" rx="8" ry="22" fill="#f4efe9" transform="rotate(10 60 28)"/>
    <ellipse cx="40" cy="30" rx="3.5" ry="14" fill="#f4b6b6" stroke="none" transform="rotate(-10 40 30)"/>
    <ellipse cx="60" cy="30" rx="3.5" ry="14" fill="#f4b6b6" stroke="none" transform="rotate(10 60 30)"/>
    <circle cx="50" cy="64" r="24" fill="#f4efe9"/>
    <path d="M47 66 h6 l-3 3 Z" fill="#f28ba0" stroke-width="2"/>
    <rect x="47" y="73" width="6" height="6" rx="1" fill="#fff" stroke-width="2"/>
    <path d="M44 72 q3 3 6 1 q3 2 6 -1" fill="none" stroke-width="2"/>
    ${auge(41, 60)}${auge(59, 60)}${bäckli(34, 70)}${bäckli(66, 70)}`,

  Büsi: `
    <path d="M24 48 L24 16 L44 34 Q50 33 56 34 L76 16 L76 48 Q80 80 50 80 Q20 80 24 48 Z" fill="#f0a85a"/>
    <path d="M28 26 L28 38 L38 32 Z M72 26 L72 38 L62 32 Z" fill="#f4b6b6" stroke="none"/>
    <path d="M44 38 v6 M50 37 v8 M56 38 v6" stroke="#c97a30" stroke-width="2.5"/>
    <path d="M47 62 h6 l-3 3 Z" fill="#f28ba0" stroke-width="2"/>
    <path d="M44 68 q3 3 6 0 q3 3 6 0" fill="none" stroke-width="2"/>
    <path d="M34 64 L16 60 M34 68 L16 72 M66 64 L84 60 M66 68 L84 72" fill="none" stroke-width="2"/>
    ${auge(39, 54, 4.5)}${auge(61, 54, 4.5)}${bäckli(32, 64)}${bäckli(68, 64)}`,

  Füchsli: `
    <path d="M18 24 L38 38 Q50 34 62 38 L82 24 L80 50 Q74 70 50 84 Q26 70 20 50 Z" fill="#e57a35"/>
    <path d="M23 30 L26 40 L32 36 Z M77 30 L74 40 L68 36 Z" fill="${DUNKEL}" stroke="none"/>
    <path d="M22 52 Q38 54 50 70 Q62 54 78 52 Q72 70 50 84 Q28 70 22 52 Z" fill="#fff6ea"/>
    <circle cx="50" cy="80" r="4.5" fill="${DUNKEL}"/>
    ${auge(38, 50)}${auge(62, 50)}${bäckli(32, 60, 4)}${bäckli(68, 60, 4)}
    ${müli(50, 70, 3)}`,

  Säuli: `
    <path d="M26 38 L22 18 L42 30 Z M74 38 L78 18 L58 30 Z" fill="#f6b3c0"/>
    <circle cx="50" cy="56" r="27" fill="#f6b3c0"/>
    <ellipse cx="50" cy="64" rx="13" ry="9" fill="#f08ca0"/>
    <ellipse cx="45" cy="64" rx="2.2" ry="3.5" fill="#a04a5a" stroke="none"/>
    <ellipse cx="55" cy="64" rx="2.2" ry="3.5" fill="#a04a5a" stroke="none"/>
    ${auge(39, 48)}${auge(61, 48)}${bäckli(30, 60)}${bäckli(70, 60)}
    ${müli(50, 77, 3)}`,

  Äntli: `
    <ellipse cx="56" cy="68" rx="30" ry="18" fill="#ffd84d"/>
    <path d="M60 62 q12 -4 18 6 q-10 6 -18 -6 Z" fill="#f5c22e"/>
    <path d="M84 60 l8 -6 l-2 10 Z" fill="#ffd84d"/>
    <circle cx="40" cy="42" r="17" fill="#ffd84d"/>
    <path d="M38 25 q2 -8 8 -6 q-4 2 -2 6" fill="#ffd84d"/>
    <ellipse cx="21" cy="47" rx="9" ry="4.5" fill="#f39a2b"/>
    ${auge(36, 39, 3.8)}${bäckli(36, 49, 4)}
    <path d="M44 88 l-4 6 h10 Z M64 88 l-4 6 h10 Z" fill="#f39a2b" stroke-width="2"/>`,

  Pinguinli: `
    <ellipse cx="40" cy="90" rx="9" ry="4" fill="#f39a2b"/>
    <ellipse cx="60" cy="90" rx="9" ry="4" fill="#f39a2b"/>
    <path d="M26 50 Q14 64 20 72 Q26 64 28 58 Z M74 50 Q86 64 80 72 Q74 64 72 58 Z" fill="#34495e"/>
    <ellipse cx="50" cy="54" rx="26" ry="34" fill="#34495e"/>
    <path d="M50 34 Q30 30 30 52 Q28 84 50 86 Q72 84 70 52 Q70 30 50 34 Z" fill="#fff"/>
    <path d="M45 52 h10 l-5 6 Z" fill="#f39a2b" stroke-width="2"/>
    ${auge(42, 45)}${auge(58, 45)}${bäckli(37, 55, 4)}${bäckli(63, 55, 4)}`,

  Wäschbärli: `
    <path d="M24 42 L24 18 L42 32 Z M76 42 L76 18 L58 32 Z" fill="#a3a3a3"/>
    <path d="M28 26 L29 34 L35 31 Z M72 26 L71 34 L65 31 Z" fill="#5a5a5a" stroke="none"/>
    <ellipse cx="50" cy="56" rx="29" ry="25" fill="#a3a3a3"/>
    <path d="M22 54 Q26 42 40 46 Q50 50 60 46 Q74 42 78 54 Q72 62 60 58 Q50 54 40 58 Q28 62 22 54 Z" fill="#3e3e3e" stroke="none"/>
    <path d="M34 66 Q50 92 66 66 Q50 58 34 66 Z" fill="#f2f0ee"/>
    <circle cx="38" cy="52" r="5.5" fill="#fff" stroke="none"/>
    <circle cx="62" cy="52" r="5.5" fill="#fff" stroke="none"/>
    ${auge(38, 52, 3.5)}${auge(62, 52, 3.5)}
    <ellipse cx="50" cy="68" rx="4.5" ry="3" fill="${DUNKEL}"/>
    ${bäckli(32, 66, 4)}${bäckli(68, 66, 4)}
    ${müli(50, 74, 3)}`,
};

function bild(wort) {
  const inhalt = BILDER[wort];
  if (!inhalt) return "";
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
    `<g stroke="${DUNKEL}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">${inhalt}</g></svg>`;
}
