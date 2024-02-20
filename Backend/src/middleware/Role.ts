import { Request, Response, NextFunction } from 'express';

interface RoleCheckOptions {
  permittedRoles: string[];
}

const checkRole = (options: RoleCheckOptions) => {
  return (req: Request, res: Response, next: NextFunction) => {
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

export { checkRole };

