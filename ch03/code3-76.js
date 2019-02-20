// 코드 3-76 bloop로 _.reduce 만들기

function bloop(new_data, body, stopper, is_reduce) { // reduce를 위한 하수인지의
  						     // 확인 여부 추가
  return function(data, iter_predi, opt1) { // reducd인 경우 세 번째 인자인
    					    // opt1로 memo를 받음
    iter_predi = iter_predi || _.idtt;
    var result = new_data(data);
    var memo = is_reduce ? opt1 : undefined; // reduce일 때만 memo를 opt1로 할당함
    					     // 아닐 때는 기존 유지함
    if (isArrayLike(data)) {
      for (var i = 0, len = data.length; i < len; i++) {
	memo = is_reduce ? // is_reduce 여부에 따라 인자 전달 개수 변경
	  iter_predi(memo, data[i], i, data) :
	  iter_predi(data[i], i, data);
	if (!stopper) body(memo, result, data[i], i);
	else if (stopper(memo)) return body(memo, result, data[i], i);
      }
    } else {
      for (var i = 0, keys = _.keys(data), len = keys.length; i < len; i++) {
	memo = is_reduce ? // is_reduce 여부에 따라 인자 전달 개수 변경
	  iter_predi(memo, data[keys[i]], keys[i], data) :
	  iter_predi(data[keys[i]], keys[i], data);
	if (!stopper) body(memo, result, data[keys[i]], keys[i]);
	else if (stopper(memo)) return body(memo, result, data[keys[i]], keys[i]);
      }
    }
    return is_reduce ? memo : result; // is_reduce 여부에 따라 리턴 값 변경
  }
}

_.reduce = bloop(_.noop, _.noop, undefined, true); // 마지막 인자 true는 is_reduce

_.reduce([1, 2, 3], function(memo, val) {
  return memo + val;
}, 0);
// 6

_.reduce(users, function(names, user) {
  if (user.age > 30) names.push(user.name);
  return names;
}, []);
// [ 'ID', 'JB', 'JM' ]
