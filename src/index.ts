const express = require('express');
const app = express();
import { Request, Response } from "express";

app.get("/", (req: Request, res:Response)=>{
    res.send("Hello world")
})

app.get("/users", (req, res)=>{
    const users = [
        {name: "john", age: 20},
        {name: "Smith", age: 27},
        {name: "Eliza", age: 25}
    ]
    res.send(users)

})

app.listen(3000, ()=>(
    console.log("Server is running on port 3000")
))