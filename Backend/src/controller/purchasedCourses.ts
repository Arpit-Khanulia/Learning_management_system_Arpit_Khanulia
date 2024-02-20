import { Student } from "../model/student";
import {Request,Response} from 'express'

interface StudentType {
    name: string;
    username: string;
    email: string;
    password: string;
    role: string;
    courses: string[];
}


const getPurchasedCourses = async (req: Request, res: Response) => {

    const student: StudentType | null = await Student.findOne({ _id: req.id });

    if (student) {
        res.status(200).json({ courses: student.courses });
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
};

export default getPurchasedCourses;
