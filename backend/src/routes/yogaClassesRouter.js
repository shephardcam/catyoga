const express = require("express");
const yogaClassesRouter = express.Router();

module.exports = (db) => {
  yogaClassesRouter.get("/yoga-classes", async (req, res) => {
    try {
      const yogaClasses = await db.query("SELECT * FROM YOGA_CLASSES");
      res.json(yogaClasses.rows);
    } catch (error) {
      console.error("Error getting yoga classes:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  yogaClassesRouter.post("/yoga-classes", async (req, res) => {
    const { classInfoId, classDay, startTime, isMaxCapacity } = req.body;
    try {
      const newClass = await db.query(
        'INSERT INTO YOGA_CLASSES (YOGA_CLASS_INFO_ID, CLASS_DAY, START_TIME, IS_MAX_CAPACITY) VALUES ($1, $2, $3, $4) RETURNING *',
        [classInfoId, classDay, startTime, isMaxCapacity]
      );
      res.json(newClass.rows[0]);
    } catch (error) {
      console.error("Error creating yoga class:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });



  return yogaClassesRouter;
};
