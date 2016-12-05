const express = require('express');
const path = require('path');
const ejs = require('ejs');

// http://www.toutiao.com/i6319632661472084481/?tt_from=weixin&utm_campaign=client_share&from=singlemessage&app=news_article&utm_source=weixin&iid=5834115148&utm_medium=toutiao_android&wxshare_count=3&pbid=28785882547
let app = express();
// 当渲染模板的时候，没有指定后缀名的时候自动添加此后缀名来查找模板文件
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../../views'));
app.engine('.html', ejs.__express);

// 静态文件中间件 指定静态文件存放的根目录的绝对路径
app.use(express.static(path.join(__dirname, '../../public')));

app.get('/jsonp', function(request, response){
    response.render('cross-domain/jsonp', {
        msg: 'jsonp demo'
    });
});

app.get('/json', function(request, response){
    var person = {
        "name": 'od',
        "age": 23
    };
    console.log(request.query);
    response.send(request.query.callback + '(' + JSON.stringify(person) + ')');
});

app.listen(8080);
