const express = require("express");
const yogaClassInfoRouter = express.Router();

module.exports = (db) => {
  // GET all yoga class information
  yogaClassInfoRouter.get("/yoga-class-info", async (req, res) => {
    try {
      const yogaClassInfo = await db.query("SELECT * FROM YOGA_CLASS_INFO");
      res.json(yogaClassInfo.rows);
    } catch (error) {
      console.error("Error getting yoga class info:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // POST a new yoga class information
  yogaClassInfoRouter.post("/yoga-class-info", async (req, res) => {
    const { className, price, details, duration, maxCapacity } = req.body;
    try {
      const newClassInfo = await db.query(
        'INSERT INTO YOGA_CLASS_INFO (CLASS_NAME, PRICE, DETAILS, DURATION, MAX_CAPACITY) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [className, price, details, duration, maxCapacity]
      );
      res.json(newClassInfo.rows[0]);
    } catch (error) {
      console.error("Error creating yoga class info:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Add more routes for yoga class info CRUD operations

  return yogaClassInfoRouter;
};
