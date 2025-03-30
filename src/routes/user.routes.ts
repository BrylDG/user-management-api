import { Router, Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/Users";
import { validateUserRequest } from "../middleware/validate-request";
import * as bcrypt from 'bcrypt';

const router = Router();
const userRepository = AppDataSource.getRepository(User);

// Create User
router.post('/', validateUserRequest, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { firstname, lastname, middlename, email, password } = req.body;
        
        // Create user (password will be hashed by the @BeforeInsert hook)
        const user = userRepository.create({ firstname, lastname, middlename, email, password });
        await userRepository.save(user);
        
        // Return user with hashed password
        res.status(201).json({
            ...user,
            password: user.password // Show the hashed password
        });
    } catch (error) {
        next(error);
    }
});




export default router;