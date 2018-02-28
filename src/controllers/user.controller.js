// import httpStatus from 'http-status'
import User from '../models/user.model'

const controller = {}

controller.get = (req, res) => {
  User.findOne({ 'id': req.id })
    .then(user => {
      res.json(user.toJSON())
    })
    .catch(err => {
      res.json(err)
    })
}

/* controller.create = async (req, res, next) => {
  try {
    const user = new User(req.body)
    const savedUser = await user.save()
    res.status(httpStatus.CREATED)
    res.json(savedUser.transform())
  } catch (err) {
    res.send(err)
  }
} */

export default controller
