import { ProductModel } from "../models/productsPg.js"

export class ProductsControlles {

  getAll = async (req, res) => {
    const results = await ProductModel.getAll()
    res.json(results)
  }

  create = async (req, res) => {
    const data = req.body

    const newProduct = await ProductModel.create({ input: data })

    res.status(201).json(newProduct)
  }

  productTotal = async (req, res) => {
    const results = await ProductModel.productTotal()
    res.json(results)
  }
}
