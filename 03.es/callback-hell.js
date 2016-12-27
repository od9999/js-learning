function Deferred() {
    this.doneCallbacks = [];
    this.failCallbacks = [];
}

Deferred.prototype.done = function(cb){
    this.doneCallbacks.push(cb);
    return this;
};

Deferred.prototype.fail = function(cb){
    this.failCallbacks.push(cb);
    return this;
};

Deferred.prototype.resolve = function(){
    var dones = this.doneCallbacks;
    for(var i = 0, len = dones.length; i < len; i++){
        dones[i]();
    }
    return this;
};

// 模拟$.when的实现
function when() {
    var aIdx = 0,
        argsLength = arguments.length,
        deferred = new Deferred();
    function callback() {
        console.log("已执行了[ " + ++aIdx + " ]个方法");
        if(aIdx == argsLength) {
            deferred.resolve(); // 改变Deferred对象的执行状态
        }
    }
    for(var i = 0; i < argsLength; i++){
        arguments[i].done(callback);
    }
    return deferred;
}

// 自定义异步执行的方法
var wait = function(intval){
    var deferred = new Deferred(); //在函数内部，新建一个Deferred对象
    var tasks = function(){
        console.log("耗时[ " + intval + " ]ms的操作执行完毕！");
        deferred.resolve(); // 改变Deferred对象的执行状态
    };
   setTimeout(tasks, intval);
    return deferred; // 返回Deferred对象
};

// 调用测试
when(wait(1000), wait(2000))
    .done(function(){console.log('调用第一个done');})
    .done(function(){console.log('调用第二个done');});

console.log('over');