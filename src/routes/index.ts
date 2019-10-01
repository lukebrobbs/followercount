import TwitterRoutes from './twitter';
import YoutubeRoutes from './youtube';
import { Express } from 'express';

export const Routes = {
    create(app: Express) {
        app.use('/twitter', TwitterRoutes);
        app.use('/youtube', YoutubeRoutes);
    },
};
