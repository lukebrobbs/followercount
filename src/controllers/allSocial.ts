import { RequestHandler } from 'express';
import { twitterFollowerCountRequest } from './twitter';
import { youTubeFollowerCountRequest } from './youTube';
import { InstagramFollowerCountRequest } from './instagram';
import { reflect } from '../utils/utils';

export const getAllSocialFollowerCount: RequestHandler = async (req, res, next) => {
    const prom = Promise.resolve(undefined);
    const { twitterUsername, youTubeUsername, instagramUsername } = req.body;

    const twitterFollowers = twitterUsername ? twitterFollowerCountRequest(twitterUsername) : prom;
    const youTubeFollowers = youTubeUsername ? youTubeFollowerCountRequest(youTubeUsername) : prom;
    const instagramFollowers = instagramUsername ? InstagramFollowerCountRequest(instagramUsername) : prom;

    try {
        const results = await Promise.all([twitterFollowers, youTubeFollowers, instagramFollowers].map(reflect));
        const successfulPromises = results.reduce((prev, curr) => {
            if (curr.status === 'fulfilled') {
                return {
                    ...prev,
                    ...curr.value,
                };
            }
            return prev;
        }, {});
        res.send(successfulPromises);
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
};
