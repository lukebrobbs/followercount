import { Router } from 'express';
import { getUserFollowerCount, youTubeErrorHandler } from '../controllers/youtube';

const youTubeRouter = Router();

youTubeRouter.get('/:user', getUserFollowerCount);

youTubeRouter.use(youTubeErrorHandler);

export default youTubeRouter;
