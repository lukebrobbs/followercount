import TwitterRoutes from './twitter';
import YouTubeRoutes from './youTube';
import AllSocialRoutes from './allSocial';
import { Express } from 'express';

export const Routes = {
    create(app: Express) {
        app.use('/twitter', TwitterRoutes);
        app.use('/youtube', YouTubeRoutes);
        app.use('/allSocial', AllSocialRoutes);
    },
};
