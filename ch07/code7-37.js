// 코드 7-37 test1

async function test1() {
  var a = await delay(1000);
  return a + 1000;
}

test1().then(function(result) {
  console.log(result);
  // 2000
});
