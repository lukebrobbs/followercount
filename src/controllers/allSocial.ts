import { RequestHandler } from 'express';
import { twitterFollowerCountRequest } from './twitter';
import { youTubeFollowerCountRequest } from './youTube';
import { InstagramFollowerCountRequest } from './instagram';
import { IFollowerCount } from '../types';

export const getAllSocialFollowerCount: RequestHandler = async (req, res, next) => {
    const { twitterUsername, youTubeUsername, instagramUsername } = req.body;

    try {
        let twitterFollowers: IFollowerCount;
        let youTubeFollowers: IFollowerCount;
        let instagramFollowers: IFollowerCount;
        if (twitterUsername) {
            try {
                twitterFollowers = await twitterFollowerCountRequest(twitterUsername);
            } catch(err) {
                console.error(err)
            }
        }
        if (youTubeUsername) {
            try {
                youTubeFollowers = await youTubeFollowerCountRequest(youTubeUsername);
            } catch (err) {
                console.error(err);
            }
        }
        if (instagramUsername) {
            try {
                instagramFollowers = await InstagramFollowerCountRequest(instagramUsername);
            } catch (err) {
                console.error(err);
            }
        }

        const response = {
            twitterFollowers,
            youTubeFollowers,
            instagramFollowers,
        };
        res.send(response);
    } catch (err) {
        console.error(err);
        next(err);
    }
};
