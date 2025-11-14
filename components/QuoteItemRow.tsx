"use client"

import { useState } from 'react'

const X = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>

interface QuoteItem {
  id: string
  partNumber: string
  description: string
  manufacturer: string
  quantity: string
  category: string
}

interface QuoteItemRowProps {
  item: QuoteItem
  onUpdate: (id: string, field: keyof QuoteItem, value: string) => void
  onRemove: (id: string) => void
  categories: string[]
}

export default function QuoteItemRow({
  item,
  onUpdate,
  onRemove,
  categories,
}: QuoteItemRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4 bg-surface rounded-lg border border-custom">
      <input
        type="text"
        placeholder="Part Number"
        value={item.partNumber}
        onChange={(e) => onUpdate(item.id, 'partNumber', e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Description"
        value={item.description}
        onChange={(e) => onUpdate(item.id, 'description', e.target.value)}
        className="input-field md:col-span-2"
      />
      <input
        type="text"
        placeholder="Manufacturer"
        value={item.manufacturer}
        onChange={(e) => onUpdate(item.id, 'manufacturer', e.target.value)}
        className="input-field"
      />
      <input
        type="number"
        placeholder="Quantity"
        value={item.quantity}
        onChange={(e) => onUpdate(item.id, 'quantity', e.target.value)}
        className="input-field"
        min="1"
      />
      <div className="flex gap-2">
        <select
          value={item.category}
          onChange={(e) => onUpdate(item.id, 'category', e.target.value)}
          className="input-field flex-1"
        >
          <option value="">Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button
          onClick={() => onRemove(item.id)}
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 hover:bg-accent-200 dark:hover:bg-accent-800 transition-colors flex-shrink-0"
          aria-label="Remove item"
        >
          <X />
        </button>
      </div>
    </div>
  )
}
