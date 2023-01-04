const { Router } = require("express");
const {
  getUsers,
  register,
  login,
  protected,
  logout,
} = require("../controllers/auth");
const {
  createBooking,
  getBookings,
  getById,
  editBooking,
  getRecentBookings,
  getMostRecent,
  getTotalCost,
  getTotalCostForCurrentMonth,
  countBookingsWithin7Days,
  countBookingsWithin14Days,
  getUnpaid,
  getBookingsPagination,
  searchBookings,
  calendarDates,
} = require("../controllers/bookings");
const {
  validationMiddleware,
} = require("../middlewares/validations-middleware");
const { registerValidation, loginValidation } = require("../validators/auth");
const { userAuth } = require("../middlewares/auth-middleware");
const { excelReceipts, createReceipt } = require("../controllers/finance");
const {
  getAllTask,
  createTask,
  editTask,
  getIncompleteTasks,
} = require("../controllers/tasks");
const { paymentPost } = require("../controllers/payments");

const router = Router();

router.get("/get-users", getUsers);
router.get("/protected", userAuth, protected);
router.post("/register", registerValidation, validationMiddleware, register);
router.post("/login", loginValidation, validationMiddleware, login);
router.get("/logout", logout);
//Booking Table Routes
router.post("/bookings", createBooking);
router.get("/bookings", getBookings);
router.get("bookings/:id", getById);
router.patch("/bookings/:id", editBooking);
router.get("/ytd-income", getTotalCost);
router.get("/mtd-income", getTotalCostForCurrentMonth);
router.get("/weekly-bookings", countBookingsWithin7Days);
router.get("/biweekly-bookings", countBookingsWithin14Days);
router.get("/recent-bookings", getRecentBookings);
router.get("/unpaid", getUnpaid);
router.get("/bookings-table", getBookingsPagination);
router.get("/search-bookings", searchBookings);
router.get("/rental_dates", calendarDates);
//Finance Routes
router.post("/receipts", createReceipt);
router.get("/receipts/export", excelReceipts);
//Task Manager
router.get("/tasks", getAllTask);
router.post("/create-task", createTask);
router.put("/update-task/:id", editTask);
router.get("/task", getIncompleteTasks);
// router.get("/search", searchTable);
//Payments
router.post("/checkout-one", paymentPost);
module.exports = router;
