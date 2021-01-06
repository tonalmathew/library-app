const express = require("express");
const addauthRouter = express.Router();

function router(navbar){
    addauthRouter.get('/', (req,res)=>{
        res.render('addauthors', {title: 'Library App', navbar, heading : 'Library'  } )
    });



return addauthRouter;
}
module.exports = router;