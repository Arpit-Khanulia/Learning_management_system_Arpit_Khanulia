"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("../model/student");
const getPurchasedCourses = async (req, res) => {
    const student = await student_1.Student.findOne({ _id: req.id });
    if (student) {
        res.status(200).json({ courses: student.courses });
    }
    else {
        res.status(404).json({ message: 'Student not found' });
    }
};
exports.default = getPurchasedCourses;
