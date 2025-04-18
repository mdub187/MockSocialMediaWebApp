"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteThought = exports.updateThought = exports.createThought = exports.getThoughtById = exports.getAllThoughts = void 0;
var index_js_1 = require("../models/index.js");
/**
 * GET All Thoughts /thoughts
 * @returns an array of Thoughts
*/
var getAllThoughts = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var thoughts, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, index_js_1.Thought.find()];
            case 1:
                thoughts = _a.sent();
                res.json(thoughts);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json({
                    message: error_1.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllThoughts = getAllThoughts;
/**
 * GET Thought based on id /thought/:id
 * @param string id
 * @returns a single Thought object
*/
var getThoughtById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var thoughtsId, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                thoughtsId = req.params.thoughtsId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, index_js_1.Thought.findById(thoughtsId)];
            case 2:
                user = _a.sent();
                if (user) {
                    res.json(index_js_1.User);
                }
                else {
                    res.status(404).json({
                        message: 'User not found'
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                res.status(500).json({
                    message: error_2.message
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getThoughtById = getThoughtById;
/**
* POST Thought /thoughts
* @param object username
* @returns a single Thought object
*/
var createThought = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var thought, newThought, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                thought = req.body.thought;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, index_js_1.Thought.create({
                        thought: thought
                    })];
            case 2:
                newThought = _a.sent();
                res.status(201).json(newThought);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                res.status(400).json({
                    message: error_3.message
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createThought = createThought;
/**
 * PUT Thought based on id /thoughts/:id
 * @param object id, username
 * @returns a single Thought object
*/
var updateThought = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var thought, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, index_js_1.Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true })];
            case 1:
                thought = _a.sent();
                if (!thought) {
                    res.status(404).json({ message: 'No thought with this id!' });
                }
                res.json(thought);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.status(400).json({
                    message: error_4.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateThought = updateThought;
/**
* DELETE Thought based on id /thoughts/:id
* @param string id
* @returns string
*/
var deleteThought = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var thought, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, index_js_1.Thought.findOneAndDelete({ _id: req.params.thoughtId })];
            case 1:
                thought = _a.sent();
                if (!thought) {
                    res.status(404).json({
                        message: 'No thought with that ID'
                    });
                }
                else {
                    // await Users.deleteMany({ _id: { $in: thought.users } });
                    res.json({ message: 'Thought and users deleted!' });
                }
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                res.status(500).json({
                    message: error_5.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteThought = deleteThought;
