"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const courseSchema = new mongoose_1.default.Schema({
    tid: {
        type: String,
        required: true
    },
    uploader_name: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    videos: {
        type: [String]
    },
    rating: {
        type: [Number]
    }
});
const Course = mongoose_1.default.model('Course', courseSchema);
exports.Course = Course;
