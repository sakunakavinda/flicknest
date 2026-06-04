import prisma from "../lib/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//create user
export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        passwordHash: hashedPassword,
      },
    });

    return res.status(201).json({ user, Messege: "User created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


//Login
export const loginUser = async (req,res)=> {
  try{
    const {email, password} = req.body;
    if (!email || !password) return res.status(400).json({error : "All fields are required"});

    const userFound = await prisma.user.findUnique({where: {email}});
    if (!userFound) return res.status(400).json({error: "User not found"})

    const isPasswordCorrect = await bcrypt.compare(password, userFound.passwordHash);
    if(!isPasswordCorrect) return res.status(400).json({error: "Invalid Credentials"});
    
    const token = jwt.sign({id: userFound.id}, process.env.JWT_SECRET, {expiresIn: "1d"});

    return res.status(200).json({user: userFound, token, messege: "Login successful"});
    
    
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};