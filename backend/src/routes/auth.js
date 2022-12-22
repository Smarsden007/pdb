const { Router } = require('express')
const {
  getUsers,
  register,
  login,
  protected,
  logout,
} = require('../controllers/auth')
const { createBooking, getBookings, getById, editBooking, getRecentBookings, getMostRecent, getTotalCost, getTotalCostForCurrentMonth, countBookingsWithin7Days, countBookingsWithin14Days } = require('../controllers/bookings')
const {
  validationMiddleware,
} = require('../middlewares/validations-middleware')
const { registerValidation, loginValidation } = require('../validators/auth')
const { userAuth } = require('../middlewares/auth-middleware')
const { excelReceipts, createReceipt } = require('../controllers/finance')
const { createTask, getCompletedTasks, getIncompleteTasks } = require('../controllers/tasks')
const { getEmployees } = require('../controllers/employees')
const { searchTable } = require('../controllers/bookingDbSearch')
const router = Router()

router.get('/get-users', getUsers)
router.get('/protected', userAuth, protected)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login)
router.get('/logout', logout)
//Booking Table Routes
router.post('/bookings', createBooking)
router.get('/bookings', getBookings)
router.get('bookings/:id', getById)
router.put('/bookings', editBooking)
router.get('/ytd-income', getTotalCost)
router.get('mtd-income', getTotalCostForCurrentMonth)
router.get('weekly-bookings', countBookingsWithin7Days)
router.get('biweekly-bookings', countBookingsWithin14Days)
router.get('/recent-bookings', getRecentBookings)
//Finance Routes
router.post('/receipts', createReceipt)
router.get('/receipts/export', excelReceipts)
//Task Manager
router.post('/tasks', createTask)
router.get('/employees', getEmployees)
router.get('/completed-tasks', getCompletedTasks)
router.get('/incompleted-tasks', getIncompleteTasks)


// router.get("/search", searchTable);
module.exports = router
