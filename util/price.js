(function(global){
  global.PriceUtil = {
    version: '1.0',
    desc: 'Price Calculation Util'
  };
  PriceUtil.formatToPriceStr = function(num){
    checkNumValid(num);
    return (Math.trunc(num * 100) / 100).toFixed(2);
  };

  PriceUtil.add = function(num1, num2){
    return (Math.trunc(num1 * 100) + Math.trunc(num2 * 100) / 100).toFixed(2);
  };
  PriceUtil.minus = function(num1, num2){
    return (Math.trunc(num1 * 100) - Math.trunc(num2 * 100) / 100).toFixed(2);
  };


  // PriceUtil.add = function(num1, num2){
  //   checkNumValid(num1);
  //   checkNumValid(num2);
  //   return PriceUtil.formatToPriceStr(parseFloat(PriceUtil.formatToPriceStr(num1)) + parseFloat(PriceUtil.formatToPriceStr(num2)));
  // };
  PriceUtil.add = function(arg1, arg2){
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0; }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0; }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
  };
  // PriceUtil.minus = function(num1, num2){
  //   checkNumValid(num1);
  //   checkNumValid(num2);
  //   if(num1 < num2){
  //     return '0.00';
  //   }
  //   return PriceUtil.formatToPriceStr(parseFloat(PriceUtil.formatToPriceStr(num1)) - parseFloat(PriceUtil.formatToPriceStr(num2)));
  // };
  PriceUtil.minus = function(arg1, arg2) {
    var r1, r2, m, n;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    //last modify by deeka
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

  PriceUtil.multiply = function(num1, num2){
    return PriceUtil.formatToPriceStr(parseFloat(PriceUtil.formatToPriceStr(num1)) * parseFloat(PriceUtil.formatToPriceStr(num2)));
  };

  function checkNumValid(num){
    if(global.isNaN(num)){
      throw new Error(num + ' is not a valid number!');
    }
    if(num < 0){
      throw new Error(num + ' less than 0');
    }
  }
})(window);
