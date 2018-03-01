import express from 'express'
import passport from 'passport'
import httpStatus from 'http-status'
import userRoutes from './user.route'
import authRoutes from './auth.route'

import authMiddleware from '../config/passport'
authMiddleware(passport)

const router = express.Router()

router.get('/status', (req, res) => res.status(httpStatus.OK))

router.use('/users', userRoutes)
router.use('/auth', authRoutes)

export default router
