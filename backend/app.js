import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from "cors";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);

// confections
mongoose
  .connect(
    `mongodb+srv://emonkhan2233445:${process.env.MONGODB_PASSWORD}@cluster0.fmao7ba.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(app.listen(PORT, () => console.log(`App is listening to port ${PORT}`)))
  .catch((err) => console.error(err));
