const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(express.static('public'));
app.use(cors());

const db = mysql.createConnection({
host : process.env.DB_HOST,
user : process.env.DB_USER,
password : process.env.DB_PASSWORD,
database : process.env.DB_DATABASE,
port : process.env.DB_PORT || 3306,
   
});
app.get('/burgers',(req,res)=>{
const sql = "SELECT * FROM burger";
db.query(sql,(err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
})

})











const port = process.env.PORT || 5000;
app.listen(port,()=>{console.log(`server is running on port ${port}`)});






