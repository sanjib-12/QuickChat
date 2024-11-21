const mongoose = require('mongoose');

//Connection logic
mongoose.connect(process.env.CONN_STRING);

//Connection state
const db = mongoose.connection;

//check db connection
db.on('connected', ()=>{
   console.log('DB Connection Successful!');
})

db.on('err',()=>{
   console.log('DB Connection Failed!');
})

module.exports = db;
