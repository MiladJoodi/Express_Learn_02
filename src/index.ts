import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
const app = express();

app.use(cors());


// cors


// middleware
// const myMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   console.log("time: ", Date.now());
//   next();
// };

// app.use(myMiddleware);

app.get("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Hello world");
});

app.post("/users", (req:Request, res: Response)=>{
  console.log(req.body);
  res.send("hello world");
})

// app.get("/users", (req, res)=>{
//     const users = [
//         {name: "john", age: 20},
//         {name: "Smith", age: 27},
//         {name: "Eliza", age: 25}
//     ]
//     res.send(users)

// })

app.listen(3000, () => console.log("Server is running on port 3000"));
