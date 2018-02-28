import httpStatus from 'http-status'
import User from '../models/user.model'
// import UserController from './user.controller'

const controller = {}

controller.register = (req, res) => {
  console.log(req.body)
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })
  return user.save()
}

controller.login = (req, res) => {

}

export default controller
