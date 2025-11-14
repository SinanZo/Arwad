'use client'

interface StatCardProps {
  value: string
  label: string
  suffix?: string
}

export default function StatCard({ value, label, suffix = '+' }: StatCardProps) {
  return (
    <div className="card text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
        {value}{suffix}
      </div>
      <div className="text-secondary font-medium">{label}</div>
    </div>
  )
}
