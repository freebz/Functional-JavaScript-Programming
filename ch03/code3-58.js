// 코드 3-58 _.if를 이용하여 함수 만들기

_.toArray = function(list) {
  return Array.isArray(list) ? list : _.values(list);
};
_.toArray2 = _.if(Array.isArray, _.idtt, _.values);
// _.idtt = function(v) { return v; };

_.toArray2([1, 2, 3]); // _.idtt
// [ 1, 2, 3 ]
_.toArray2({0: 1, 1: 10, 2: 100, 3: 1000, length: 4}); // _.values
// [ 1, 10, 100, 1000 ]

_.constant = function(v) {
  return function() {
    return v;
  }
};

var square = _.safety(
  function(a) { return toString.call(a) == '[object Number]'; },
  function(a) { return a * a; },
  function() { return 0; }); // or _.constant(0);

square(5);
// 25
square("가나다");
// 0

_.isNumber = function(a) { return toString.call(a) == '[object Number]'; };
var square = _.safety(_.isNumber, a => a * a, () => 0);

square(5);
// 25
square("가나다");
// 0
