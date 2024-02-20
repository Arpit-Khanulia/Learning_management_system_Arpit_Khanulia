import {Request,Response} from 'express'
import { Course } from '../model/course'

interface dataType{
    cid:string,
    rating:number
}

interface courseType {
    tid: string;
    uploader_name: string;
    title: string;
    category: string;
    price: number;
    description: string;
    videos: string[];
    rating: number[];
}
const updateRating = async(req:Request,res:Response)=>{

    const data:dataType = req.body;
    const course:courseType|null = await Course.findOne({ _id: data.cid });

    if(course){
        course.rating.push(data.rating);

        const newdata  = new Course(course)
        await newdata.save();
        res.status(200).json({ message: 'Rating updated successfully' });
    }else{
        res.status(404).json({ message: 'Course not found' });
    }

}

export default updateRating;