"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String,
        required: true,
        max_length: 50,
    },
    email: {
        type: String,
        required: true,
        max_length: 50,
    },
    thoughts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'thoughts',
        }],
    friends: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        }],
}, {
    toJSON: {
        getters: true,
    },
    timestamps: true
});
var User = (0, mongoose.model)('User', userSchema);
exports.default = { User: User, Types: mongoose.Types };
