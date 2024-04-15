import { z } from "zod";

export const validateBookingRequest = z.object({
  hotelId: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  fromDate: z.string(),
  toDate: z.string(),
  roomType: z.string(),
});
