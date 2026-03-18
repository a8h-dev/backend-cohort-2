const express = require("express");
const userModel = require("../models/user.model");

const authRouter = express.Router();
// app.js file ke alawa agar kisi aur file me api create krni hai toh hame express.Router() ka use krna padta hai.

// /api/auth/register
authRouter.post("/register", async (req, res) => {
    const {email, name, password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({email});

    if(isUserAlreadyExists){
        return res.status(409).json({
            message: `User already exists with email: ${email}`,
            isUserAlreadyExists
        })
    }
    
    const user = await userModel.create({
        email, password, name
    })

    res.status(201).json({
        message: "User registered successfully",
        user
    })
})

module.exports = authRouter;