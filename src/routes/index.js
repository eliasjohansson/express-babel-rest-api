import express from 'express'
import httpStatus from 'http-status'
import userRoutes from './user.route'
import authRoutes from './auth.route'

const router = express.Router()

router.get('/status', (req, res) => res.status(httpStatus.OK))

router.use('/users', userRoutes)
router.use('/auth', authRoutes)

export default router
