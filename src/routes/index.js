import express from 'express'
import userRoutes from './user.route'
import authRoutes from './auth.route'

const router = express.Router()

/**
*  GET /api/status
*/
router.get('/status', (req, res) => res.send('OK'))

router.use('/users', userRoutes)
router.use('/auth', authRoutes)

export default router
