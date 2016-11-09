var thisA = this;
function funOut(){
    var thisB = this;
    return function() {
        var thisC = this;
        console.log(thisA === thisB);
        console.log(thisB === thisC);
    };
}


// funOut()(); // true true

function Func() {
    this.a = 'aaa';
}
