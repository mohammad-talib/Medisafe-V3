const express = require("express");
const cors = require("cors");
const DB = require("./database");
const app = express();
//==============================================================================================//

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
//==============================================================================================//

app.get("/", (req, res) => {
  res.json("server is working");
});

//=======================================GET DATA===============================================//
app.post("/showdata", (req, res) => {
  let box = req.body;
  console.log('IDDDDDDDDDD :', box);
  DB.getDate(result => {
    console.log("CALL BACK FROM SERVER");
    res.json(result);
  }, box);
});


//===================================GET DATA BY ID==============================================//

// app.delete("/delete/:id", (req, res) => {
//   DB.deleteMid(result => res.json(result), req.params.id);
//   // console.log('req.params.iddddddd :', req.params.id);
// });

//=======================================ADD DATA===============================================//
app.post("/registration", (req, res) => {
  let box = req.body;
  console.log("box", box);
  DB.registUser(x => {
    console.log("registration in server");
    res.json(x);
  }, box);
});

app.post("/login", (req, res) => {
  let object = req.body;
  DB.getUser(repo => {
    res.json(repo);
  }, object);
});

app.post("/medication", (req, res) => {
  let object = req.body;
  console.log('objectttttttttttttttt :', object);
  DB.getMedic(repo => {
    res.json(repo);
  }, object);
});


// app.post("/addPlace", (req, res) => {
//   let inputs=req.body;
//   console.log("BODY:", inputs);
//   DB.addPlace(result => {
//     console.log("CALL BACK FROM SERVER");
//     res.json(result);
//   }, inputs);
// });

// app.post("/addData", (req, res) => {
//   let inputs=req.body;
//   console.log("BODY:", inputs);
//   DB.addForm(result => {
//     console.log("CALL BACK FROM SERVER");
//     res.json(result);
//   }, inputs);
// });


//===================================PORT LISTENING=============================================//
const PORT =2000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
