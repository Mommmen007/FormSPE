const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Form =  mongoose.model('Form' , new mongoose.Schema(
    {
        Title: String,
        Date:{type: Date , default: Date.now},
        ispublished : Boolean ,
        Questions : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref:'Questions'
            }
        ]
    }
));

const Questions = mongoose.model('Question' , new mongoose.Schema(
    {
        Date:{type: Date , default: Date.now},
        Content : String,
        Type: String  
    }
));

const Users = mongoose.model('User', new mongoose.Schema({
    Name:String,
    Email: String,
    phonenumber:String,
    Form:[{
        type : mongoose.Schema.Types.ObjectId,
        ref:'Form'
    }]
}));

const Answer = mongoose.model('Answer' , new mongoose.Schema(
    {
        Date:{type: Date , default: Date.now},
        Content : [          
                {
                Ques : {
                    type : mongoose.Schema.Types.ObjectId,
                    ref:'Questions'
                },
                Ans : {
                    type : String 
                }
            }          
        ],
        User:{
            type : mongoose.Schema.Types.ObjectId,
            ref:'Users'
        }
    }
));

module.exports = {
    Form,
    Answer,
    Questions,
    Users
}










