const router = require('express').Router()
const Note = require('../models/note')
const User = require('../models/user')

router.post('/reset', async (request, response, next) => {
  try {
    await Note.deleteMany({})
    await User.deleteMany({})
    response.status(204).end()
  } catch (error) {
    next(error) // pass error to error handler middleware
  }
})

module.exports = router
