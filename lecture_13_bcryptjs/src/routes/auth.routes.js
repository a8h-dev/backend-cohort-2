const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

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

  const user = await userModel.create({
    email,
    password,
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

// /api/auth/protected
authRouter.post("/protected", (req, res) => {
  console.log(req.cookies);
})

module.exports = authRouter;
