module.exports = app => {
    var router = require("express").Router();
    const titles = require('../controller/title.js');
  
 
  
    
   
  
    
    router.get("/", titles.findAll);
  
  
   
  
    app.use('/api/titles', router);
  };
