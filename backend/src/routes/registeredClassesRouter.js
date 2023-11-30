const express = require("express");
const registeredClassesRouter = express.Router();

module.exports = (db) => {
  // Get all registered classes
  registeredClassesRouter.get("/registered-classes", async (req, res) => {
    try {
      const registeredClasses = await db.query("SELECT * FROM REGISTERED_CLASSES");
      res.json(registeredClasses.rows);
    } catch (error) {
      console.error("Error getting registered classes:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Register a user for a yoga class
  registeredClassesRouter.post("/registered-classes", async (req, res) => {
    const { userId, yogaClassId, isPaid } = req.body;
    try {
      const newRegistration = await db.query(
        'INSERT INTO REGISTERED_CLASSES (USER_ID, YOGA_CLASS_ID, IS_PAID) VALUES ($1, $2, $3) RETURNING *',
        [userId, yogaClassId, isPaid]
      );
      res.json(newRegistration.rows[0]);
    } catch (error) {
      console.error("Error registering user for class:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Update registration details (e.g., payment status)
  registeredClassesRouter.put("/registered-classes/:registrationId", async (req, res) => {
    const registrationId = req.params.registrationId;
    const { isPaid } = req.body;
    try {
      const updatedRegistration = await db.query(
        'UPDATE REGISTERED_CLASSES SET IS_PAID = $1 WHERE ID = $2 RETURNING *',
        [isPaid, registrationId]
      );
      res.json(updatedRegistration.rows[0]);
    } catch (error) {
      console.error("Error updating registration:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Unregister a user from a class
  registeredClassesRouter.delete("/registered-classes/:registrationId", async (req, res) => {
    const registrationId = req.params.registrationId;
    try {
      await db.query('DELETE FROM REGISTERED_CLASSES WHERE ID = $1', [registrationId]);
      res.json({ message: "Registration deleted successfully" });
    } catch (error) {
      console.error("Error deleting registration:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return registeredClassesRouter;
};
