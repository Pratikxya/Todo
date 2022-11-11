import todosRouter from './todos.js'
import authRouter from './users.js'
import { Router } from 'express'
import passport from 'passport'
const router = Router()

router.use('/todos', passport.authenticate('jwt', { session: false }), todosRouter)
router.use('/auth', authRouter)

export default router;
