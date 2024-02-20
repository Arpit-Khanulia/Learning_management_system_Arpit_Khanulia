"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const course_1 = require("../model/course");
const myCourses = async (req, res) => {
    console.log('fetching my courses', req.id);
    try {
        const Tid = req.id;
        const courses = await course_1.Course.find({ tid: Tid });
        res.status(200).json({ courses });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching courses' });
    }
};
exports.default = myCourses;
