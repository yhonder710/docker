import express from 'express'
import cors from 'cors'
import { createProductsRouter } from './routers/products.js'
import { createRouterAuth } from './routers/auth.js'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'hola mundo' })
})

app.use('/auth', createRouterAuth())

app.use('/products', createProductsRouter())


app.listen(3001, console.log('se a ejecutado la aplicacion'))
