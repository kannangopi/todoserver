const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "god",
  password: "Password@1",
  database: "test",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req,res)=>{
//     const sqlInsert = "INSERT INTO dolist (task) VALUES ('study');";
//     db.query(sqlInsert,(err,result)=>{
//         res.send("hello world")
//     })

// })

app.post("/api/insert", (req, res) => {
  const dolist = req.body.dolist;
  // console.log(req);

  const sqlInsert = "INSERT INTO todo (do) VALUES (?);";
  db.query(sqlInsert, [dolist], (err, result) => {
    if (result) {
      res.send(true);
    } else console.log(err);
  });
});
app.get("/api/disp", (req, res) => {
  const sqlselect = "SELECT * FROM todo;";
  db.query(sqlselect, (err, result) => {
    if (result) {
      console.log(result);
      res.send(result);
    }
  });
});
app.post("/api/del", (req, res) => {
  const id = req.body.id;
  const delQery = "DELETE FROM todo WHERE ID=?;";
  db.query(delQery, [id], (err, result) => {
    if (err) res.send(err);
    else {
      console.log(result);
      // res.send(result);
      res.send(true);
    }
  });
});

app.listen(3011, () => {
  console.log("server running");
});

module.exports = app;
