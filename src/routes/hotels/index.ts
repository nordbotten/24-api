import express, { Request, Response } from "express";
import bookingRouter from "./booking";
import { getAllHotels, getSingleHotel } from "../../services/hotel";
import roomTypesRouter from "./roomTypes";

const hotelRouter = express.Router();

hotelRouter.get("/", async (req: Request, res: Response) => {
  try {
    const hotels = await getAllHotels();
    res.json({ status: "success", data: hotels });
  } catch (error) {
    res.json({ status: "error", message: "Error getting hotels" }).status(500);
  }
});

const singleHotelRouter = express.Router({ mergeParams: true });

singleHotelRouter.use("/booking", bookingRouter);
singleHotelRouter.use("/room-types", roomTypesRouter);
singleHotelRouter.get("/", async (req: Request, res: Response) => {
  try {
    const hotel = await getSingleHotel(req.params.hotelId);
    res.json({ status: "success", data: hotel });
  } catch (error) {
    res.json({ status: "error", message: "Error getting hotel" }).status(500);
  }
});

hotelRouter.use("/:hotelId", singleHotelRouter);

export default hotelRouter;
