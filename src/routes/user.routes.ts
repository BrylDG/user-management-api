import { Router, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/Users";

const router = Router();
const userRepository = AppDataSource.getRepository(User);

// CREATE ONE USER
//userRouter.post('/', createUser);
router.post('/', async (req: Request, res: Response) => {
    try {
        const { firstname, lastname, middlename, email, password } = req.body;
        const user = userRepository.create({ firstname, lastname, middlename, email, password });
        await userRepository.save(user);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
});

//DELETE ONE USER
//userRouter.delete('/:id', deleteUser)

// GET ALL USERS
//userRouter.get("/", getAllUsers);

// GET ONE USER BY ID
//userRouter.get("/:id", getUserById);

