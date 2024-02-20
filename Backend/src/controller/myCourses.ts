import { Request, Response } from 'express';
import { Course } from '../model/course';

const myCourses = async (req: Request, res: Response) => {

    console.log('fetching my courses', req.id);
    
    try {

        const Tid = req.id;
        const courses = await Course.find({ tid: Tid });
        res.status(200).json({ courses });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching courses' });
    }
};

export default myCourses;
