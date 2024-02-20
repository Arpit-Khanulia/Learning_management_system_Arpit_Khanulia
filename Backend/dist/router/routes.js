"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const register_1 = require("../controller/register");
const login_1 = require("../controller/login");
const auth_1 = require("../middleware/auth");
const Role_1 = require("../middleware/Role");
const updateRating_1 = __importDefault(require("../controller/updateRating"));
const byeCourse_1 = __importDefault(require("../controller/byeCourse"));
const allCourses_1 = __importDefault(require("../controller/allCourses"));
const myCourses_1 = __importDefault(require("../controller/myCourses"));
const multer_1 = require("../middleware/multer");
const cloudinaryUpload_1 = require("../Helper/cloudinaryUpload");
const router = express_1.default.Router();
exports.router = router;
router
    .post('/login', login_1.login)
    .post('/register', register_1.register)
    // Student Routes
    .get('/allcourses', auth_1.authenticator, (0, Role_1.checkRole)({ permittedRoles: ['student'] }), allCourses_1.default)
    .get('/purchasedcourses', auth_1.authenticator, (0, Role_1.checkRole)({ permittedRoles: ['student'] }), allCourses_1.default)
    .post('/byecourse', auth_1.authenticator, (0, Role_1.checkRole)({ permittedRoles: ['student'] }), byeCourse_1.default)
    .post('/updaterating', auth_1.authenticator, (0, Role_1.checkRole)({ permittedRoles: ['student'] }), updateRating_1.default)
    //Teacher Routes
    .get('/mycourses', auth_1.authenticator, (0, Role_1.checkRole)({ permittedRoles: ['teacher'] }), myCourses_1.default)
    .post('/uploadcourse', auth_1.authenticator, (0, Role_1.checkRole)({ permittedRoles: ['teacher'] }), multer_1.upload.array('videos'), cloudinaryUpload_1.uploadVideo);
