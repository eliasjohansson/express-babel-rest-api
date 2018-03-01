// import httpStatus from 'http-status'
import User from '../models/user.model'

const controller = {

  async getOne (req, res) {
    try {
      const user = await User.findOne({ '_id': req.params.userId }).exec()
      return user.transform()
    } catch (err) {
      return res.json({ err: true, msg: 'User could not be found.' })
    }
  },

  async getAll (req, res) {
    try {
      const users = await User.find().exec()
      return res.json(users)
    } catch (err) {
      return res.json({ err: true, msg: err.msg })
    }
  }
}

export default controller
