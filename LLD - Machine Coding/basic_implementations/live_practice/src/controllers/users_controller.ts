import type { NextFunction, Request, Response } from "express";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    setTimeout(()=>{}, 3000);

    return res.status(200).json({
        user: '123',
        name: 'Mayank'
    });
};