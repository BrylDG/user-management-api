import express from "express";
import { userRouter } from "./routes/user.routes";
import { AppDataSource } from "./data-source";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
AppDataSource.initialize().then(() => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
