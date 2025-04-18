"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import { Schema } from "mongoose";
var reactionSchema = new Schema({
    reactionBody: { type: String, required: true, },
    userName: { type: String, required: true, },
    createdAt: { type: Number, default: Date.now() }
});
var thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Number,
        default: Date.now(),
    },
    reactions: [reactionSchema],
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
    timestamps: true
});
var Thoughts = (0, mongoose.model)('Thought', thoughtSchema);
const _default = Thoughts;
export { _default as default };
