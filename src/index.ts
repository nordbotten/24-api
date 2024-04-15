import express from "express";
import hotelRouter from "./routes/hotels";
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3050;

// Express config
app.use(express.json());
app.use(cors({ origin: "*" }));

// Routes
app.use("/hotels", hotelRouter);

app.get("/", (req, res) => {
  res.send("Healthy!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
