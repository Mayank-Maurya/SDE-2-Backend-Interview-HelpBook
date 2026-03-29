import express, { Request, Response, NextFunction } from "express";

const router = express.Router({ mergeParams: true });

router.get('', async (req: Request, res: Response, next: NextFunction) => {
    const url = 'https://dummyjson.com/users';
    console.log('came here');
    let ans:any = {};
    await fetch(url)
    .then(async (res) => {
        ans = await res.json();
    }).catch((err) => {
        ans = err;
        console.log(err);
    });

    return res.status(200).json(ans);
});

export default router;
