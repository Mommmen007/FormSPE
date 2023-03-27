//  to controll ur website

const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");

// mongoooose
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/FormDB"
  )
  .then(() => console.log("Connecting to DB....."))
  .catch((e) => console.error("Could not to connect to mongoDB...", e));
require("./Model/Schema");



const formRoute = require('./routes/form');
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/form" , formRoute);
app.listen(port,()=> {console.log("listen to port............")})







  

 


  



  ////////////////////////////////////////////////////////////////////////////////////////////////////////

// async function saveForm(Title, ispublished) {
//   let form = new Form({
//     Title,
//     ispublished,
//   });

//   //form.update({ $push: { Questions: Question._id } });
//   await form.save();
// }

// async function SaveQuestion(Content, Type) {
//   const Question = new Questions({
//     Content,
//     Type,
//   });

//   await Question.save();
// }

// async function addQuestion(Formid, ques) {
//   await Form.findByIdAndUpdate(Formid, { $push: { Questions: ques } });
// }

// async function CreateUser(Name, Email, phonenumber) {
//   const User = new Users({
//     Name,
//     phonenumber,
//     Email,
//   });

//   await User.save();
// }

// async function addFormToUser(userid, formid) {
//   await Users.findByIdAndUpdate(userid, {
//     $push: { Form: formid },
//   });
// }

// async function CreateAnswer(content, userid) {
//   const answer = new Answer({});

//   await answer.save();

//   await answer.update({
//     $set: {
//       Content: content,
//     },
//     $push: {
//       User: userid,
//     },
//   });
// }
//let ans = [{Ques :'640ddee21a76f9319f69e195' , Ans :'25'} , {Ques :'640ddee21a76f9319f69e195' , Ans :'25'} , {Ques :'640ddee21a76f9319f69e195' , Ans :'25'}];

// ans.forEach(element => {
//     console.log(element);

// });

//CreateAnswer(ans , '640dfe2c9e6f2858fa643e6c');
//CreateAnswer("germany1966", "64109e067ec78c137aa8203d")

// CreateUser('Ahmed' , 'Ahmed@gmail.com' , '011254554');
// CreateUser('kok' , 'kimmmmmm@y.com' , '9111125');
// CreateUser('hh' , 'uiu@y.com' , '8789');
//CreateUser('abdo' , 'abdo@y.com' , '0008456');

//addFormToUser('640dfe2c9e6f2858fa643e6c',['640ddf11cea07e55efd886fc']);
//addFormToUser("64109e067ec78c137aa8203e", "6410ab7fd768edbfa37c8849");
//addFormToUser("64109e067ec78c137aa8203e", "64109e067ec78c137aa82040");


//addQuestion('form' , ['qid' , '640ddee21a76f9319f69e194']);
//addQuestion("6410ab7fd768edbfa37c8849", ["qid", "6410a372358376e0e2b0c04f" ] )    

//SaveQuestion('How R YA' , 'TextQ');
//SaveQuestion('How old are you' , ' Text');

//saveForm("Application hirring Devs" , false );
