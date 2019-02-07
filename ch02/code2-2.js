// 코드 2-2 띄어쓰기, 특수 문자, 숫자

// 띄어쓰기를 써도 key로 만들 수 있다.
var obj2 = { " a a a ": 1 };
obj2[' b b b '] = 2;
console.log(obj2);
// { ' a a a ': 1, ' b b b ': 2 }

// 특수 문자를 써도 key로 만들 수 있다.
var obj3 = { "margin-top": 5 };
obj3["padding-bottom"] = 20;
console.log(obj3);
// { 'margin-top': 5, 'padding-bottom': 20 }

// 숫자도 key로 쓸 수 있다.
var obj4 = { 1: 10 };
obj4[2] = 20;
console.log(obj4);
// { '1': 10, '2': 20 }
