const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const db = require("./db")

const userRouter = require("./routes/userRouter");
// const topics = require("./routes/topics");

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

module.exports = function application(
  ENV,
) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use("/api", userRouter(db));
  // app.use("/api", topics(db));

  app.get('/api', (req, res) => {
  // res.render('index');
  res.json({"users": ['user1', 'user2', 'user3'] })
  });

  if (ENV === "development" || ENV === "test") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/schema/${ENV}.sql`))
    ])
      .then(([create, seed]) => {
        console.log("Resolved create.sql path:", path.resolve(__dirname, `db/schema/create.sql`));
        console.log("Resolved seed.sql path:", path.resolve(__dirname, `db/schema/${ENV}.sql`));
       
        app.get("/api/debug/reset", (request, response) => {
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              console.log("Database Reset");
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch(error => {
        console.log(`Error setting up the reset route: ${error}`);
        response.status(500).send("Internal Server Error");
      });
  }


  app.close = function() {
    return db.end();
  };

  return app;
};
