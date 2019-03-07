// 코드 7-31 _.each

var list = _.each([1, 2, 3], function(v) {
  console.log(v);
});
console.log(list); // 결과 즉시 리턴
// 1
// 2
// 3
// [1, 2, 3]

var list2 = _.each([1, 2, 3], function(v) {
  return delay(v).then(console.log);
});
console.log(list2);
list2.then(console.log);
// Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined} 먼저 리턴
// 1 (1초 후)
// 2 (다시 1초 후)
// 3 (다시 1초 후)
// [1, 2, 3]

var list3 = _.each([1, 2, 3], function(v) {
  return _.go(delay(v), console.log); // _.go도 비동기를 제어한다.
});
console.log(list3);
list3.then(console.log);
// Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined} 먼저 리턴
// 1 (1초 후)
// 2 (다시 1초 후)
// 3 (다시 1초 후)
// [1, 2, 3]

var list4 = _.each([1, 2, 3], _.pipe(delay, console.log)); // _.pipe도 비동기를 제어한다.
console.log(list4);
list4.then(console.log);
// Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined} 먼저 리턴
// 1 (1초 후)
// 2 (다시 1초 후)
// 3 (다시 1초 후)
// [1, 2, 3]
