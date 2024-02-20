import  {Request,Response,NextFunction} from 'express';
import {verify} from 'jsonwebtoken'
import * as dotenv from 'dotenv';

dotenv.config();
const accessSecret: string = process.env.ACCESS_SECRET || '';


// Authenticator middleware


const authenticator = (req: Request, res: Response, next: NextFunction) => {
    
    
    let accessToken =  req.header('authorization');
    // console.log(`This is my token ${accessToken}`);
    
    if(!accessToken)
    accessToken = req.cookies.accessToken;
    
    if (!accessToken) {
        return res.status(401).send('Access token not found');
    }
    try {
        const decoded = verify(accessToken.replace('Bearer ', ''), accessSecret);
        
        const userdata :any = decoded;

        req.id = userdata.id;
        req.role = userdata.role;

        console.log('this is id',req.id);
        console.log('this is role',req.role);
        

        next();
    } catch (error) {
        return res.status(403).send('Invalid token');
    }
};

export {authenticator};