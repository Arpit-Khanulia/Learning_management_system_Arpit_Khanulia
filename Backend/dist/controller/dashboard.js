"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard = (req, res) => {
    const id = req.id;
    const role = req.role;
    res.send({ message: `you are a logged in user with user id ${id} and user role ${role}` });
};
exports.default = dashboard;
