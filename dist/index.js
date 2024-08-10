"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
// middleware
const myMiddleware = ((req, res, next) => {
    console.log("time: ", Date.now());
    next();
});
app.use(myMiddleware);
app.get("/", (req, res) => {
    console.log(req.body);
    res.send("Hello world");
});
// app.get("/users", (req, res)=>{
//     const users = [
//         {name: "john", age: 20},
//         {name: "Smith", age: 27},
//         {name: "Eliza", age: 25}
//     ]
//     res.send(users)
// })
app.listen(3000, () => (console.log("Server is running on port 3000")));
