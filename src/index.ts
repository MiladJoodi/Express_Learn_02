import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import usersControllers from "./users/usersControllers";


const app = express();

// cors
app.use(cors());
app.use(express.json());



// middleware
// const myMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   console.log("time: ", Date.now());
//   next();
// };

// app.use(myMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.use("/users", usersControllers)



// app.get("/users", (req, res)=>{
//     const users = [
//         {name: "john", age: 20},
//         {name: "Smith", age: 27},
//         {name: "Eliza", age: 25}
//     ]
//     res.send(users)

// })

app.listen(3000, () => console.log("Server is running on port 3000"));
