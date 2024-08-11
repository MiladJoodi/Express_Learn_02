import { Request, Response } from "express";

export const getAllUsers = () => {
  console.log("get all users");
  if(true){
    throw new Error ("no users find yet because there is not database connection");
  }
  return [];
};
