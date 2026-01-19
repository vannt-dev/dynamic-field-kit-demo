import { useState } from "react"
import { MultiFieldInput } from "@dynamic-field-kit/react"
import { userForm } from "./form"
import "./fieldRegistry"
import "./types/dynamic-field-kit"

export default function App() {
  const [data, setData] = useState({})

  return (
    <div style={{ padding: 24 }}>
      <h2>Dynamic Field Kit Demo</h2>

      <MultiFieldInput
        fieldDescriptions={userForm}
        properties={data}
        onChange={setData}
      />

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
