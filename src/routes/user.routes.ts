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

// Get/List all Users
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userRepository.find();
        res.json(users); // Returns all users with hashed passwords
    } catch (error) {
        next(error);
    }
});


// Get/List Specific User
router.get('/:id', async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) return res.status(400).json({ message: "Invalid user ID" });

        const user = await userRepository.findOneBy({ id });
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user); // Returns user with hashed password
    } catch (error) {
        next(error);
    }
});

//Update user
router.put('/:id', validateUserRequest, async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ message: "Invalid user ID" });
            return;
        }

        const user = await userRepository.findOneBy({ id });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // Handle password update securely
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }

        userRepository.merge(user, req.body);
        const updatedUser = await userRepository.save(user);
        res.json(updatedUser);
    } catch (error) {
        next(error);
    }
});

// Delete user
router.delete('/:id', async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        const result = await userRepository.delete(id);
        if (result.affected === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ 
            success: true,
            message: "User deleted successfully" 
        });
    } catch (error) {
        next(error);
    }
});


export default router;