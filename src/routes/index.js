import newsRouter from './news.js';
import siteRouter from './site.js';

export function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}
