"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("../model/student");
const byeCourse = async (req, res) => {
    const { cid } = req.body;
    const student = await student_1.Student.findOne({ _id: req.id });
    if (student) {
        student.courses.push(cid);
        const newdata = new student_1.Student(student);
        await newdata.save();
        res.status(200).json({ message: 'Course added successfully' });
    }
    else {
        res.status(404).json({ message: 'Student not found' });
    }
};
exports.default = byeCourse;
