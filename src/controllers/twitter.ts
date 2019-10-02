import axios from 'axios';
import { ErrorRequestHandler } from 'express';

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

export const twitterFollowerCountRequest = async (username: string) => {
    try {
        const user = await twitterApi(`/users/lookup.json?screen_name=${username}`);
        return { twitterFollowerCount: user.data[0].followers_count };
    } catch (err) {
        throw new Error(err);
    }
};
