const express = require('express');
const path = require('path');
const ejs = require('ejs');

let app = express();
// 当渲染模板的时候，没有指定后缀名的时候自动添加此后缀名来查找模板文件
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../../views'));
app.engine('.html', ejs.__express);

// 静态文件中间件 指定静态文件存放的根目录的绝对路径
app.use(express.static(path.join(__dirname, '../../public')));

// 通过http://d1.cross-domain.com:8080/d1访问
app.get('/d1', function(request, response){
    response.cookie('cookie1', '111', {
        domain: '.cross-domain.com'
    });
    response.render('cross-domain/document-domain/00.cookie/d1', {
        msg: 'http://d1.cross-domain.com:8080/d1'
    });
});

// 通过http://d2.cross-domain.com:8080/d2访问
app.get('/d2', function(request, response){
    response.cookie('cookie2', '222', {
        domain: '.cross-domain.com'
    });
    response.render('cross-domain/document-domain/00.cookie/d2', {
        msg: 'http://d1.cross-domain.com:8080/d2'
    });
});

app.listen(8080);
