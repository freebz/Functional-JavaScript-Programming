// 코드 2-4 코드가 실행되는 key 영역

var obj6 = {};
obj6[true ? "a" : "b"] = 1;
console.log(obj6);
// { a: 1 }
