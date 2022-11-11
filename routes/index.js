import todosRouter from './todos.js'
import { Router } from 'express'
const router = Router()

router.use('/todos',todosRouter)

export default router;
