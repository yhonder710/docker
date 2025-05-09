import { pool } from "./databases/pgConection.js"

export class ProductModel {
  static async getAll() {
    const result = await pool.query('SELECT * FROM products ')
    return result.rows
  }

  static async create({ input }) {
    const { id, products, price } = input

    const newProduct = { id: id, products: products, price: price }

    return newProduct
  }
}
