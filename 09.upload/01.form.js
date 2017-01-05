const express = require('express');
const path = require('path');
const ejs = require('ejs');
const multer  = require('multer');

let upload = multer({ dest: '../public/upload/' });

let app = express();
// 当渲染模板的时候，没有指定后缀名的时候自动添加此后缀名来查找模板文件
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../views'));
app.engine('.html', ejs.__express);

// 静态文件中间件 指定静态文件存放的根目录的绝对路径
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(request, response){
    response.render('upload/form', {
        msg: 'upload form demo'
    });
});

// 传统的表单上传，属于"同步上传"。也就是说，点击上传按钮后，网页"锁死"，用户只能等待上传结束，然后浏览器刷新，跳到表单的action属性指定的网址。
app.post('/upload', upload.single('file'), function(request, response){
    console.log(request.file);
    response.end('a');
});

app.listen(8080);
