import axios from 'axios';
import { RequestHandler, ErrorRequestHandler } from 'express';
import { IYouTubeUserData } from '../types';

const youTubeApi = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    headers: {
        Authorization: `Bearer ${process.env.YOUTUBE_ACCESS_TOKEN}`,
    },
    withCredentials: true,
});

export const youTubeErrorHandler: ErrorRequestHandler = async (err, req, res, next) => {
    res.status(500).send(`YouTube API: ${err.message}`);
};

export const getUserFollowerCount: RequestHandler = async (req, res, next) => {
    try {
        const user = await youTubeApi.get<IYouTubeUserData>(
            `/channels?part=statistics&forUsername=${req.params.user}&key=${process.env.YOUTUBE_API_KEY}`,
        );
        res.send({ followerCount: user.data.items[0].statistics.subscriberCount });
    } catch (err) {
        next(err);
    }
};
