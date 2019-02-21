// 코드 4-5 id를 증가시키는 함수

function idMaker(start) {
  return function() {
    return ++start;
  }
}

var messageCid = idMaker(0);

messageCid();
// 1
messageCid();
// 2

var postCid = idMaker(11);

postCid();
// 12
postCid();
// 13
messageCid();
// 3
postCid();
// 14
