//======================================Connection=============================================//
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Medisafe", {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.on("error", function() {
  console.log("Mongoose connection failed!");
  console.log("____________________________________________________");
});

db.once("open", function() {
  console.log("Mongoose connection initiated successfully!");
  console.log("____________________________________________________");
});

//========================================User Schema===============================================//
let userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
  gender: String,
  measurement: [{ bloodsugar: Number, date: Date, status: String }],
  medication: [{ medname: String, datetime: Date }],
  note: [{ description: String, date: { type: Date, default: Date.now } }]
});

let Users = mongoose.model("users", userSchema);
//=========================================DELETE=================================================//

// let deleteMid = (cb, ID) => {
//   // console.log("GET Data FROM DATABASE");
//   console.log('objjjjjjjjjjjjjjj :', ID);
//   // console.log('obj.idddddd :', obj.id);
//   // Users.deleteOne({ _id: ID }, function(err, docs) {
//   //   if (err) {
//   //     console.log("ERR:", err);
//   //   }
//   //   console.log("DOCS:", docs);
//   //   cb(docs);
//   // });
// };

//=========================================GET=================================================//
let getDate = (callBack, obj) => {
  console.log("GET Data FROM DATABASE");
  Users.findOne({ _id: obj.id }, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS:", docs);
    callBack(docs);
  });
};

let getUser = (cb, object) => {
  // console.log("From Server", object.email);
  Users.findOne({ email: object.email, password: object.password }, function(
    err,
    docs
  ) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS FIND ONE:", docs);
    cb(docs);
  });
};

let registUser = (cb, obj) => {
  Users.insertMany(
    [
      {
        username: obj.username,
        email: obj.email,
        password: obj.password,
        age: obj.age,
        gender: obj.gender
      }
    ],
    function(err, newUser) {
      if (err) {
        console.log("err", err);
      }
      console.log("newUser:", newUser);
      cb(newUser);
    }
  );
};

let getMedic = (cb, box) => {
  console.log("boxxxxxx :", box.id);
  Users.findOne({ _id: box.id }, function(err, docsFind) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("docsFindddddddd :", docsFind);
    let date = Date.parse(box.datetime);
    // let time = Date.parse(box.time);

    // console.log(typeof date);
    let y = {
      medname: box.medname,
      datetime: date
    };
    // delete box.id
    // console.log("JSON PARSE: ", JSON.stringify(y))
    docsFind.medication.push(y);
    docsFind.save(function(err, docsSave) {
      if (err) {
        console.log("ERR:", err);
      }
      cb(docsSave);
    });
  });
};

//=====================================MODULE EXPORTS=============================================//
module.exports = {
  getDate,
  registUser,
  getUser,
  getMedic,
  // deleteMid
};
