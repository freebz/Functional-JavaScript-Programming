// 코드 7-42 Partial.js + async await - test3

async function test3() {
  var list = [1, 3, 5, 6, 7, 9];
  return _.map(list, async function(val, i) {
    console.log(val, i);	  // 1초씩 순차적으로 실행됨
    return await delay(val * 10); // 1초씩 순차적으로 실행되고 정상적으로 결과를 꺼냄
  });
}

test3().then(function(result) {
  console.log(result);
  // [10, 30, 50, 60, 70, 90]
});
