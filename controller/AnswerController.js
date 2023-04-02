const { Answer, Users } = require("../Model/Schema");
const Joi = require('joi');

const  answerFromUser = async (req , res) =>
  {
    
    const user = await Users.findOne({Email:req.body.Email});
    if(!user) res.status(400).send("doesn't Found");
    const answer = await Answer.findOne({User:user.id})
    .populate("User" , "Name -_id")
    .populate("Content.Ques" , "Content Type -_id")
    .populate("Content.Ans" , "Ans")
    .select("-_id Content.-_id ")
    .then()
    .catch((err) => {console.log(err);});

    await res.send(answer);  
  };

  const addAnswer = async (req , res) => {
    const answer =  new Answer({});
    await answer.save();
    await answer.update({$set:{
        Content:req.body.Content
    } ,
$push:{
    User:req.body._id
}});

await res.send("Your Answer are submitted");

  };


  module.exports={
    answerFromUser,
    addAnswer
  }