import express from "express";
import cors from "cors";
import "./loadEnv.mjs";
import "express-async-errors";
import records from "./routes/prospero.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /records routes
app.use("/prospero", records);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send(err.message)
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});