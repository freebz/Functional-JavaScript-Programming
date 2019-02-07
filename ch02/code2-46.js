// 코드 2-46 이게 맞아?

function test2(a, b) {
  b = 10;
  console.log(arguments);
}
test2(1); // [1]
// [1]

test2(1, 2); // [2]
// [1, 10]
