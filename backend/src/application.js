const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const db = require("./db")

const usersRouter = require("./routes/usersRouter");
const yogaClassesRouter = require("./routes/yogaClassesRouter");
const yogaClassInfoRoute = require("./routes/yogaClassInfoRoute");
const registeredClassesRouter = require("./routes/registeredClassesRouter");



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
  // app.use(express.static(path.join(__dirname, 'public')));

  //mount routers
  app.use("/api", usersRouter(db));
  app.use("/api", yogaClassesRouter(db));
  app.use("/api", yogaClassInfoRoute(db));
  app.use("/api", registeredClassesRouter(db));


  // test data
  app.get("/api", (req, res) => {
    res.json({"users": ['user1', 'user2', 'user3'] })
  });

  //initialize tables
  if (ENV === "development" || ENV === "test") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/schema/${ENV}.sql`))
    ])
      .then(([create, seed]) => {
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
      });
  }

  app.close = function() {
    return db.end();
  };

  return app;
};
