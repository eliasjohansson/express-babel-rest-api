import User from '../models/user.model'
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
  const { password, email } = req.body

  User.findOne({ email: email }).select('+password')
    .then(async (user) => {
      if (await user.comparePasswords(password)) {
        return res.json({
          token: createToken(user._id),
          user: user.transform()
        })
      } else {
        return res.json({err: true, msg: 'Passwords did not match.'})
      }
    })
    .catch(err => {
      return res.json(err)
    })
}

const createToken = userId => {
  const token = jwt.encode(userId, jwtSecret, 'HS256', {
    iat: moment().unix(),
    exp: moment().add(1, 'hours').unix()
  })
  return token
}

export default controller
