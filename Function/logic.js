let main_func={
    home:async function(req,res,next){
        res.send("Welcome to home page");
        res.end();
    }
}

module.exports=main_func;