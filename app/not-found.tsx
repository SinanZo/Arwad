import Link from 'next/link'
import { headers } from 'next/headers'

export default function NotFound() {
  const h = headers()
  const accept = h.get('accept-language') || ''
  const isArabic = accept.includes('ar')

  const title = isArabic ? 'الصفحة غير موجودة' : 'Page Not Found'
  const desc = isArabic
    ? 'عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
    : 'Sorry, the page you are looking for was not found or has moved.'
  const home = isArabic ? 'الصفحة الرئيسية' : 'Home'
  const contact = isArabic ? 'اتصل بنا' : 'Contact'

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-secondary mb-8 max-w-2xl mx-auto">{desc}</p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-primary">{home}</Link>
          <Link href="/contact" className="btn-outline">{contact}</Link>
        </div>
      </div>
    </div>
  )
}
