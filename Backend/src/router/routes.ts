import express from 'express';
import { register } from '../controller/register';
import { login } from '../controller/login';
import { authenticator } from '../middleware/auth';
import { checkRole } from '../middleware/Role';
import updateRating from '../controller/updateRating';
import byeCourse from '../controller/byeCourse';
import allCourses from '../controller/allCourses';
import myCourses from '../controller/myCourses';
import { upload } from '../middleware/multer';
import { uploadCourse } from '../controller/uploadCourse';



const router = express.Router();


router
.post('/login',login)
.post('/register',register)

// Student Routes
.get('/allcourses',authenticator,checkRole({ permittedRoles: ['student'] }),allCourses)
.get('/purchasedcourses',authenticator,checkRole({ permittedRoles: ['student'] }),allCourses)
.post('/byecourse',authenticator,checkRole({ permittedRoles: ['student'] }),byeCourse)
.post('/updaterating',authenticator,checkRole({ permittedRoles: ['student'] }),updateRating)


//Teacher Routes
.get('/mycourses',authenticator,checkRole({ permittedRoles: ['teacher'] }),myCourses)
.post('/uploadcourse',authenticator,checkRole({ permittedRoles: ['teacher'] }), upload.array('videos'), uploadCourse)







export {router}