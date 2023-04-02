// const mongoose = require("mongoose");
// const { Questions, Users, Answer } = require("./Model/Schema");
// mongoose
//   .connect(
//     "mongodb://127.0.0.1:27017/Test2"
//   )
//   .then(() => console.log("Connecting to DB....."))
//   .catch((e) => console.error("Could not to connect to mongoDB...", e));
// require("./Model/Schema");


// async function SaveQuestion(Content, Type) {
//   const Question = new Questions({
//     Content,
//     Type,
//   });

//   await Question.save();
// }

// SaveQuestion('How old are you' , ' Text');

// async function CreateUser(Name, Email, phonenumber) {
//   const User = new Users({
//     Name,
//     phonenumber,
//     Email,
//   });

//   await User.save();
// }

// CreateUser('Ahmed' , 'Ahmed@gmail.com' , '011254554');


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

// let ans = [ {Ques :'64219ab86bae9fd68c8f3a82' , Ans :'25'}];
// CreateAnswer(ans , '64219b2527e32629feecc7d2');
