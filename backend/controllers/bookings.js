
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
