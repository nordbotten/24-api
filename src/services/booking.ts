import prisma from "../lib/prisma";
import { validateBookingRequest } from "../zod/validateBookingRequest";
import { bookingsDateHelper } from "../lib/bookingsDateHelper";

const createBooking = async (formData: object) => {
  // TODO: Validate request body

  const validBody = validateBookingRequest.parse(formData);

  const availableRoom = await prisma.room.findFirst({
    where: {
      roomTypeId: validBody.roomType,
      bookings: {
        ...bookingsDateHelper(
          new Date(validBody.fromDate),
          new Date(validBody.toDate)
        ),
      },
    },
  });
  if (!availableRoom) {
    throw "No available rooms";
  }
  const booking = prisma.booking.create({
    data: {
      email: validBody.email,
      fromDate: new Date(validBody.fromDate),
      toDate: new Date(validBody.toDate),
      name: validBody.name,
      phone: validBody.phone,
      roomTypeId: validBody.roomType,
      roomId: availableRoom.id,
    },
  });
  return booking;
};

export { createBooking };
