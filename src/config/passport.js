import { Strategy, ExtractJwt } from 'passport-jwt'
import { jwtSecret } from './dotenv'
import User from '../models/user.model'

export default function (passport) {
  var opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
  opts.secretOrKey = jwtSecret

  passport.use(new Strategy(opts, (jwtPayload, done) => {
    User.findOne({ id: jwtPayload._id }, (err, user) => {
      if (err) {
        return done(err, false)
      }
      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    })
  }))
}
