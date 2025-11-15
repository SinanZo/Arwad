const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'tmp_a11y');
if (!fs.existsSync(dir)) {
  console.error('tmp_a11y directory not found');
  process.exit(1);
}

const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
const summary = {};
for (const f of files) {
  const full = path.join(dir, f);
  const raw = fs.readFileSync(full, 'utf8');
  let j;
  try { j = JSON.parse(raw); } catch (e) { console.error('parse error', f, e.message); continue }
  const violations = j.violations || [];
  summary[f] = violations.map(v => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.map(n => ({ target: n.target.slice(0,3), html: (n.html || '').slice(0,120).replace(/\n/g,' ') })) }));
}
console.log(JSON.stringify(summary, null, 2));
