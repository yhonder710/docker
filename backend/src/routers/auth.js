import { Router } from "express"
import { validateUsers } from "../schema/usersSchema.js"
import { AuthControlles } from "../controllers/auth.js"

export const createRouterAuth = () => {
  const authRouter = Router()

  authRouter.get('/', (req, res) => {
    res.json({ message: 'hola' })
  })

  authRouter.post('/login', (req, res) => {
    const results = validateUsers(req.body)

    if (results.error) {
      console.error('ha surgido un error con los datos')
    }

    const user = AuthControlles.create({ input: results.data })


  })

  authRouter.post('/register', (req, res) => {

  })

  authRouter.post('/logout', (req, res) => {

  })

  authRouter.post('/protected', (req, res) => {

  })


  return authRouter
}
