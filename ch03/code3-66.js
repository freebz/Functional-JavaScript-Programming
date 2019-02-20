// 코드 3-65 _.find

_.noop = function() {};
_.idtt = function(v) { return v; };

_.find = bloop(
  _.noop, // new_data - 하나도 못 찾은 경우 undefined를 리턴하기 위해
  function(bool, result, val) { return val; }, // body - stopper 조건에
    					       // 부합한 경우 리턴할 값
  _.idtt); // stopper - 참일 때 나가기 위해 memo의 값을 그대로 리턴

_.find([1, 10, 100, 1000], function(v) { return v >50; });
// 100

var users = [
  { id: 2, name: "HA", age: 25 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 }
];
_.find(users, function(user) { return user.age == 27; });
// { id: 5, name: 'JE', age: 27 }
