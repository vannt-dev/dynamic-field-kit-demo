import type { FieldDescription } from "@dynamic-field-kit/core"

export const userForm: FieldDescription[] = [
  {
    name: "email",
    type: "text",
    label: "Email"
  },
  {
    name: "age",
    type: "number",
    label: "Age"
  },
  {
    name: "subscribe",
    type: "checkbox",
    label: "Subscribe",
    appearCondition: (data) => data.age >= 18
  }
]
