class A {
    static staticMethod() {
        return 'a';
    }
}
A.staicProp = {
    name: 'od'
};
class B extends A {

}
console.log(A.staticMethod);
console.log(A.staticMethod());
console.log(B.staticMethod === A.staticMethod); // true
console.log(A.staicProp);
console.log(B.staicProp);
console.log(B.staicProp === A.staicProp);   // true
console.log(B.__proto__ === A); // true
console.log(B.hasOwnProperty('staicProp'));  // false
