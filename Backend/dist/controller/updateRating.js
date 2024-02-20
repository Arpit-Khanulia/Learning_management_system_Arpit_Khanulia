"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const course_1 = require("../model/course");
const updateRating = async (req, res) => {
    const data = req.body;
    const course = await course_1.Course.findOne({ _id: data.cid });
    if (course) {
        course.rating.push(data.rating);
        const newdata = new course_1.Course(course);
        await newdata.save();
        res.status(200).json({ message: 'Rating updated successfully' });
    }
    else {
        res.status(404).json({ message: 'Course not found' });
    }
};
exports.default = updateRating;
