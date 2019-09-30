import TwitterRoutes from './twitter';
import { Express } from 'express';

export const Routes = {
    create(app: Express) {
        app.use('/twitter', TwitterRoutes);
    },
};
