import httpStatus from 'http-status'
import User from '../models/user.model'

const controller = {

  async getById (req, res) {
    try {
      const user = await User.findById(req.params.userId).exec()
      return res.json(user.transform())
    } catch (err) {
      res.status(httpStatus.NOT_FOUND).json('No user found.')
    }
  },

  async me (req, res) {
    return res.send('me') // TODO
  },

  async list (req, res) {
    try {
      const users = await User.find().exec()
      return res.json(users)
    } catch (err) {
      res.status(httpStatus.NOT_FOUND)
      return res.json({ message: 'No users found.' })
    }
  }
}

export default controller
