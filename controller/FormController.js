const { Answer, Questions } = require("../Model/Schema");

 require("../Model/Schema");   /// TO IMPORT Schema & Models



const form_index_get = (req, res) => {
    
    Schema.Form.find()
      .then((result) => {
        res.render("index", { mytitle: "Apply Form"});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const answer_post = (req, res) => {
    const answer = new Schema(req.body);
  
    console.log(req.body);
  
    answer
      .save()
      .then((result) => {
        res.json({ message: "success" });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  

  
      
      
  

  

module.exports = {
  form_index_get,
  answer_post, 
};
