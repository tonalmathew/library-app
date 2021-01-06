const express = require("express");
const addBookRouter = express.Router();

function router(navbar){
    addBookRouter.get('/', (req,res)=>{
        res.render('addbooks', {title: 'Library App', navbar, heading : 'Library'  } )
    });



return addBookRouter;
}
module.exports = router;