import { Router, Request, Response } from "express";
import { AuthMiddleware } from "../middlewares";
import { getAllUsers } from "../users/usersServices";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  try{
    const users = getAllUsers();
    res.send(users);
  }catch(err:any){
    console.log("error: ", err.message)
    res.status(500).send({message: err.message})
  }
  
});

router.get("/:id", (req: Request, res: Response) => {
  res.send("get {id}");
});

router.post("/", AuthMiddleware, (req: Request, res: Response) => {
  console.log(req.body);
  res.send("post /");
});

router.put("/:id", (req: Request, res: Response) => {
  res.send("put {id}");
});

router.delete("/:id", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("delete {id}");
});

export default router;
