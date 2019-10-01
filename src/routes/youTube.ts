import { Router } from 'express';
import { youTubeErrorHandler, youTubeFollowerCountRequest } from '../controllers/youTube';

const youTubeRouter = Router();

youTubeRouter.get('/:user', async (req, res, next) => {
    try {
        const user = await youTubeFollowerCountRequest(req.params.user);
        res.send(user);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

youTubeRouter.use(youTubeErrorHandler);

export default youTubeRouter;
