const { Router } = require('express')
const {
  getUsers,
  register,
  login,
  protected,
  logout,
} = require('../controllers/auth')
const { createBooking, getBookings, getById } = require('../controllers/bookings')
const {
  validationMiddleware,
} = require('../middlewares/validations-middleware')
const { registerValidation, loginValidation } = require('../validators/auth')
const { userAuth } = require('../middlewares/auth-middleware')
const router = Router()

router.get('/get-users', getUsers)
router.get('/protected', userAuth, protected)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login)
router.get('/logout', logout)
router.post('/bookings', createBooking)
router.get('/bookings', getBookings)
router.get('bookings/:id', getById)
module.exports = router
