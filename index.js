const express=require("express");
const app=express()

app.get("/api/customers",(req,res)=>{
    var customers=[
    {id:1,first:"John",last:"Smith"},
    {id:2,first:"Sam",last:"White"},
    {id:3,first:"Todd",last:"Black"},
    ];
    res.json(customers)
})



//we use 5000 here instead of 3000, because react default use port 3000.

const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log("listening on port "+ port)
})