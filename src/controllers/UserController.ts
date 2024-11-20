import express from 'express';
import { UserModel } from '../models/UserModel';

class UserController {
    getAllUser = async (req: express.Request, res: express.Response) => {
        try {
            const data = await UserModel.find();
            return res.status(200).json({
                data: data,
                status: 200,
                message: 'Data fetched successfully',
            });
        } catch (error) {
            console.error('Error fetching users:', error);
            return res.status(500).json({
                status: 500,
                message: 'Internal server error',
            });
        }
    };

    getUserId = async (req: express.Request, res: express.Response) => {
        try {
            const { id } = req.params;
            const data = await UserModel.findById(id);

            if (!data) {
                return res.status(404).json({
                    status: 404,
                    message: 'User not found',
                });
            }

            return res.status(200).json({
                data: data,
                status: 200,
                message: 'Data fetched successfully',
            });
        } catch (error) {
            console.error('Error fetching user by ID:', error);
            return res.status(500).json({
                status: 500,
                message: 'Internal server error',
            });
        }
    };
}

export default new UserController();
