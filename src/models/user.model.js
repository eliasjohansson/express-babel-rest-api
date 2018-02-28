import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import httpStatus from 'http-status'
import moment from 'moment-timezone'
import jwt from 'jwt-simple'
import { jwtSecret, jwtExpMin } from '../config/dotenv'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/
  },
  username: {
    type: String,
    required: true,
    maxlength: 128
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 128
  }
}, {
  timestamps: true
})

userSchema.pre('save', function (next) {
  const user = this
  if (!this.isModified('password')) return next()

  bcrypt.hash(this.password, 8, function (err, hash) {
    if (err) {
      next(err)
    } else {
      user.password = hash
      next()
    }
  })
})

userSchema.method({
  comparePasswords (password, next) {
    bcrypt.compare(password, this.password, function (err, res) {
      if (err) {
        next(err)
      } else {
        next()
      }
    })
  },
  toJSON () {
    var obj = this.toObject()
    delete obj.password
    return obj
  },
  toAuthJSON () {}
})

export default mongoose.model('User', userSchema)
