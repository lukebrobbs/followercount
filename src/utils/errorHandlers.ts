import { AxiosError } from 'axios';
import { NextFunction } from 'express';

export const twitterError = (err: AxiosError, next: NextFunction) => {
    console.error(err);
    if (err.response && err.response.statusText) {
        const error = new Error(err.response.statusText);
        next(error);
    } else {
        next(err);
    }
};
