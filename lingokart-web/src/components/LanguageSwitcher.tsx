"use client"

const OPTIONS = [
  { value: "en", label: "English" },
  { value: "hi", label: "Hindi" },
  { value: "ta", label: "Tamil" },
  { value: "bn", label: "Bengali" },
]

type Props = {
  value: string
  onChange: (value: string) => void
}

export function LanguageSwitcher({ value, onChange }: Props) {
  return (
    <select
      className="cursor-pointer rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
