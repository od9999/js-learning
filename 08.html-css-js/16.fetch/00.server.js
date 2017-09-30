const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/fetch-api', async (ctx, next) => {
    ctx.body = {
        errno: 0,
        msg: 'success',
        data: {
            name: 'ryan',
            test: 'fetch-api'
        }
    };
});


app.use(router.routes())
    .use(router.allowedMethods())
    .listen(8090, 'localhost');