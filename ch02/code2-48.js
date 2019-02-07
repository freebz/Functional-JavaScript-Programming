// 코드 2-48 반대로 해보기

function test3(a, b) {
  arguments[1] = 10;
  console.log(b);
}

test3(1, 2);
// 10
