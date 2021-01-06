const express = require("express");
const homeRouter = express.Router();

function router(navbar){
    homeRouter.get('/', (req,res)=>{
        res.render('home', {title: 'Library App', navbar, heading : 'Library'  } )
    });



return homeRouter;
}
module.exports = router;