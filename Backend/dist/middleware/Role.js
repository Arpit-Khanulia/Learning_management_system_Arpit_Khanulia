"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRole = void 0;
const checkRole = (options) => {
    return (req, res, next) => {
        const userRole = req.role;
        if (!userRole) {
            return res.status(401).send('User role not provided');
        }
        const { permittedRoles } = options;
        const isAllowed = permittedRoles.includes(userRole);
        if (!isAllowed) {
            return res.status(403).send('You do not have permission to perform this action');
        }
        next();
    };
};
exports.checkRole = checkRole;
