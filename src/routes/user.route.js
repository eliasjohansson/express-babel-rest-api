import express from 'express'
import controller from '../controllers/user.controller'
import passport from 'passport'

const router = express.Router()

/*
  Auth Middleware:   passport.authenticate('jwt', {session: false})
*/

router.route('/')
  .get(passport.authenticate('jwt', {session: false}), controller.list)

router.route('/me')
  .get(controller.me)

router.route('/:userId')
  .get(controller.getById)

export default router
