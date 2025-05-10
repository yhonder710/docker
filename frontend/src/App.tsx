import { useEffect, useState } from "react"
import { ProductForm } from "./components/organismo/Table"

interface Products {
  id_producto: number
  name: string
  price: number
}

function App() {
  const [datos, setDatos] = useState<Products[]>([])

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(res => setDatos(res))
  }, [])

  console.log(datos)
  return (
    <>
      <h1>Express + React + Ts</h1>
      <ProductForm />
      {
        datos.map(product => {
          return (
            <div>
              <strong>{product.id_producto}</strong>
              <span>{product.name}</span>
              <span>{product.price}</span>
            </div>
          )
        })
      }
    </>
  )
}

export default App
