import express, { Request, Response } from "express";
import { getRoomTypeAvailability } from "../../services/roomType";

const roomTypesRouter = express.Router({ mergeParams: true });

roomTypesRouter.get("/", (req: Request, res: Response) => {
  res.json({ message: "Get room types" });
});

roomTypesRouter.get("/availability", async (req: Request, res: Response) => {
  try {
    if (!req.query.fromDate || !req.query.toDate) {
      throw new Error("Please provide fromDate and toDate query parameters");
    }
    const availableRoomTypes = await getRoomTypeAvailability(
      req.params.hotelId,
      null,
      new Date(req.query.fromDate as string),
      new Date(req.query.toDate as string)
    );
    res.json({ status: "success", data: availableRoomTypes });
  } catch (error) {
    res
      .json({ status: "error", message: "Error getting room availability" })
      .status(500);
  }
});

roomTypesRouter.get("/:roomTypeId", async (req: Request, res: Response) => {
  try {
    const roomType = await getRoomTypeAvailability(
      req.params.hotelId,
      req.params.roomTypeId,
      new Date(req.query.fromDate as string),
      new Date(req.query.toDate as string)
    );
    if (roomType.length === 0) {
      throw new Error("Room not found");
    }
    res.json({ status: "success", data: roomType[0] });
  } catch (error) {
    res.json({ status: "error", message: "Error getting room" }).status(500);
  }
});

export default roomTypesRouter;
