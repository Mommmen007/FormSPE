const express = require('express');
const router = express.Router();
const Schema = require('../controller/FormController')
const Answer = require('../controller/AnswerController')


// PATH start with '/form'

router.get("/", Schema.form_index_get);

router.post("/after-submit", Schema.answer_post);

router.get("/getAnswerUser", Answer.answerFromUser );

router.post("/addanswer" , Answer.addAnswer);


  
module.exports = router;  
