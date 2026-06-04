
import prisma from '../lib/prisma.js'

//get all bookings
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await prisma.booking.findMany({
            include: {theater: true, user: true}
        });
        return res.status(200).json({bookings, messege:"Bookings fetched successfully"})
    }catch (error){
        console.log(error);
        return res.status(500).json({error:"Internal server error"});
    }
};


//create booking
export const createBooking = async (req, res) => {
    try {
        const { userId, guestName, guestContact, bookingDate, startTime, endTime, durationHours, receiptUrl } = req.body;
        const booking = await prisma.booking.create({
            data: {
                userId, 
                guestName, 
                guestContact, 
                bookingDate: new Date(bookingDate + "T00:00:00.000Z"), 
                startTime, 
                endTime, 
                durationHours, 
                receiptUrl 
            }
        });
        return res.status(201).json({booking, messege:"Booking created successfully"});
    }catch(error){
        console.log(error);
        return res.status(500).json({error:"Internal server error"});
    }
};