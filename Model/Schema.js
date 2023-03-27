const mongoose = require('mongoose');



const Form =  mongoose.model('Form' , new mongoose.Schema(
    {
        Title: String,
        Date:{type: Date , default: Date.now},
        ispublished : Boolean ,
        Questions : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref:'Question'
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
                    ref:'Question'
                },
                Ans : {
                    type : String 
                }
            }          
        ],
        User:{
            type : mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    }
));

module.exports = {
    Form,
    Answer,
    Questions,
    Users
}










