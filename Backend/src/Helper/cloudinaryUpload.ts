import {v2 as cloudinary} from 'cloudinary';
import { Request,Response } from 'express';
import { Course } from '../model/course';
import dotenv from 'dotenv'


dotenv.config();


          
cloudinary.config({ 
  cloud_name: 'di4jyusxf', 
  api_key: '577412118699267', 
  api_secret: 'HiVzZCHnGAWFvnR2-AROJ4wF1rw' 
});

interface CourseType {
  tid: string|null;
  uploader_name: string|null;
  title: string|null;
  category: string|null;
  price: number|null;
  description: string|null;
  videos?: string[];
  rating?: number[];
}

const initialvalues: CourseType = {
  tid: "",
  uploader_name: "",
  title: "",
  category: "",
  price: 0,
  description: "",
  videos: [],
  rating: []
};

let uploadVideo = async (req:Request, res:Response) => {
  try {

      const courseDetails: CourseType = initialvalues;
      courseDetails.tid = req.id;
      courseDetails.uploader_name = req.body.uploader_name
      courseDetails.title  = req.body.title
      courseDetails.category  = req.body.category
      courseDetails.price  = req.body.price
      courseDetails.description  = req.body.description

      
      if (req.files) {
        const videoFiles:any = req.files;

        const uploadPromises = videoFiles.map(async (file:any) => {
          const result = await cloudinary.uploader.upload(file.path, { resource_type: "video",streaming_profile: "full_hd" });
          console.log(result.secure_url);
          courseDetails.videos?.push(result.secure_url);
          return { url: result.secure_url };
        });

        const results = await Promise.all(uploadPromises);
        const newCourse = new Course(courseDetails);
        await newCourse.save();
        console.log('Course uploaded');
        
        res.json(results);
      } else {
        res.status(400).json({ message: "No file provided" });
      }
  } catch (error) {
    res.status(400).json({ message: "Video upload failed" });
  }
};
export {uploadVideo};