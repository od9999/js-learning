let pattern2 = /<%([^%>]+)?%>/g;
let str2 = '<%aaa%> adswa asdwa <%bbb%>';

let matchPattern2 = pattern2.exec(str2);
console.log(matchPattern2);

matchPattern2 = pattern2.exec(str2);
console.log(matchPattern2);

matchPattern2 = pattern2.exec(str2);
console.log(matchPattern2);