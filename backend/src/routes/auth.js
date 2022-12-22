const { Router } = require('express')
const {
  getUsers,
  register,
  login,
  protected,
  logout,
} = require('../controllers/auth')
const { createBooking, getBookings, getById, editBooking } = require('../controllers/bookings')
const {
  validationMiddleware,
} = require('../middlewares/validations-middleware')
const { registerValidation, loginValidation } = require('../validators/auth')
const { userAuth } = require('../middlewares/auth-middleware')
const { excelReceipts, createReceipt } = require('../controllers/finance')
const { createTask } = require('../controllers/tasks')
const { getEmployees } = require('../controllers/employees')
const { searchTable } = require('../controllers/bookingDbSearch')
const router = Router()

router.get('/get-users', getUsers)
router.get('/protected', userAuth, protected)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login)
router.get('/logout', logout)
router.post('/bookings', createBooking)
router.get('/bookings', getBookings)
router.get('bookings/:id', getById)
router.put('/bookings', editBooking)
router.post('/receipts', createReceipt)
router.get('/receipts/export', excelReceipts)
router.post('/tasks', createTask)
router.get('/employees', getEmployees)
router.get("/search/:table", searchTable);

module.exports = router
