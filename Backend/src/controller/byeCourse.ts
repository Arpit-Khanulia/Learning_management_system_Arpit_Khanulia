import { Request, Response } from 'express';
import { Student } from '../model/student';

interface StudentType {
    name: string;
    username: string;
    email: string;
    password: string;
    role: string;
    courses: string[];
}

const byeCourse = async (req: Request, res: Response) => {
    const { cid } = req.body;
    const student:StudentType|null = await Student.findOne({ _id: req.id });

    if (student) {
        student.courses.push(cid);
        const newdata = new Student(student)
        await newdata.save();
        res.status(200).json({ message: 'Course added successfully' });
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
};

export default byeCourse;
