// Renders a contribution activity graph for the last 31 days as light and dark
// SVGs. Runs in the snake workflow; needs GITHUB_TOKEN and GITHUB_USER.
import { mkdirSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const DAYS = 31;
const W = 1000;
const H = 320;
const PAD = { top: 70, right: 30, bottom: 45, left: 55 };

const THEMES = {
  light: { bg: "#ffffff", border: "#d0d7de", text: "#24292f", muted: "#57606a", grid: "#eaeef2", line: "#0969da" },
  dark: { bg: "#0d1117", border: "#30363d", text: "#c9d1d9", muted: "#8b949e", grid: "#21262d", line: "#58a6ff" },
};

async function fetchDays(login, token) {
  const query = `query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar { weeks { contributionDays { date contributionCount } } }
      }
    }
  }`;
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { login } }),
  });
  const json = await res.json();
  if (!res.ok || json.errors) throw new Error(JSON.stringify(json.errors ?? json));
  const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks;
  return weeks.flatMap((w) => w.contributionDays).slice(-DAYS);
}

// Rounds the axis maximum up to a step that gives at most five gridlines.
function niceScale(max) {
  if (max <= 4) return { top: 4, step: 1 };
  const raw = max / 4;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const step = [1, 2, 5, 10].map((m) => m * mag).find((s) => s >= raw);
  return { top: Math.ceil(max / step) * step, step };
}

export function render(days, login, theme) {
  const c = THEMES[theme];
  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top - PAD.bottom;
  const counts = days.map((d) => d.contributionCount);
  const total = counts.reduce((a, b) => a + b, 0);
  const { top, step } = niceScale(Math.max(...counts));
  const x = (i) => PAD.left + (i * plotW) / (days.length - 1);
  const y = (v) => PAD.top + plotH - (v / top) * plotH;

  const grid = [];
  for (let v = 0; v <= top; v += step) {
    grid.push(
      `<line x1="${PAD.left}" x2="${W - PAD.right}" y1="${y(v)}" y2="${y(v)}" stroke="${c.grid}" />`,
      `<text x="${PAD.left - 10}" y="${y(v) + 4}" text-anchor="end" fill="${c.muted}" font-size="11">${v}</text>`
    );
  }

  const points = counts.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`);
  const area = `M${x(0)},${y(0)} L${points.join(" L")} L${x(days.length - 1)},${y(0)} Z`;
  const labels = days.map(
    (d, i) =>
      `<text x="${x(i)}" y="${H - PAD.bottom + 20}" text-anchor="middle" fill="${c.muted}" font-size="11">${Number(d.date.slice(8))}</text>`
  );
  const dots = counts.map(
    (v, i) => `<circle cx="${x(i)}" cy="${y(v)}" r="3.5" fill="${c.bg}" stroke="${c.line}" stroke-width="2"><title>${days[i].date}: ${v}</title></circle>`
  );
  const range = `${days[0].date} to ${days[days.length - 1].date}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif">
  <defs>
    <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${c.line}" stop-opacity="0.35" />
      <stop offset="1" stop-color="${c.line}" stop-opacity="0" />
    </linearGradient>
  </defs>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="6" fill="${c.bg}" stroke="${c.border}" />
  <text x="${W / 2}" y="32" text-anchor="middle" fill="${c.text}" font-size="18" font-weight="600">${login}'s Contribution Graph</text>
  <text x="${W / 2}" y="52" text-anchor="middle" fill="${c.muted}" font-size="12">${total} contributions · ${range}</text>
  ${grid.join("\n  ")}
  <path d="${area}" fill="url(#fill)" />
  <polyline points="${points.join(" ")}" fill="none" stroke="${c.line}" stroke-width="2.5" stroke-linejoin="round" />
  ${dots.join("\n  ")}
  ${labels.join("\n  ")}
</svg>
`;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const login = process.env.GITHUB_USER;
  const days = await fetchDays(login, process.env.GITHUB_TOKEN);
  const out = process.argv[2] ?? "dist";
  mkdirSync(out, { recursive: true });
  writeFileSync(`${out}/activity-graph.svg`, render(days, login, "light"));
  writeFileSync(`${out}/activity-graph-dark.svg`, render(days, login, "dark"));
}
