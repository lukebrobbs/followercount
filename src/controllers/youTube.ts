import axios from 'axios';
import { ErrorRequestHandler } from 'express';
import { IYouTubeUserData } from '../types';

const youTubeApi = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

export const youTubeErrorHandler: ErrorRequestHandler = async (err, req, res, next) => {
    res.status(500).send(`YouTube API: ${err.message}`);
};

export const youTubeFollowerCountRequest = async (username: string) => {
    try {
        const user = await youTubeApi.get<IYouTubeUserData>(
            `/channels?part=statistics&forUsername=${username}&key=${process.env.YOUTUBE_API_KEY}`,
        );
        return { followerCount: user.data.items[0].statistics.subscriberCount };
    } catch (err) {
        throw new Error(err);
    }
};
