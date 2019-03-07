// 코드 7-41 test3

async function test3() {
  var list = [1, 3, 5, 6, 7, 9];
  return list.map(async function(val, i) {
    console.log(val, i);	  // 동시에 모두 실행됨
    return await delay(val * 10); // 동시에 모두 실행됨
  });
}

test3().then(function(result) {
  console.log(result);
  // [Promise, Promise, Promise, Promise, Promise, Promise]
  // 결과로 바뀌지 않은 Promise들
});
