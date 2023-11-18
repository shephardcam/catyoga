-- Inserting data into "USER" table
INSERT INTO "USER" (FULLNAME, EMAIL, USER_PASSWORD) VALUES
('John Doe', 'john.doe@example.com', 'password123'),
('Jane Smith', 'jane.smith@example.com', 'pass456'),
-- Add more users as needed.

-- Inserting data into YOGA_CLASS_INFO table
INSERT INTO YOGA_CLASS_INFO (CLASS_NAME, PRICE, DETAILS, DURATION, MAX_CAPACITY) VALUES
('Hatha Yoga', '20.00', 'Gentle yoga for all levels', '60 minutes', 20),
('Vinyasa Flow', '25.00', 'Dynamic and flowing yoga', '75 minutes', 15),
-- Add more yoga class info as needed.

-- Inserting data into YOGA_CLASSES table
INSERT INTO YOGA_CLASSES (YOGA_CLASS_INFO_ID, CLASS_DAY, START_TIME, IS_MAX_CAPACITY) VALUES
(1, 'Monday', '10:00 AM', FALSE),
(2, 'Wednesday', '18:30 PM', TRUE),
-- Add more yoga classes as needed.

-- Inserting data into REGISTERED_CLASSES table
INSERT INTO REGISTERED_CLASSES (USER_ID, YOGA_CLASS_ID, IS_PAID) VALUES
(1, 1, TRUE),
(2, 2, FALSE);
-- Add more registrations as needed.
