import express from "express";
import UserController from "../controllers/UserController";

const router = express.Router();

const asyncHandler = (fn: (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<any>) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        fn(req, res, next).catch(next);
    };
};

router.get('/user', asyncHandler(UserController.getAllUser));
router.get('/user/:id', asyncHandler(UserController.getUserId));


export default router;
