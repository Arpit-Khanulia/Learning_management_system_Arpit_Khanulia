"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const course_1 = require("../model/course");
const allCourses = async (req, res) => {
    try {
        const courses = await course_1.Course.find();
        res.status(200).json({ courses });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching courses' });
    }
};
exports.default = allCourses;
