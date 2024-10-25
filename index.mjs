import express from "express";
import dotenv from "dotenv";
import connectDB from "./conn/db.mjs";
import destRoutes from "./routes/destRoutes.mjs";
import factRoutes from "./routes/facteRoutes.mjs";
import basicInfoRoutes from "./routes/basicInfoRoutes.mjs";
import accomodationRoutes from "./routes/accomodationRoutes.mjs";
import usersRoutes from "./routes/api/users.mjs";
import authRoutes from "./routes/api/auth.mjs";
import cors from "cors";
import aboutRoutes from "./routes/aboutEthiopiaRoutes.mjs";
import thingstodoRoutes from "./routes/thingsTodo.mjs";
// -----------------
const app = express();
dotenv.config();
//db connection
connectDB();
//midleware
app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

//-----------------defined routes
app.use("/api", destRoutes);
app.use("/api", factRoutes);
app.use("/api", basicInfoRoutes);
app.use("/api", accomodationRoutes);
app.use("/api", aboutRoutes);
app.use("/api", thingstodoRoutes);
// user registration and login authentication routes
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
//-----------------test-routes
// app.use("/", (req, res) => {
//   res.send("am server running at ");
// });
//errorHandling middleware

//listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at port http://localhost:${PORT}`);
});
