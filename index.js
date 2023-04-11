const express = require('express');
const userRouter = require('./routers/user.routers')
const PORT = process.env.PORT || 5000;
const app = express();

const start = () =>{
    try{
        app.use(express.json());
        app.use('/', userRouter);
        app.listen(PORT, () => {
            console.log("server is going on PORT ", PORT);
        })
    }catch(e){
        console.log(e);
    }
}

start();