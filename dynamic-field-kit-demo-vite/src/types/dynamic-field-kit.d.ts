import "@dynamic-field-kit/react"

declare module "@dynamic-field-kit/react" {
  interface FieldTypeMap {
    text: string
    number: number
    checkbox: boolean
    select: string
  }
}
