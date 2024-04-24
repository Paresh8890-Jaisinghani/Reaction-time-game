const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const Reactionmodel = require('./models.js')


const app = express()
app.use(express.json())
app.use(cors())


try{
    mongoose.connect('mongodb://localhost:27017/test')  
}catch(err){
    console.log('Found error' + err)
}


app.post('',(req,res)=>{
Reactionmodel.create(req.body).then(score=>{
        res.json(score)
})
.catch(err=>res.json(err));
});

app.listen(3001,()=>{
    console.log("Server Running")
})

