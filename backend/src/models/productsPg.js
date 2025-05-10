import { pool } from "../databases/pgConection.js"

export class ProductModel {
  static async getAll() {
    const result = await pool.query('SELECT * FROM products ')
    return result.rows
  }

  static async create({ input }) {
    const { id, products, price } = input

    try {
      await pool.query(
        `INSERT INTO products (id_producto, name, price) VALUES
        ($1,$2, $3)`,
        [id, products, price]
      )
    } catch (error) {
      //con esto se puede enviar el error a un servicio externo
      console.error(error)
    }



    const newProduct = await pool.query(
      `SELECT id_producto, name, price FROM products WHERE id_producto = ($1);`, [id]
    )

    return newProduct.rows
  }

  static async productTotal() {
    const result = await pool.query('select sum(price) as total from products')

    return result.rows
  }
}
