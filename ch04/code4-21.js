// 코드 4-21 Multiple Results

_.mr = function() {
  arguments._mr = true; // 인자들이 담긴 arguments 객체에 _mr로 구분자를 만듬
  return arguments;
};

_.pipeline = function() {
  var funs = arguments;

  return function(seed) {
    return _.reduce(funs,
      function(l, r) {
	// Multiple Results 라면 apply로 인자를 펼침
	return l && l._mr ? r.apply(null, l) : r(l);
      },
      arguments.length <2 ? seed : _.mr.apply(null, arguments));
    // 인자가 여러 개라면 첫 번째 함수에게도 Multiple Results로 만들어서 넘기기
  };
}
