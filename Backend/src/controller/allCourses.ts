import { Request, Response } from 'express';
import { Course } from '../model/course';

const allCourses = async (req: Request, res: Response) => {
    try {
        const courses = await Course.find();
        res.status(200).json({ courses });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching courses' });
    }
};

export default allCourses;
