// 코드 7-43 Partial.js - test3

function test3() {
  var list = [1, 3, 5, 6, 7, 9];
  return _.map(list, function(val, i) {
    console.log(val, i);    // 1초씩 순차적으로 실행됨
    return delay(val * 10); // 1초씩 순차적으로 실행되고 정상적으로 결과를 꺼냄
  });
}

test3().then(function(result) {
  console.log(result);
  // [10, 30, 50, 60, 70, 90]
});

// 사실 파이프라인을 사용하면 then도 없어도 된다.
_.go([1, 3, 5, 6, 7, 9],
  _.map(function(val) { return delay(val * 10); }),
  console.log);

// 화살표 함수와 함께라면 더 예쁘다.
_.go([1, 3, 5, 6, 7, 9], _.map(val => delay(val * 10)), console.log)
