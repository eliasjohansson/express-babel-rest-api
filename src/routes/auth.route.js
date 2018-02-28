import express from 'express'
import controller from '../controllers/auth.controller'

const router = express.Router()

router.route('/register')
  .post(controller.register)

export default router
