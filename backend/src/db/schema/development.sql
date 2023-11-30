-- Sample data for "USER" table
INSERT INTO USER_ACCOUNT (FULLNAME, EMAIL, USER_PASSWORD) VALUES
  ('John Doe', 'john.doe@example.com', '123'),
  ('Jane Smith', 'jane.smith@example.com', '123'),
  ('Saima Guillot', 'sg@example.com', '123'),
  ('Milanka Bouchard', 'mb@example.com', '123'),
  ('Petronel MacClelland', 'pm@example.com', '123'),
  ('Marc Hovhannisyan', 'mh@example.com', '123'),
  ('Kaitlyn Schlimme', 'ks@example.com', '123'),
  ('Bjartur Karlsson', 'bk@example.com', '123'),
  ('Alice Johnson', 'alice.johnson@example.com', '123');

-- Sample data for YOGA_CLASS_INFO table
INSERT INTO YOGA_CLASS_INFO (CLASS_NAME, PRICE, DETAILS, DURATION, MAX_CAPACITY) VALUES
  ('Hatha Yoga', '60', 'Beginner-friendly yoga class', '60 minutes', 20),
  ('Vinyasa Flow', '60', 'Dynamic and flowing yoga', '75 minutes', 20),
  ('Yin Yoga', '60', 'Slow-paced and relaxing yoga', '90 minutes', 20);

-- Sample data for YOGA_CLASSES table
INSERT INTO YOGA_CLASSES (YOGA_CLASS_INFO_ID, CLASS_DAY, START_TIME, IS_MAX_CAPACITY) VALUES
  (1, 'Monday', '15:00', FALSE),
  (2, 'Tuesday', '15:00', FALSE),
  (3, 'Wednesday', '15:00', TRUE),
  (1, 'Thursday', '15:00', FALSE),
  (2, 'Friday', '15:00', FALSE),
  (3, 'Saturday', '15:00', TRUE),
  (1, 'Sunday', '15:00', TRUE);

-- Sample data for REGISTERED_CLASSES table
INSERT INTO REGISTERED_CLASSES (USER_ID, YOGA_CLASS_ID, IS_PAID) VALUES
  (1, 1, FALSE),
  (2, 2, FALSE),
  (3, 3, TRUE),
  (4, 1, TRUE),
  (5, 2, FALSE),
  (6, 3, TRUE),
  (7, 1, TRUE),
  (8, 2, FALSE),
  (9, 3, TRUE);