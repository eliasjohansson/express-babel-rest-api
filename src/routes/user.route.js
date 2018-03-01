import express from 'express'
import controller from '../controllers/user.controller'

const router = express.Router()

router.route('/')
  .get(controller.getAll)

router.route('/:userId')
  .get(controller.getOne)

export default router
