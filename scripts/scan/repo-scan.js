const fs = require('fs')
const path = require('path')

const root = process.cwd()
const exts = ['.ts', '.tsx', '.js', '.jsx', '.json']

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const ent of entries) {
    if (ent.name === 'node_modules' || ent.name === '.next' || ent.name === '.git') continue
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(full)
    else {
      const ext = path.extname(ent.name).toLowerCase()
      if (exts.includes(ext)) checkFile(full, ext)
    }
  }
}

function checkFile(filePath, ext) {
  let raw
  try {
    raw = fs.readFileSync(filePath, 'utf8')
  } catch (e) {
    console.error('READ_ERR', filePath, e.message)
    return
  }

  if (ext === '.json') {
    try { JSON.parse(raw) } catch (e) { console.log('JSON_PARSE_ERROR', filePath, e.message) }
    return
  }

  const exportDefaultCount = (raw.match(/export\s+default/g) || []).length
  if (exportDefaultCount > 1) console.log('MULTIPLE_EXPORT_DEFAULT', filePath, exportDefaultCount)

  // check 'use client' placement
  const useClientMatch = raw.match(/(['"])use client\1/)
  if (useClientMatch) {
    // find first non-empty, non-comment line index
    const lines = raw.split(/\r?\n/)
    let firstCodeLine = -1
    for (let i = 0; i < lines.length; i++) {
      const ln = lines[i].trim()
      if (!ln) continue
      if (ln.startsWith('//')) continue
      if (ln.startsWith('/*')) {
        // skip block comment
        while (i < lines.length && !lines[i].includes('*/')) i++
        continue
      }
      firstCodeLine = i
      break
    }
    const useClientLine = raw.substring(0, raw.indexOf(useClientMatch[0])).split(/\r?\n/).length - 1
    if (useClientLine !== firstCodeLine) console.log('USE_CLIENT_NOT_TOP', filePath, 'line', useClientLine + 1, 'firstCodeLine', firstCodeLine + 1)
  }
}

console.log('Scanning repo from', root)
walk(root)
console.log('Scan complete')
