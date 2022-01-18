const express = require('express');
const app = express();

let {people} = require('./data');

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended:false}))

// parse json
app.use(express.json())

app.put('/api/people/:id', (req, res)=>{
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((person)=>person.id===Number(id))
    if(!person){
        return res
        .status(404)
        .json({success:false,msg:`no person with id ${id}`})
    } else {
        const newPeople = people.map((person)=>{
            if(person.id === Number(id)){
                person.name = name
            }
            return person
        })
        res.status(200).json({success:true, data:newPeople})
    }
})


app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})