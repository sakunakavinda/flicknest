import express from "express";
import { getAllBookings } from "../controllers/bookings.js";

const router = express.Router();

router.get("/", getAllBookings);



export default router;





























    