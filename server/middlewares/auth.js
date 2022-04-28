const admin = require('../config/firebase-config')

const decodeToken = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]
      const decodeValue = admin.auth().verifyIdToken(token)

      if (decodeValue) {
        return next()
      }

      return res.status(401).json({
        status: 'failed',
        message: 'sorry you are unauthorized!',
      })
    }
    return res.status(401).json({
      status: 'failed',
      message: 'sorry you are unauthorized!',
    })
  } catch (error) {
    return res.status(500).json({
      status: 'failed',
      message: 'internal server error',
    })
  }
}

module.exports = decodeToken
