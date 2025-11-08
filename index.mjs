import express from "express";
import cors from "cors";
import "./loadEnv.mjs";
import "express-async-errors";
import records from "./routes/prospero.mjs";
import path from 'node:path';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send(err.message)
})

// Connect frontend app
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });

// Load the /records routes
app.use("/prospero", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});