const router = require("express").Router();

module.exports = db => {
  router.get("/registered-classes", (request, response) => {
    db.query(`
      SELECT 
        "USER".FULLNAME as user_name,
        "USER".EMAIL as user_email,
        YOGA_CLASS_INFO.CLASS_NAME as class_name,
        YOGA_CLASS_INFO.PRICE as class_price,
        YOGA_CLASS_INFO.DETAILS as class_details,
        YOGA_CLASS_INFO.DURATION as class_duration,
        YOGA_CLASSES.CLASS_DAY as class_day,
        YOGA_CLASSES.START_TIME as class_start_time,
        REGISTERED_CLASSES.IS_PAID as is_paid
      FROM REGISTERED_CLASSES
      INNER JOIN "USER" ON REGISTERED_CLASSES.USER_ID = "USER".ID
      INNER JOIN YOGA_CLASSES ON REGISTERED_CLASSES.YOGA_CLASS_ID = YOGA_CLASSES.ID
      INNER JOIN YOGA_CLASS_INFO ON YOGA_CLASSES.YOGA_CLASS_INFO_ID = YOGA_CLASS_INFO.ID
    `).then(({ rows }) => {
      response.json(rows);
    });
  });

  return router;
};
