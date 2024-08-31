const express = require('express')
const router = express.Router()

/* GET users listing yes. */
router.get('/users', function (req, res, next) {
  res.send('respond with a resource')
})

module.exports = router
