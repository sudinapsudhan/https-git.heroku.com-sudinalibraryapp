const express = require('express');
const addRouter = express.Router();
function router(nav){
addRouter.get('/',function(req,res){
    res.render("addbook",{
        
        nav,
        title:'Library' ,
       
    });
});
return addRouter;
}
module.exports = router;