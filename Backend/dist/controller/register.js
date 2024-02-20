"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const student_1 = require("../model/student");
const teacher_1 = require("../model/teacher");
// registration functionality
const register = async (req, res) => {
    const data = req.body;
    console.log(data);
    let email1 = data.email;
    let username1 = data.username;
    let password1 = data.password;
    // unique username student
    let existingUser = await student_1.Student.findOne({ username: data.username });
    if (existingUser) {
        return res.status(400).send('Username already exists');
    }
    // unique username teacher
    existingUser = await teacher_1.Teacher.findOne({ username: data.username });
    if (existingUser) {
        return res.status(400).send('Username already exists');
    }
    // Validate user
    if (!email1 || !username1 || !password1) {
        res.status(400).send('Missing user information');
        return;
    }
    // Validate email pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email1)) {
        res.status(400).send('Invalid email format');
        return;
    }
    // Validate password (at least 8 characters, including special symbols and digits)
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password1)) {
        res.status(400).send('Invalid password format');
        return;
    }
    // Encrypt the password and save it to the database
    const encryptAndSavePassword = async () => {
        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt_1.default.hash(password1, saltRounds);
            data.password = hashedPassword;
            console.log('here');
            if (data.role == 'teacher') {
                console.log('not here');
                const newUser = new teacher_1.Teacher(data);
                await newUser.save();
                console.log('Teacher data saved successfully');
            }
            else if (data.role == 'student') {
                const newUser = new student_1.Student(data);
                await newUser.save();
                console.log('Student data saved successfully');
            }
        }
        catch (error) {
            console.error('Error saving user data:', error);
        }
    };
    encryptAndSavePassword();
    console.log('yaha tak to pohocha');
    res.sendStatus(200);
};
exports.register = register;
