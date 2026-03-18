const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const authRouter = express.Router();
// app.js file ke alawa agar kisi aur file me api create krni hai toh hame express.Router() ka use krna padta hai.

// /api/auth/register
authRouter.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: `User already exists with email: ${email}`
    });
  }

  const hash = crypto.createHash("md5").update(password).digest("hex");

  const user = await userModel.create({
    email,
    password: hash,
    name,
  });

  const token = jwt.sign(
        {id: user._id, email: user.email},
        process.env.JWT_SECRET
    );

    res.cookie("jwt_token", token);

  res.status(201).json({
    message: "User registered successfully",
    user,
    token
  });
});

// // /api/auth/protected
// authRouter.post("/protected", (req, res) => {
//   console.log(req.cookies);
// })

// /api/auth/login
// controller -> wo function jo tab execute hote hain jab api pe koi request aati hai
authRouter.post("/login", async (req, res) => {
  const {email, password} = req.body;
  const user = await userModel.findOne({email});

  if(!user){
    return res.status(404).json({
      message: `User not found with email: ${email}`,
      clickHere: "Create new Account"
    })
  }

  const isPasswordMatched = user.password === password;

  if(!isPasswordMatched){
    return res.status(401).json({
      message: `Invalid Password: ${password}`
    })
  }

  const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

  res.cookie("jwt_token", token);

  res.status(200).json({
    message: "User logged in successfully",
    user,
  })
})

module.exports = authRouter;
