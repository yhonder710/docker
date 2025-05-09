import { Router } from "express"
import { ProductsControlles } from "../controllers/products.js"

export const createProductsRouter = () => {
  const productsRouter = Router()

  const productsControlles = new ProductsControlles()

  productsRouter.get('/', productsControlles.getAll)
  productsRouter.post('/create', productsControlles.create)

  return productsRouter
}
