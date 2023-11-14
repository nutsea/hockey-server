const Router = require('express')
const router = new Router()
const itemRouter = require('./itemRouter')
const imageRouter = require('./imageRouter')

router.use('/item', itemRouter)
router.use('/image', imageRouter)

module.exports = router