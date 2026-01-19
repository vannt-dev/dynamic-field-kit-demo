import { fieldRegistry } from "@dynamic-field-kit/react"

fieldRegistry.register("text", ({ value, onValueChange, label }) => (
  <div>
    <label>{label}</label>
    <input
      value={value ?? ""}
      onChange={(e) => onValueChange?.(e.target.value)}
    />
  </div>
))

fieldRegistry.register("number", ({ value, onValueChange, label }) => (
  <div>
    <label>{label}</label>
    <input
      type="number"
      value={value ?? ""}
      onChange={(e) => onValueChange?.(Number(e.target.value))}
    />
  </div>
))

fieldRegistry.register("checkbox", ({ value, onValueChange, label }) => (
  <label>
    <input
      type="checkbox"
      checked={!!value}
      onChange={(e) => onValueChange?.(e.target.checked)}
    />
    {label}
  </label>
))
