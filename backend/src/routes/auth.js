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
  availCalender,
  selectionBouncer1,
  selectionBouncer2,
  selectionBouncer3,
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
router.post("/check-availability", availCalender);
router.get("/check-availability/bouncer1", selectionBouncer1);
router.get("/check-availability/bouncer2",selectionBouncer2);
router.get("/check-availability/bouncer3",selectionBouncer3);
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
router.post("/charge", paymentPost);
module.exports = router;
