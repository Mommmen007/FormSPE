const express = require('express');
const router = express.Router();
const Schema = require('../controller/FormController')

// PATH start with '/form'

router.get("/", Schema.form_index_get);

router.post("/after-submit", Schema.answer_post);
  
module.exports = router;  
