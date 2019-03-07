// 코드 7-40 test2

async function test2() {
  var list = [1, 3, 5, 6, 7, 9];
  for (var i = 0; i < list.length; i++) {
    var value = await delay(list[i]);
    console.log(value); // 1초마다 한 번씩 실행
    if (await delay(value % 2 == 0)) return list[i];
  }
}

test2().then(function(result) {
  console.log(result);
  // 6
})
