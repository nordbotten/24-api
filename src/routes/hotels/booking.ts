import express, { Request, Response } from "express";
import { createBooking } from "../../services/booking";

const bookingRouter = express.Router();

// bookingRouter.get("/", (req: Request, res: Response) => {
//   res.json({ message: "Get bookings" });
// });

bookingRouter.post("/", async (req: Request, res: Response) => {
  try {
    const booking = await createBooking(req.body);

    res.json({ status: "success", data: booking });
  } catch (error) {
    console.error(error);
    res.json({ status: "error", message: error }).status(500);
  }
});

// bookingRouter.put("/:id", (req: Request, res: Response) => {
//   res.json({ message: `Update booking ${req.params.id}` });
// });

// bookingRouter.delete("/:id", (req: Request, res: Response) => {
//   res.json({ message: `Delete booking ${req.params.id}` });
// });

export default bookingRouter;
