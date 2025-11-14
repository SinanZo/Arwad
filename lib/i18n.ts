export function pickLangFromHeader(acceptLang?: string | null) {
  if (!acceptLang) return 'en'
  const langs = acceptLang.split(',').map(s => s.trim().split(';')[0].toLowerCase())
  if (langs.some(l => l.startsWith('ar'))) return 'ar'
  return 'en'
}

export async function loadMessages(lang: string) {
  try {
    // dynamic import of JSON locale files
    const msgs = await import(`../locales/${lang}/common.json`)
    return msgs.default || msgs
  } catch (err) {
    // fallback to English
    const msgs = await import(`../locales/en/common.json`)
    return msgs.default || msgs
  }
}
