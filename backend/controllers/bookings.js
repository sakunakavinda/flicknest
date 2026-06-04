import prisma from "../lib/prisma.js";

// Helper to convert "HH:mm" string into a Date object and calculate the end time
const calculateEndTime = (startTimeStr, durationHours) => {
  // Attach a dummy date so JavaScript can parse the time correctly in UTC
  const start = new Date(`1970-01-01T${startTimeStr}:00.000Z`);
  
  // Clone the start time for the end time, then add the hours
  const end = new Date(start.getTime());
  end.setMinutes(end.getMinutes() + (durationHours * 60));
  
  // We return both, because Prisma needs both of them to be Date objects!
  return { parsedStartTime: start, parsedEndTime: end };
};



//get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const {date} = req.query;
    const where = {}
    if(date){
      where.bookingDate = new Date(date);
    }
    const bookings = await prisma.booking.findMany({
        where,
      include: { user: true },
    });
    return res
      .status(200)
      .json({ bookings, messege: "Bookings fetched successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};





//create booking
export const createBooking = async (req, res) => {
  try {
    const {
      userId,
      name,
      contact,
      bookingDate,
      startTime,
      durationHours,
      receiptUrl,
    } = req.body;
    // Convert bookingDate to Date object (remove time component)
    const bookingDateObj = new Date(bookingDate + "T00:00:00.000Z");

    const { parsedStartTime, parsedEndTime } = calculateEndTime(startTime, durationHours);


    // Check for overlapping bookings
    const existingBookings = await prisma.booking.findMany({
      where: {
        bookingDate: bookingDateObj,
       AND: [{ startTime: { lt: parsedEndTime } }, { endTime: { gt: parsedStartTime } }],
      },
    });

    if (existingBookings.length > 0) {
      return res .status(400).json({existingBookings, error:"Selected time slot is already booked. Please choose another time."});
    }

    const booking = await prisma.booking.create({
      data: {
        userId,
        name,
        contact,
        bookingDate: bookingDateObj, //new Date(bookingDate + "T00:00:00.000Z"),
        startTime: parsedStartTime,
        endTime: parsedEndTime,
        durationHours,
        receiptUrl,
      },
    });
    return res
      .status(201)
      .json({ booking, messege: "Booking created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


//get availability
export const getAvailability = async (req, res) => {
    try {
        // Get current date and time
        const now = new Date();
        
        // Create the bookingDate in UTC (date only)
        const todayStr = now.toISOString().split("T")[0]; // "2026-06-04"
        const bookingDateObj = new Date(todayStr + "T00:00:00.000Z");

        // Current time as a Date object (using dummy date for Prisma @db.Time)
        const currentHour = String(now.getHours()).padStart(2, "0");
        const currentMinute = String(now.getMinutes()).padStart(2, "0");
        const currentTime = new Date(`1970-01-01T${currentHour}:${currentMinute}:00.000Z`);

        // Find any booking that is currently ongoing
        const activeBooking = await prisma.booking.findFirst({
            where: {
                bookingDate: bookingDateObj,
                AND: [
                    { startTime: { lte: currentTime } },  // started at or before now
                    { endTime: { gte: currentTime } },     // ends at or after now
                ],
            },
            include: { user: true },
        });

        return res.status(200).json({
            active: !!activeBooking,      // true if a booking is ongoing
            booking: activeBooking || null, // the booking details if active
            
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
