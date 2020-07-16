Promise.all = function (promises) {
    return new Promise((resolve,reject)=>{
        let arr = [];
        let idx = 0;
        let processData = (value,index)=>{
            arr[index] = value;
            if(++idx === promises.length){
                resolve(arr);
            }
        }
        for(let i = 0 ; i < promises.length; i++){
            let currentValue  = promises[i];
            if(isPromise(currentValue)){
                currentValue.then((y)=>{
                    processData(y,i);
                },reject)
            }else{
                processData(currentValue,i);
            }
        }
    })
};