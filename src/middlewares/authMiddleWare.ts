import { NextFunction, Request, Response } from "express";

const AuthMiddleware = (req: Request, res: Response, next: NextFunction)=>{
    if(req.body.role && req.body.role === "admin"){
      console.log("welcome")
      next();
    }else{
      res.status(401).send("Unauthorized");
    }
  }

  export default AuthMiddleware;