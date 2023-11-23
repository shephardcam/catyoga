-- Sample data for "USER" table
INSERT INTO "USER" (FULLNAME, EMAIL, USER_PASSWORD) VALUES
  ('John Doe', 'john.doe@example.com', '123'),
  ('Jane Smith', 'jane.smith@example.com', '123'),
  ('Alice Johnson', 'alice.johnson@example.com', '123');

-- Sample data for YOGA_CLASS_INFO table
INSERT INTO YOGA_CLASS_INFO (CLASS_NAME, PRICE, DETAILS, DURATION, MAX_CAPACITY) VALUES
  ('Hatha Yoga', '20', 'Beginner-friendly yoga class', '60 minutes', 20),
  ('Vinyasa Flow', '25', 'Dynamic and flowing yoga', '75 minutes', 15),
  ('Yin Yoga', '18', 'Slow-paced and relaxing yoga', '90 minutes', 25);

-- Sample data for YOGA_CLASSES table
INSERT INTO YOGA_CLASSES (YOGA_CLASS_INFO_ID, CLASS_DAY, START_TIME, IS_MAX_CAPACITY) VALUES
  (1, 'Monday', '18:00', FALSE),
  (2, 'Wednesday', '19:30', TRUE),
  (3, 'Friday', '17:00', FALSE);

-- Sample data for REGISTERED_CLASSES table
INSERT INTO REGISTERED_CLASSES (USER_ID, YOGA_CLASS_ID, IS_PAID) VALUES
  (1, 1, TRUE),
  (2, 2, FALSE),
  (3, 3, TRUE);