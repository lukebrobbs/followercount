import axios from 'axios';
import { RequestHandler, ErrorRequestHandler } from 'express';
import { twitterError } from '../utils/errorHandlers';

const twitterApi = axios.create({
    baseURL: 'https://api.twitter.com/1.1',
    headers: {
        Authorization: `Bearer ${process.env.TWITTER_ACCESS_TOKEN}`,
    },
    withCredentials: true,
});

export const twitterErrorHandler: ErrorRequestHandler = async (err, req, res, next) => {
    res.status(500).send(`Twitter API: ${err.message}`);
};

export const getUserFollowerCount: RequestHandler = async (req, res, next) => {
    try {
        const user = await twitterApi(`/users/lookup.json?screen_name=${req.params.user}`);
        res.send({ followerCount: user.data[0].followers_count });
    } catch (err) {
        twitterError(err, next);
    }
};
