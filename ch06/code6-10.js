// 코드 6-10 _.initial, _.without

var b1 = [1, 2, 3, 4, 5];
var b2 = _.initial(b1, 2); // 뒤에서 2개 제거한 새로운 배열 리턴
console.log(b1 == b2, b1, b2);
// false [ 1, 2, 3, 4, 5 ] [ 1, 2, 3 ]

var b3 = _.without(b1, 1, 5); // 1과 5를 제거한 새로운 배열 리턴
var b4 = _.without(b3, 2);    // 2를 제거한 새로운 배열 리턴
console.log(b1 == b3, b3 == b4, b3, b4);
// false false [ 2, 3, 4 ] [ 3, 4 ]
