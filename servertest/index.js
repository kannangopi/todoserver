const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
  user: "root",
  password: "password", 
  database:"todo"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


// app.get('/', (req,res)=>{
//     const sqlInsert = "INSERT INTO dolist (task) VALUES ('study');";
//     db.query(sqlInsert,(err,result)=>{
//         res.send("hello world")
//     })
   
// }) 

app.post("/api/insert",(req,res)=>{

    const dolist=req.body.dolist;
    console.log(req)

    const sqlInsert="INSERT INTO dolist (task) VALUES (?);"
    db.query(sqlInsert,[dolist],(err,result)=>{
        res.send(result);
    })
})
app.get("/api/disp",(req,res)=>{
    
const sqlselect = "SELECT * FROM dolist;";
db.query(sqlselect,(err,result)=>{
    res.send(result);
})
})
app.post("/api/del",(req,res)=>{
    const id=req.body.id;
    const delQery= "DELETE FROM dolist WHERE ID=?;"
    db.query(delQery,[id])
})

app.listen(3011,()=>{
    console.log("server running");
});