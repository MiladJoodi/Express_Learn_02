import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
const app = express();

// cors
app.use(cors());

app.use(express.json());

const AuthMiddleware = (req: Request, res: Response, next: NextFunction)=>{
  if(req.body.role && req.body.role === "admin"){
    console.log("welcome")
    next();
  }else{
    res.status(401).send("Unauthorized");
  }
}


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

app.get("/users",AuthMiddleware, (req:Request, res: Response)=>{
  console.log(req.body);
  res.send(req.body.name);
})

app.post("/users",AuthMiddleware, (req:Request, res: Response)=>{
  console.log(req.body);
  res.send(req.body.name);
})

app.put("/users",AuthMiddleware, (req:Request, res: Response)=>{
  console.log(req.body);
  res.send(req.body.name);
})

app.patch("/users",AuthMiddleware, (req:Request, res: Response)=>{
  console.log(req.body);
  res.send(req.body.name);
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
