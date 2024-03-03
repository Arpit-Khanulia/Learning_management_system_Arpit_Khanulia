"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadCourse = void 0;
const cloudinary_1 = require("cloudinary");
const course_1 = require("../model/course");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
cloudinary_1.v2.config({
    cloud_name: 'di4jyusxf',
    api_key: '577412118699267',
    api_secret: 'HiVzZCHnGAWFvnR2-AROJ4wF1rw'
});
const initialvalues = {
    tid: "",
    uploader_name: "",
    title: "",
    category: "",
    price: "",
    description: "",
    videos: [],
    rating: []
};
let uploadCourse = async (req, res) => {
    try {
        const courseDetails = initialvalues;
        courseDetails.tid = req.id;
        courseDetails.uploader_name = req.body.uploader_name;
        courseDetails.title = req.body.title;
        courseDetails.category = req.body.category;
        courseDetails.price = req.body.price;
        courseDetails.description = req.body.description;
        courseDetails.videos = [];
        if (req.files) {
            const videoFiles = req.files;
            const uploadPromises = videoFiles.map(async (file) => {
                const result = await cloudinary_1.v2.uploader.upload(file.path, { resource_type: "video", streaming_profile: "full_hd" });
                console.log(result.secure_url);
                courseDetails.videos?.push(result.secure_url);
                return { url: result.secure_url };
            });
            const results = await Promise.all(uploadPromises);
            const newCourse = new course_1.Course(courseDetails);
            await newCourse.save();
            console.log('Course uploaded');
            res.json(results);
        }
        else {
            res.status(400).json({ message: "No file provided" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: "Video upload failed" });
    }
};
exports.uploadCourse = uploadCourse;
