const express = require('express');
const app = express();

let {people} = require('./data');

// static assets
app.use(express.static('./methods-public'))

// parse json
app.use(express.json())

app.post('/api/people',(req, res)=>{
    const {name}=req.body;
    if(!name){
        res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true,person:name});
})



app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})