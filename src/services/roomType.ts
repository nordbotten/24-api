import { bookingsDateHelper } from "../lib/bookingsDateHelper";
import prisma from "../lib/prisma";

const getRoomTypeAvailability = async (
  hotelId: string,
  roomId: string | null,
  fromDate: Date,
  toDate: Date
) => {
  const availableRoomTypes = await prisma.roomType.findMany({
    where: {
      hotelId,
      ...(roomId ? { id: roomId } : {}),
    },
    include: {
      _count: {
        select: {
          rooms: {
            where: {
              bookings: {
                ...bookingsDateHelper(fromDate, toDate),
              },
            },
          },
        },
      },
    },
    orderBy: {
      price: "asc",
    },
  });
  return availableRoomTypes;
};

export { getRoomTypeAvailability };
