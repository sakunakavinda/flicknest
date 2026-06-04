import express from "express";
import "dotenv/config";
import bookingRoutes from "./backend/routes/bookings.js"
import userRoutes from "./backend/routes/users.js"


const app = express();
const port = process.env.PORT || 4003;

app.use(express.json());
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello Worleeezd!");
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});