import express, { Request, Response } from 'express';
import { sequelize } from './db/sequelize';
import { signupController } from './controllers/auth/signup.controller';
import { loginController } from './controllers/auth/login.controller';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { authenticateToken } from './middlewares/authMiddleware';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cookieParser());
app.use(bodyParser.json());

try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully🚀")
    // await sequelize.sync({ force: true });
    // console.log("Synced with DB📊")
} catch (error) {
    console.error('Unable to connect to the database: ', error)
}

app.get('/', authenticateToken, (req: Request, res: Response) => {
    res.status(200).json({ message: "LESSGETTITT" });
})

app.post('/login', loginController)

app.post('/signup', signupController)

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
})