import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./src/config/db";


dotenv.config();
connectDB();

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});