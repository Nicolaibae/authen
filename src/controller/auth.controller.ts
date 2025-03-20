import User from "../model/user.model"
import { Request, Response } from "express"
import bycrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const register = async(req:Request , res: Response)=>{
    try {
        const {name,password}= req.body
        const user = await User.findOne({name})
        if(!user) throw new Error("vui lòng điền tên")
        const didUser = await User.findOne({name})
        if(didUser) throw new Error("đã tồn tại name")
        if(!password) throw new Error("vui lòng điền mật khẩu")
        const hashPassword = await bycrypt.hash(password,10)
    const newUser = new User({name,password:hashPassword})
    await newUser.save()
    res.status(201).json({ message: "User registered successfully" }); 
    } catch (error: unknown) {
        res.status(500).json({ message: (error as Error).message });
        
    }
}
export const login = async() =>{}