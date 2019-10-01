import { RequestHandler } from 'express';
import { twitterFollowerCountRequest } from './twitter';
import { youTubeFollowerCountRequest } from './youTube';

export const getAllSocialFollowerCount: RequestHandler = async (req, res, next) => {
    const { twitterUsername, youTubeUsername } = req.body;

    try {
        let twitterFollowers: {
            followerCount: string;
        };
        let youTubeFollowers: {
            followerCount: string;
        };
        if (twitterUsername) {
            twitterFollowers = await twitterFollowerCountRequest(twitterUsername);
        }
        if (youTubeUsername) {
            youTubeFollowers = await youTubeFollowerCountRequest(youTubeUsername);
            console.log({ youTubeFollowers });
        }

        const response = {
            twitterFollowers,
            youTubeFollowers,
        };
        res.send(response);
    } catch (err) {
        console.error(err);
        next(err);
    }
};
