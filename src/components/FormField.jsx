import { ChevronDown } from 'lucide-react'

export default function FormField({
  as = 'input',
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
  rows = 4,
  children,
  className = '',
  classNameInput = '',
  disabled = false,
  ...props
}) {
  const baseClassName =
    'w-full rounded-2xl border bg-[#121212] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/40 disabled:cursor-not-allowed disabled:opacity-60'

  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className="mb-3 block text-sm font-medium text-brand-text">
          {label}
        </label>
      )}

      {as === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`${baseClassName} resize-none border-white/10 ${classNameInput}`}
          {...props}
        />
      ) : as === 'select' ? (
        <div className="relative">
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={`${baseClassName} appearance-none border-white/10 pr-11 ${classNameInput}`}
            {...props}
          >
            {children}
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50"
          />
        </div>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`${baseClassName} border-white/10 ${classNameInput}`}
          {...props}
        />
      )}
    </div>
  )
}