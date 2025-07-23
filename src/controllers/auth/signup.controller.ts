import { Response } from "express"
import { SignupRequest } from "../../types/signup"
import User from "../../models/userModel"

export const signupController = async (req: SignupRequest, res: Response) => {
    try {
        const { username, password } = req.body;

        if (!username || !password || password.length === 0) {
            res.status(400).json({ message: "Invalid input" })
        }

        await User.create({
            username,
            password
        })

        res.status(200).json({ message: "Signed up successfully! Please login again." })
    } catch (error) {
        console.log("ERROR FOUND: ", error)
    }
}