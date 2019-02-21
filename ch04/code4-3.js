// 코드 4-3 skip 함수

function skip(body) {
  var yes;
  return function() {
    return yes || (yes = body.apply(null, arguments));
  }
}
