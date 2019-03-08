// 코드 9-1

function memoize(func) { // memoize는 함수를 받는 함수다.
  var cache = {};	 // 이 객체에 결과를 남겨둘 것이다.
  return function(arg) {
    if (cache[arg]) {  // 이미 동일 인자에 대한 결과가 있으면 리턴
      console.log('캐시로 결과 바로 리턴', arg);
      return cache[arg];
    }
    console.log('본체 실행', arg);
    return cache[arg] = func.apply(this, arguments); // 받아둔 함수를 실행하면서
    						     // 결과를 cache에 남겨둠
  }
}
