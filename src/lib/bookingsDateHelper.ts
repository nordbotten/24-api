import { Prisma } from "@prisma/client";

const bookingsDateHelper = (
  fromDate: Date,
  toDate: Date
): Prisma.BookingListRelationFilter => {
  return {
    none: {
      OR: [
        {
          fromDate: {
            gte: fromDate,
            lt: toDate,
          },
        },
        {
          toDate: {
            gte: toDate,
            lte: fromDate,
          },
        },
      ],
    },
  };
};

export { bookingsDateHelper };
