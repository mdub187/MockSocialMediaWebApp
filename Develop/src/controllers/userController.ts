
// import { BSONRegExp, ObjectId, BSONValue } from 'bson';
// import { model, Model, } from 'mongoose';
// import { User, Thought } from '../models/index.js';
import { Request, Response } from 'express';
import { User } from '../models/index.js';


export const getAllUser = async (_req: Request, res: Response) => { 
    try {
        const users = await User.User.find({});
        res.json(users);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * GET User based on id /users/:id
 * @param string id
 * @returns a single User object
*/
export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        const user = await User.User.findById(userId);
        if (user) {
//             res.json({
//                 user,
//             });
//         } else {
//             res.status(404).json({
//             message: 'User not found'
//             });
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * POST User /users
 * @param object user
 * @returns a single User object
*/

export const createUser = async (req: Request, res: Response) => {
    const { username, email } = req.body;
    try {
        const newUser = await User.User.create({
            username, email
        });
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}
/**
 * DELETE User based on id /users/:id
 * @param string id
 * @returns string 
*/

export const removeUser = async (req: Request, res: Response) => {
    try {
        const user = await User.User.findById(req.params.userId);
        //const thought = await Thought.findOneAndDelete({ _id: req.params.userId });

        if (!user) {
            return res.status(404).json({ message: 'No such user exists' });
        }
        await User.User.findByIdAndDelete(req.params.userId);

        // const thoughts = await Thought.findOneAndUpdate(
        //     { users: req.params.userId },
        //     { $pull: { users: req.params.userId } },
        //     { new: true }
        // );

        // if (!thoughts) {
        //     return res.status(404).json({
        //         message: 'User deleted, but no thoughts found',
        //     });
        // }

        return res.json({ message: 'User successfully deleted' });
    } catch (err: any) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
 }

/**
 * POST Assignment based on /users/:studentId/assignments
 * @param string id
 * @param object assignment
 * @returns object user 
*/

export const addUser = async (req: Request, res: Response) => {
    console.log('You are adding a Friend');
    console.log(req.body);
    try {
        const user = await User.User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendsId } },
            { runValidators: true, new: true }
        );

        if (!user) {
            return res
                .status(404)
                .json({ message: 'No user found with that ID :(' });
        }

        return res.json(user);
    } catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

/**
 * DELETE Assignment based on /users/:studentId/assignments
 * @param string assignmentId
 * @param string studentId
 * @returns object user 
*/

export const removeFriends = async (req: Request, res: Response) => {
    try {
        const user = await User.User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendsId } },
            { runValidators: true, new: true }
        );

        if (!user) {
            return res
                .status(404)
                .json({ message: 'No user found with that ID :(' });
        }

        return res.json(user);
    } catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}
