
app.delete('/api/people/:id',(req,res)=>{
    
    const person = people.find((person)=>person.id===Number(req.params.id))
    if(!person){
        return res
        .status(404)
        .json({success:false,msg:`no person with id ${req.params.id}`})
    } else {
    const newPeople = people.filter(
        (person)=> person.id !== Number(req.params.id)
        )
    return res.status(200).json({success:true, data:newPeople})
    }
})

