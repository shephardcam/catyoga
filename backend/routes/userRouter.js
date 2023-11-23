const router = require("express").Router();

module.exports = (db) => {
  // Get all users
  router.get("/users", async (req, res) => {
    try {
      const users = await db.query("SELECT * FROM USER_ACCOUNT");
      res.json(users.rows);
    } catch (error) {
      console.error("Error getting users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Get all yoga classes
  router.get("/yoga-classes", async (req, res) => {
    try {
      const yogaClasses = await db.query("SELECT * FROM YOGA_CLASSES");
      res.json(yogaClasses.rows);
    } catch (error) {
      console.error("Error getting yoga classes:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Add a new user
  router.post("/users", async (req, res) => {
    const { fullname, email, password } = req.body;
    try {
      const newUser = await db.query(
        'INSERT INTO USER_ACCOUNT (FULLNAME, EMAIL, USER_PASSWORD) VALUES ($1, $2, $3) RETURNING *',
        [fullname, email, password]
      );
      res.json(newUser.rows[0]);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Add a new yoga class
  router.post("/yoga-classes", async (req, res) => {
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

  // Update user information
  router.put("/users/:userId", async (req, res) => {
    const userId = req.params.userId;
    const { fullname, email, password } = req.body;
    try {
      const updatedUser = await db.query(
        'UPDATE USER_ACCOUNT SET FULLNAME = $1, EMAIL = $2, USER_PASSWORD = $3 WHERE ID = $4 RETURNING *',
        [fullname, email, password, userId]
      );
      res.json(updatedUser.rows[0]);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Delete user
  router.delete("/users/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
      await db.query('DELETE FROM USER_ACCOUNT WHERE ID = $1', [userId]);
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Add more routes for other CRUD operations

  return router;
};
