const Koa = require('koa');
const Router = require('koa-router');
const cors = require('kcors');

const app = new Koa();
const router = new Router();

app.use(cors());

router.get('/', async (ctx, next) => {
    ctx.body = 'hello koa2';
    console.log(11);
});

router.get('/spa', async (ctx, next) => {
    console.log('request /spa-----');
    ctx.body = {
        errno: 0,
        errmsg: 'success',
        data: {
            value: 11
        }
    };
});

app.use(router.routes())
    .use(router.allowedMethods())
    .listen(8090, 'localhost');
