module.exports = app => {
    var router = require("express").Router();
    const names = require('../controller/api.js');
  
 
  
    
   
  
    
    router.get("/", names.findAll);
  
  
   
  
    app.use('/api/names', router);
  };
