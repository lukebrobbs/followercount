import { Router } from 'express';
import { getUserFollowerCount, twitterErrorHandler } from '../controllers/twitter';

const twitterRoutes = Router();

twitterRoutes.get('/:user', getUserFollowerCount);

twitterRoutes.use(twitterErrorHandler);

export default twitterRoutes;
