import { Router } from 'express';
import { getAllSocialFollowerCount } from '../controllers/allSocial';

const allSocialRouter = Router();

allSocialRouter.post('/followers', getAllSocialFollowerCount);

export default allSocialRouter;
