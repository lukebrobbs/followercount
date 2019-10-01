import { Router } from 'express';
import { twitterErrorHandler, twitterFollowerCountRequest } from '../controllers/twitter';
import { twitterError } from '../utils/errorHandlers';

const twitterRoutes = Router();

twitterRoutes.get('/:user', async (req, res, next) => {
    try {
        const user = await twitterFollowerCountRequest(req.params.user);
        res.send(user);
    } catch (err) {
        twitterError(err, next);
    }
});

twitterRoutes.use(twitterErrorHandler);

export default twitterRoutes;
