const express = require("express");
const signupRouter = express.Router();

function router(indexNav){
    signupRouter.get('/', (req,res)=>{
        res.render('signup', {title: 'Library App', indexNav, heading : 'Library'  } )
    });



return signupRouter;
}
module.exports = router;