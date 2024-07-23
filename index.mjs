import express from "express";
import dotenv from "dotenv";
import connectDB from "./conn/db.mjs";
import destRoutes from "./routes/destRoutes.mjs";
import factRoutes from "./routes/facteRoutes.mjs";
import basicInfoRoutes from "./routes/basicInfoRoutes.mjs";
import accomodationRoutes from "./routes/accomodationRoutes.mjs";
// -----------------
const app = express();
dotenv.config();
//db connection
connectDB();
//midleware
// app.use(cors());
app.use(express.json({ extended: false }));

//-----------------defined routes
app.use("/api", destRoutes);
app.use("/api", factRoutes);
app.use("/api", basicInfoRoutes);
app.use("/api", accomodationRoutes);
//-----------------test-routes
app.use("/", (req, res) => {
  res.send("am server running at ");
});
//errorHandling middleware

//listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at port http://localhost:${PORT}`);
});
