const Koa = require('koa');
const Router = require('koa-router');
// 解决跨域问题
const cors = require('kcors');

const app = new Koa();
const router = new Router();

app.use(cors());

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