// 코드 2-44 인자, this, arguments 출력

function test(a, b, c) {
  console.log("a b c:", a, b, c);
  console.log('this:', this);
  console.log('arguments:', arguments);
}
