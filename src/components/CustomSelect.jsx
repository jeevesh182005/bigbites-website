import { Listbox } from '@headlessui/react'
import { Check, ChevronDown } from 'lucide-react'

export default function CustomSelect({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select',
  className = '',
  disabled = false,
}) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="mb-3 block text-sm font-medium text-brand-text">
          {label}
        </label>
      )}

      <Listbox value={value} onChange={onChange} disabled={disabled}>
        <div className="relative">
          <Listbox.Button className="w-full rounded-2xl border border-white/10 bg-[#121212] px-4 py-3 text-left text-sm text-white transition focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/40 disabled:cursor-not-allowed disabled:opacity-60">
            {value || <span className="text-white/40">{placeholder}</span>}
            <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          </Listbox.Button>

          <Listbox.Options className="scrollbar-hide absolute z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-2xl border border-white/10 bg-[#121212] shadow-lg backdrop-blur-xl">
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                value={option}
                className={({ active }) =>
                  `cursor-pointer px-4 py-3 text-sm transition ${
                    active ? 'bg-brand-orange text-black' : 'text-white hover:bg-white/5'
                  }`
                }
              >
                {({ selected }) => (
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {selected && <Check size={16} />}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}