import { useEffect, useState } from "react"

function App() {
  const [datos, setDatos] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001")
      .then(res => res.json())
      .then(res => setDatos(res))
  }, [])

  console.log(datos)
  return (
    <>
      <h1>Express + React + Ts</h1>
      <strong>{datos?.message}</strong>
    </>
  )
}

export default App
