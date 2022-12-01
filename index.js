const express = require('express');
const cors = require("cors");
const mysql=require("mysql2");
const { Sequelize, DataTypes } = require("sequelize");
const bodyParser=require('body-parser');





const app = express();


const port = process.env.PORT || 8000;
var corsOptions = {
    origin: "http://localhost:8000"
  };
//   const sequelize = new Sequelize(
//     'mtest',
//     'root',
//     '',
//      {
//        host: 'localhost',
//        dialect: 'mysql'
//      }
//    );
 
//  sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
//  }).catch((error) => {
//     console.error('Unable to connect to the database: ', error);
//  });
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'mtest',
//   })
//   db.connect(function (err) {
//     if (err) {
//       return console.error('error: ' + err.message)
//     }
//     console.log('Database connected.')
//   })

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use("/title", titleRoute);
// app.use("/name",nameRoute);
const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// app.get('/', (req, res) => {
//   res.send('Welcome to Mtest');
// });
require("./routes/name")(app);
require("./routes/title")(app);


app.listen(port, () => {
  console.log(`Mtest listening at http://localhost:${port}`);
});

