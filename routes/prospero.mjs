import express from "express";
import * as dbMethods from "../db/database.mjs"

const router = express.Router();

// Get a user
router.post("/user-login", async (req, res) => {
  let user = await dbMethods.getUser(req.body.email, req.body.password);
  return res.status(200).json({
        success: true,
        message: "user fetched successfully",
        user: user
    });
});

// Create a user
router.post("/user-sign-up", async (req, res) => {
  let user = await dbMethods.CreateUser(
    req.body.username,
    req.body.email,
    req.body.password
  );
  
  console.log('User object:', user);

  return res.status(200).json({
        success: true,
        message: "user created successfully",
        user: user.id
    });
});

//Create an event
router.post("/event-create", async(req, res) => {
  let event = await dbMethods.CreateEvent(
    req.body.title,
    req.body.rating,
    req.body.colour,
    req.body.notes,
    req.body.userId,
    req.body.date
  );
  return res.status(200).json({
        success: true,
        message: "event created successfully",
        event: event
    });
});

//Get all events by userId
router.get("user/:id/events", async(req, res) => {
  let events = await dbMethods.getEventsByUser(
    req.params.id
  );
  return res.status(200).json({
        success: true,
        message: "events fetched successfully",
        events: events
    });
});

//Get all events by month
router.get("month/events", async(req, res) => {
  let events = await dbMethods.getEventsByMonth(
    req.body.startDate,
    req.body.userId
  );
  return res.status(200).json({
        success: true,
        message: "events fetched successfully",
        events: events
    });
});

//Get all events by date
router.get("date/events", async(req,res) => {
  let events = await dbMethods.getEventsByDate(
    req.body.date,
    req.body.userId
  );
  return res.status(200).json({
        success: true,
        message: "events fetched successfully",
        events: events
    });
});

//Test route
router.get("/test",async (req, res) => {
    res.send("Here is a working endpoint").status(201);
});

export default router;