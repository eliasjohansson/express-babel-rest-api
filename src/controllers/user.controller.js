// import httpStatus from 'http-status'
import User from '../models/user.model'

const controller = {}

controller.getOne = (req, res) => {
  User.findOne({ '_id': req.params.userId })
    .then(user => {
      res.json(user.transform())
    })
    .catch(err => {
      res.json(err)
    })
}

controller.getAll = (req, res) => {
  User.find()
    .then(users => {
      return res.json(users)
    })
    .catch(err => {
      return res.json(err)
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
