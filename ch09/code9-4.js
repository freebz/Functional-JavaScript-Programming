// 코드 9-4

_.memoize = function (func, hasher) { // 본체 함수와 hasher 함수를 받음
  var memoize = function (key) {
    var cache = memoize.cache;
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    // hasher가 있으면 hasher에게도 인자들을 넘겨 cache의 key로 사용할 address를 생성
    // 없으면 첫 번째 인자를 그대로 사용
    if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
    // [1] 결과가 없을 때만 함수를 실행하여 cache에 담음
    return cache[address]; // 결과 리턴
  };
  memoize.cache = {}; // [2] 클로저를 사용하지 ㅇ낳고 리턴할 함수 자체에 cache를 달아둠
  return memoize;
};
