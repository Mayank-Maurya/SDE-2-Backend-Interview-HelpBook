import type { NextFunction, Request, Response } from "express";
import { userService } from "../services/userService.js";
import type { UserResponse } from "../types/users.js";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users: UserResponse[] = await userService.fetchUsers("https://dummyjson.com/users");

        const ex = users.reduce((prev, cur) => {
            return {
                id: prev.id + cur.id,
                firstName: prev.firstName + cur.firstName,
                gender: prev.gender + cur.gender,
            }
        });
        console.log(ex);

        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({
            error: err,
        });
    }
};

export default getUsers;