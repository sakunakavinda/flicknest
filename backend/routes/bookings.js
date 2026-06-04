import express from "express";
import { getAllBookings, createBooking, getAvailability } from "../controllers/bookings.js";

const router = express.Router();

router.get("/", getAllBookings);
router.post("/", createBooking);
router.get("/check", getAvailability)



export default router;





























    