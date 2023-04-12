const { Questions, Form } = require("../Model/Schema");




const CreateQuestion = async (req , res) => {
    let queid = [] ;
     req.body.Ques.forEach(async element => {
        const Ques = new Questions(
            {
                Content : element.Content ,
                Type:element.Type 
            }
        );
        Ques.save();
        await queid.push(Ques._id);
    });

    const form = new Form(
        {
            Title:req.body.form.Title ,
            ispublished : true ,
            Questions : queid
        }
    );
    await form.save();

    await res.send("Your Form");
}

module.exports = {
    CreateQuestion
}