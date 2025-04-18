import { Thought, User } from '../models/index.js';

/**
 * GET All Thoughts /thoughts
 */
export const getAllThoughts = async (_req, res) => {
    try {
        const thought = await Thought.find();
        res.json(thought);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * GET Thought by ID /thoughts/:thoughtId
 */
export const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (thought) {
            res.json(thought);
        } else {
            res.status(404).json({ message: 'Thought not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * POST Thought /thoughts
 */
export const createThought = async (req, res) => {
    const { thoughtText, username, userId } = req.body;
    try {
        const newThought = await Thought.create({ thoughtText, username });
        await User.findByIdAndUpdate(userId, { $push: { thoughts: newThought._id } }, { new: true });
        res.status(201).json(newThought);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * PUT Thought /thoughts/:thoughtId
 */
export const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }
        res.json(thought);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * DELETE Thought /thoughts/:thoughtId
 */
export const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
        if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID' });
        }
        res.json({ message: 'Thought deleted!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
