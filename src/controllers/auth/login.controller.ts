import { Response } from "express";
import { LoginRequest } from "../../types/login";
import User from "../../models/userModel";
import { error } from "console";
import jwt from 'jsonwebtoken'

export const loginController = async (req: LoginRequest, res: Response) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({
            where: {
                username,
                password
            }
        })

        if (!user) {
            throw error("User not found.");
        }

        const token = jwt.sign({ username, password }, 'secret1234');

        res.cookie('authcookie', token, { maxAge: 300000, httpOnly: true }).status(200).json({ message: "Logged in successfully!", user: user });
    } catch (error) {
        res.status(500).json({ message: "Shit happens" })
        console.log("ERROR IN LOGIN CONTROLLER: ", error)
    }

}