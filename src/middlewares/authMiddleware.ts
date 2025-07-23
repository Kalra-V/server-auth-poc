import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

// export interface AuthRequest extends Request {
//     user: any
// }
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authCookie = req.cookies['authcookie'];

    if(!authCookie) {
        res.status(403).json({ message: 'Please login first. You aint authenticated' })
    }

    jwt.verify(authCookie, 'secret1234', (err: unknown, user: any) => {
        if (err) res.status(403).json({ message: "Shit happened in middleware" });

        // req.user = user;
        next();
    })
}