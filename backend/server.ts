import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import { connectDB } from "./src/config/db";

connectDB();

app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});