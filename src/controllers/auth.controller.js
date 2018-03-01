// import httpStatus from 'http-status'
import User from '../models/user.model'
// import UserController from './user.controller'
// import httpStatus from 'http-status'
import moment from 'moment-timezone'
import jwt from 'jwt-simple'
import { jwtSecret } from '../config/dotenv'

const controller = {}

controller.register = (req, res) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })

  user.save((err, user) => {
    if (err) return res.send(err)

    const token = jwt.encode(user._id, jwtSecret, 'HS256', {
      iat: moment().unix(),
      exp: moment().add(1, 'hours').unix()
    })

    return res.json({ user: user.transform(), token: token })
  })
}

controller.login = (req, res) => {

}

export default controller
